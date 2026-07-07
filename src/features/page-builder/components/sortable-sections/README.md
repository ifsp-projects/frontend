# Page Builder Architecture

## Overview

The Page Builder is a dynamic, template-driven system that allows sections of a page to be rendered, customized, and reordered without coupling the rendering logic to specific templates.

The architecture is based on three main principles:

1. **Registry Pattern** for dynamic component resolution.
2. **Centralized State Management** using Zustand.
3. **Drag-and-Drop Reordering** using dnd-kit.

This approach allows new templates and sections to be added with minimal changes while maintaining strong TypeScript guarantees.

---

## High-Level Architecture

```text
Server Data
    │
    ▼
SortableSectionsHydrated
    │
    ▼
Page Builder Store (Zustand)
    │
    ▼
SortableSections
    │
    ▼
Template Registry
    │
    ▼
Section Components
```

---

## Core Components

### SortableSectionsHydrated

Responsible for synchronizing server-side data into the page builder store during the initial client-side hydration.

This component acts as a bridge between:

- Server-rendered page data
- Client-side page builder state

Responsibilities:

- Initialize section content
- Initialize color configuration
- Initialize section ordering
- Populate Zustand store

After hydration, the store becomes the single source of truth.

---

### SortableSections

Main orchestration component responsible for rendering all sections of a page.

Responsibilities:

- Resolve current section order
- Resolve active color palette
- Resolve active main color
- Configure drag-and-drop interactions
- Persist section reordering
- Render sections dynamically

This component is completely template-agnostic.

It only requires:

- Template type
- Section data
- Theme configuration

---

### SortableSection

Represents a single page section.

Responsibilities:

- Resolve the correct section component from the registry
- Configure drag-and-drop behavior
- Render editable controls when enabled
- Render the actual section implementation

Depending on the current mode:

- Editable → uses editable registry
- Readable → uses readable registry

---

## Registry Pattern

The system uses a registry-based architecture instead of conditional rendering.

### Avoided Approach

```tsx
if (template === 'primary') {
  return <PrimaryHeader />
}

if (template === 'secondary') {
  return <SecondaryHeader />
}
```

As templates grow, this quickly becomes difficult to maintain.

---

### Registry-Based Approach

```tsx
const Component =
  EDITABLE_TEMPLATE_SECTION_REGISTRY[template][section]
```

Benefits:

- No switch statements
- No template-specific rendering logic
- Centralized configuration
- Easier onboarding of new templates
- Better scalability

---

## Editable Registry

The editable registry maps sections to their editable implementations.

Example:

```tsx
primary: {
  header: PrimaryTemplateHeader,
  details: PrimaryTemplateDetails,
  faq: FAQ
}
```

Used when:

```tsx
isEditable === true
```

This version typically contains:

- Editing controls
- Form integrations
- Builder interactions

---

## Readable Registry

The readable registry maps sections to their public-facing implementations.

Example:

```tsx
primary: {
  header: PrimaryTemplateHeader,
  details: PrimaryTemplateDetails,
  faq: FAQ
}
```

Used when:

```tsx
isEditable === false
```

This version focuses purely on presentation.

---

## Type Safety

The registry is strongly typed using the template definition itself.

```tsx
type SectionKeys<T extends TemplateType> =
  (typeof DEFAULT_TEMPLATES_ORDER)[T][number]
```

This guarantees:

- Every template section must exist in the registry.
- Missing sections are caught during compilation.
- New sections cannot be forgotten.

Example:

If a new section is added:

```tsx
primary: [
  'header',
  'details',
  'gallery'
]
```

TypeScript will require:

```tsx
gallery: Component
```

to be registered.

---

## State Management

The Page Builder uses Zustand as the client-side source of truth.

The store contains:

### Section Order

```tsx
order: string[]
```

Controls the visual order of rendered sections.

---

### Sections Content

```tsx
sections: Record<string, unknown>
```

Stores the content for every section.

---

### Main Color

```tsx
mainColor: string
```

Primary theme color.

---

### Color Palette

```tsx
colorPalette: ColorPalette
```

Theme palette configuration.

---

## Theme Resolution

Theme values are resolved using the following priority order.

### Main Color

```text
Builder Store
    ↓
Server Initial Value
    ↓
Template Default
```

### Color Palette

```text
Builder Store
    ↓
Server Initial Value
    ↓
Template Default
```

This guarantees that:

- User customizations are preserved.
- Server values are respected.
- Templates always have valid fallbacks.

---

## Drag and Drop

Drag-and-drop functionality is powered by dnd-kit.

### Enabled Only in Edit Mode

```tsx
const sensors = isEditable
  ? useSensors(useSensor(PointerSensor))
  : undefined
```

This avoids:

- Unnecessary event listeners
- Additional runtime overhead
- Drag interactions on public pages

---

### Reordering Flow

```text
User Drags Section
        │
        ▼
handleDragEnd()
        │
        ▼
Calculate New Positions
        │
        ▼
Update Zustand Store
        │
        ▼
Re-render Sections
```

---

## Adding a New Template

### 1. Define Default Order

```tsx
export const DEFAULT_TEMPLATES_ORDER = {
  newTemplate: [
    'header',
    'about',
    'faq'
  ]
}
```

---

### 2. Create Readable Components

```text
readable-layout/
└── templates/
    └── new-template/
        └── sections/
```

---

### 3. Create Editable Components

```text
editable-layout/
└── templates/
    └── new-template/
        └── sections/
```

---

### 4. Register Editable Components

```tsx
EDITABLE_TEMPLATE_SECTION_REGISTRY.newTemplate = {
  header: Header,
  about: About,
  faq: FAQ
}
```

---

### 5. Register Readable Components

```tsx
READABLE_TEMPLATE_SECTION_REGISTRY.newTemplate = {
  header: Header,
  about: About,
  faq: FAQ
}
```

---

## Adding a New Section

### 1. Add Section to Template Order

```tsx
primary: [
  'header',
  'details',
  'gallery'
]
```

### 2. Create Editable Component

```tsx
GalleryEditable
```

### 3. Create Readable Component

```tsx
GalleryReadable
```

### 4. Register Both Components

```tsx
gallery: GalleryEditable
```

```tsx
gallery: GalleryReadable
```

TypeScript will enforce the registration automatically.

---

## Design Goals

This architecture was designed to achieve:

- Template independence
- Strong TypeScript guarantees
- Minimal conditional rendering
- Easy extensibility
- Centralized configuration
- Reusable rendering infrastructure
- Separation of editing and viewing experiences
- Predictable state management

---

## Summary

The Page Builder architecture combines:

- Zustand for state management
- dnd-kit for drag-and-drop interactions
- Registry Pattern for dynamic component resolution
- TypeScript for compile-time safety

The result is a scalable system where templates, sections, themes, and layouts can evolve independently while sharing the same rendering infrastructure.