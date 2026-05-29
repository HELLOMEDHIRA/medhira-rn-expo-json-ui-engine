# JSONUI

Main entry component.

## Import

```tsx
import { JSONUI, JSONUIErrorBoundary } from 'medhira-rn-expo-json-ui-engine';
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `json` | `UIComponent \| UIComponent[]` | Static tree |
| `jsonSource` | `JSONSource` | Static, function, Promise, or observable |
| `context` | `Record<string, unknown>` | Data for `showIf` functions |
| `loadingComponent` | `ReactNode` | Shown while async `jsonSource` loads |
| `errorFallback` | `ReactNode` | Shown if rendering throws |
| `onRenderError` | `(error: Error) => void` | Error callback |

## Examples

```tsx
<JSONUI json={{ type: 'Text', value: 'Hi' }} />

<JSONUI jsonSource={async () => fetchUi()} context={{ role: 'admin' }} />
```

## Error boundary

```tsx
<JSONUIErrorBoundary fallback={<Text>Something went wrong</Text>}>
  <JSONUI json={ui} />
</JSONUIErrorBoundary>
```

`JSONUI` wraps an error boundary by default.

## Next

- [Component Types](./component-types.md)
