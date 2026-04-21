# JSON UI Basics

Learn how MEDHIRA renders UI from JSON definitions.

## Core Architecture

MEDHIRA follows a simple architecture:

1. **JSON Definition** - You describe your UI as JSON
2. **JSONUI Component** - The engine parses and renders the UI
3. **Runtime Updates** - UI updates automatically when JSON changes

## JSON Structure

Every UI component has this basic structure:

```json
{
  "type": "ComponentType",
  "showIf": true,
  "props": { ... },
  "properties": [ ... ]
}
```

| Property | Type | Description |
|----------|------|-------------|
| `type` | string | The type of component to render |
| `showIf` | boolean \| function | Conditional visibility |
| `props` | object | Component props passed to React Native |
| `properties` | array | Child components (for containers) |

## Component Types

### Leaf Components

Leaf components are atomic UI elements:

```json
{
  "type": "Text",
  "value": "Hello World"
}
```

```json
{
  "type": "Button",
  "props": { "title": "Click Me" }
}
```

### Container Components

Containers hold and render child components:

```json
{
  "type": "ViewContainer",
  "wrapperComponent": "View",
  "properties": [
    { "type": "Text", "value": "Child 1" },
    { "type": "Text", "value": "Child 2" }
  ]
}
```

## Complete Example

```tsx
const dashboard = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { flex: 1, padding: 16 } },
  properties: [
    {
      type: 'Text',
      value: 'My Dashboard',
      props: { style: { fontSize: 32, fontWeight: 'bold' } }
    },
    {
      type: 'ViewContainer',
      wrapperComponent: 'TouchableOpacity',
      props: { style: { marginTop: 20 } },
      properties: [
        {
          type: 'Text',
          value: 'Tap to refresh',
          props: { style: { color: 'blue' } }
        }
      ]
    }
  ]
};
```

## Next Section

- [Component Registry](./component-registry.md) - Create reusable components