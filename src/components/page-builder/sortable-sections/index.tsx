// features/page-builder/components/sortable-sections.tsx
'use client'

import { DEFAULT_TEMPLATES_ORDER } from '@/constants/page-templates/default-templates-order'
import { usePageBuilderStore } from '@/stores/page-builder-store'
import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'
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

function SortableSection({
  id,
  copy,
  template,
  isEditable
}: {
  id: string
  copy: any
  template: TemplateType
  isEditable: boolean
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
      <Component copy={copy} />
    </div>
  )
}

export function SortableSections({
  sections,
  template,
  isEditable
}: {
  sections: Record<string, any>
  template: TemplateType
  isEditable: boolean
}) {
  const order = usePageBuilderStore(s =>
    s.order.length ? s.order : DEFAULT_TEMPLATES_ORDER[template]
  )

  const reorderSections = usePageBuilderStore(s => s.reorderSections)

  const sensors = isEditable ? useSensors(useSensor(PointerSensor)) : undefined

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
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        {order.map(key => (
          <SortableSection
            copy={sections[key]}
            id={key}
            isEditable={isEditable}
            key={key}
            template={template}
          />
        ))}
      </SortableContext>
    </DndContext>
  )
}
