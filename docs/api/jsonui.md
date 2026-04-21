# JSONUI Component

The main component for rendering JSON-defined UIs.

## Import

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';
```

## Props

### `json`

Static JSON component definition.

```tsx
<JSONUI json={myComponent} />
```

Type: `UIComponent | UIComponent[]`

### `jsonSource`

Dynamic source for the UI - can be a function or observable.

```tsx
// Function
<JSONUI jsonSource={() => fetchConfig()} />

// Observable
<JSONUI jsonSource={observable$} />

// Lazy function
<JSONUI jsonSource={myLazyJson} />
```

Type: `JSONSource`

```ts
type JSONSource =
  | UIComponent
  | UIComponent[]
  | (() => UIComponent | UIComponent[])
  | { subscribe: (cb: (val: any) => void) => { unsubscribe: () => void } };
```

## Basic Usage

### Static JSON

```tsx
const myUI = {
  type: 'Text',
  value: 'Hello!'
};

<JSONUI json={myUI} />
```

### Array of Components

```tsx
const components = [
  { type: 'Text', value: 'Item 1' },
  { type: 'Text', value: 'Item 2' }
];

<JSONUI json={components} />
```

### Dynamic Source

```tsx
<JSONUI jsonSource={() => {
  // Return component or array
  return fetch('/api/ui').then(r => r.json());
}} />
```

## Observable Pattern

```tsx
import { BehaviorSubject } from 'rxjs';

const config$ = new BehaviorSubject(defaultConfig);

function App() {
  // Update will trigger re-render
  const updateConfig = (newConfig) => {
    config$.next(newConfig);
  };

  return <JSONUI jsonSource={config$} />;
}
```

## Best Practices

1. **Always provide fallback** - Use default UI when loading
2. **Handle errors** - Wrap in error boundaries
3. **Memoize complex JSON** - Use `useMemo` for expensive calculations

## Next Section

- [Component Types](./component-types.md)