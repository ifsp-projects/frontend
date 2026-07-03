'use client'

import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from 'capivara-solidaria-ts-sdk'
import type { ColorPalette, TemplateType } from 'capivara-solidaria-ts-sdk'

import { usePageBuilderStore } from '@/stores/page-builder-store'
import type { DragEndEvent } from '@dnd-kit/core'
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { EDITABLE_TEMPLATE_SECTION_REGISTRY } from './registry/editable'
import { READABLE_TEMPLATE_SECTION_REGISTRY } from './registry/readable'

/**
 * Responsible for rendering a single page section.
 *
 * This component abstracts the differences between editable and
 * public/read-only modes:
 *
 * - In editable mode, it enables drag-and-drop reordering through dnd-kit.
 * - In readable mode, it renders the section without any editing controls.
 *
 * The actual section implementation is resolved dynamically from the
 * template registry, allowing templates to define their own section
 * components while sharing the same rendering infrastructure.
 */
function SortableSection({
  id,
  copy,
  template,
  isEditable,
  mainColor,
  colorPalette
}: {
  id: string
  copy: any
  template: TemplateType
  isEditable: boolean
  mainColor: string
  colorPalette: ColorPalette
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, disabled: !isEditable })

  const Component = isEditable
    ? EDITABLE_TEMPLATE_SECTION_REGISTRY[template][id]
    : READABLE_TEMPLATE_SECTION_REGISTRY[template][id]
  if (!Component) return null

  return (
    <div
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        position: 'relative'
      }}
      ref={setNodeRef}
    >
      {isEditable ? (
        <button
          {...(isEditable ? attributes : {})}
          {...(isEditable ? listeners : {})}
          aria-label={`Reorder ${id}`}
          className="absolute top-2 left-2 z-50 cursor-grab rounded bg-white/80 p-1 shadow"
        >
          ⠿
        </button>
      ) : null}
      <Component copy={copy} mainColor={mainColor} palette={colorPalette} />
    </div>
  )
}

/**
 * Main page-builder renderer.
 *
 * Renders all sections for a given template and optionally enables
 * drag-and-drop reordering when editing is allowed.
 *
 * Responsibilities:
 * - Resolve the current section order.
 * - Resolve active theme colors and palette.
 * - Configure dnd-kit drag-and-drop behavior.
 * - Persist section reordering through the page builder store.
 * - Render sections using the template registry.
 *
 * This component acts as the orchestration layer between:
 * - Template definitions
 * - Theme configuration
 * - Page builder state
 * - Drag-and-drop interactions
 */
export function SortableSections({
  sections,
  template,
  isEditable,
  initialColorPalette,
  initialMainColor
}: {
  sections: Record<string, any>
  template: TemplateType
  isEditable: boolean
  initialColorPalette?: ColorPalette
  initialMainColor?: string
}) {
  /**
   * Uses the persisted order from the builder store.
   * Falls back to the default template structure when no custom order exists.
   */
  const order: readonly string[] = usePageBuilderStore(s =>
    s.order.length ? s.order : DEFAULT_TEMPLATES_ORDER[template]
  )

  /**
   * Resolves the active color palette following the priority:
   *
   * 1. User customization from the page builder store.
   * 2. Initial palette provided by the server.
   * 3. Template default palette.
   */
  const colorPalette =
    usePageBuilderStore(p =>
      p.colorPalette?.original ? p.colorPalette : null
    ) ??
    initialColorPalette ??
    DEFAULT_TEMPLATE_COLOR_PALLETES[template]

  /**
   * Resolves the active primary color following the same
   * precedence rules used for palette selection.
   */
  const mainColor =
    usePageBuilderStore(c => c.mainColor || null) ??
    initialMainColor ??
    DEFAULT_TEMPLATE_COLORS[template]

  const reorderSections = usePageBuilderStore(s => s.reorderSections)

  /**
   * Drag sensors are only initialized when the page is editable.
   *
   * Avoiding sensor registration in read-only mode prevents
   * unnecessary event listeners and improves performance.
   */
  const sensors = isEditable ? useSensors(useSensor(PointerSensor)) : undefined

  /**
   * Updates section order after a drag operation completes.
   *
   * If the dragged section changed position, the new order
   * is persisted in the page builder store.
   */
  function handleDragEnd(event: DragEndEvent) {
    if (!isEditable) return

    const { active, over } = event
    if (!over || active.id === over.id) return

    const fromIndex = order.indexOf(active.id as string)
    const toIndex = order.indexOf(over.id as string)
    reorderSections(fromIndex, toIndex, template)
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={isEditable ? handleDragEnd : undefined}
      sensors={sensors}
    >
      <SortableContext
        items={[...order]}
        strategy={verticalListSortingStrategy}
      >
        {order.map(key => (
          <SortableSection
            colorPalette={colorPalette}
            copy={sections[key]}
            id={key}
            isEditable={isEditable}
            key={key}
            mainColor={mainColor}
            template={template}
          />
        ))}
      </SortableContext>
    </DndContext>
  )
}
