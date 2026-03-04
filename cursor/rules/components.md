---
description:
globs: globs: **/*.tsx,**/components/**/*
alwaysApply: true
---
# Compound Component Pattern

## Overview
The compound component pattern provides a flexible, composable architecture for creating complex UI components. This pattern allows for maximum flexibility and reusability by breaking down components into smaller, focused sub-components that work together.

## Core Principles

### Single Responsibility
Each sub-component should have a single, well-defined purpose and responsibility.

### Composition Over Configuration
Prefer composition through sub-components over complex prop configurations.

### Consistent API
Maintain consistent prop patterns and naming conventions across all sub-components.

### Flexible Children
Use `ReactNode` for children to allow maximum flexibility in content.

## Implementation Pattern

### Basic Structure
```tsx
// Main container component
export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={cn('base-styles', className)} {...props}>
      {children}
    </div>
  );
};

// Sub-component
export type SubComponentProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const SubComponent = ({ children, onClick, disabled, className, ...props }: SubComponentProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn('sub-component-styles', className)}
      {...props}
    >
      {children}
    </button>
  );
};

// Compound component assignment
Container.SubComponent = SubComponent;
```

### TypeScript Integration
```tsx
// Create compound component type
type ContainerComponent = typeof Container & {
  SubComponent: typeof SubComponent;
};

// Type-safe assignment
const ContainerWithSubComponents = Container as ContainerComponent;
ContainerWithSubComponents.SubComponent = SubComponent;
```

## Design Guidelines

### Naming Conventions
- Use descriptive, hierarchical names: `Container.SubComponent`
- Follow PascalCase for component names
- Use consistent prop naming across sub-components

### Props Design
- Extend appropriate HTMLAttributes for native HTML props
- Use `ReactNode` for children content
- Include `className` for styling flexibility
- Provide sensible defaults for optional props

### Styling Patterns
- Use TailwindCSS utility classes
- Support dark mode with `dark:` variants
- Implement consistent hover and focus states
- Use `cn()` utility for conditional classes
- Maintain consistent spacing and sizing

### Accessibility
- Include proper ARIA attributes
- Support keyboard navigation
- Use semantic HTML elements
- Provide meaningful titles and labels

## Usage Patterns

### Basic Composition
```tsx
<Container>
  <Container.SubComponent onClick={handleAction}>
    <Icon />
  </Container.SubComponent>
</Container>
```

### Multiple Sub-components
```tsx
<Container>
  <Container.SubComponent onClick={handleAction1}>
    <Icon1 />
  </Container.SubComponent>
  <Container.SubComponent onClick={handleAction2}>
    <Icon2 />
  </Container.SubComponent>
</Container>
```

### Conditional Rendering
```tsx
<Container>
  {showAction && (
    <Container.SubComponent onClick={handleAction}>
      <Icon />
    </Container.SubComponent>
  )}
</Container>
```

### Custom Styling
```tsx
<Container className="custom-container">
  <Container.SubComponent 
    className="custom-sub-component"
    onClick={handleAction}
  >
    <Icon />
  </Container.SubComponent>
</Container>
```

## Implementation Best Practices

### Component Structure
1. **Keep components focused** - Each sub-component should have a single responsibility
2. **Use forwardRef** - For proper ref forwarding when needed
3. **Implement displayName** - For better debugging experience
4. **Use cloneElement** - For prop spreading in compound components

### TypeScript
1. **Create proper types** - Define clear interfaces for all props
2. **Extend HTMLAttributes** - For native HTML prop support
3. **Use generic types** - For reusable component patterns
4. **Create compound types** - For type-safe sub-component assignments

### Performance
1. **Use React.memo** - For expensive components when needed
2. **Avoid unnecessary re-renders** - With proper prop design
3. **Use useCallback** - For event handlers when appropriate
4. **Optimize children rendering** - Only render what's needed

### Testing
1. **Test sub-components individually** - Ensure each works in isolation
2. **Test composition** - Verify sub-components work together
3. **Test accessibility** - Ensure proper ARIA support
4. **Test edge cases** - Handle missing or invalid children

## Common Patterns

### Container + Items
```tsx
<List>
  <List.Item>Item 1</List.Item>
  <List.Item>Item 2</List.Item>
</List>
```

### Form + Fields
```tsx
<Form>
  <Form.Field>
    <Form.Label>Name</Form.Label>
    <Form.Input />
  </Form.Field>
</Form>
```

### Menu + Options
```tsx
<Menu>
  <Menu.Option onClick={handleAction1}>Action 1</Menu.Option>
  <Menu.Option onClick={handleAction2}>Action 2</Menu.Option>
</Menu>
```

### Card + Sections
```tsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Content>Content</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

## Anti-patterns to Avoid

1. **Over-nesting** - Don't create unnecessary levels of sub-components
2. **Prop drilling** - Use context or other patterns for deeply nested data
3. **Inconsistent APIs** - Maintain consistent prop patterns across sub-components
4. **Tight coupling** - Sub-components should be loosely coupled
5. **Complex prop interfaces** - Keep prop interfaces simple and focused

## Migration Strategy

When converting existing components to compound pattern:

1. **Identify logical sub-components** - Break down by functionality
2. **Extract common props** - Move shared props to container
3. **Create sub-component interfaces** - Define clear APIs
4. **Maintain backward compatibility** - Support existing usage patterns
5. **Update documentation** - Provide clear migration guides---
alwaysApply: true
---
