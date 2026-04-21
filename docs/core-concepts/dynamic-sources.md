# Dynamic Sources

Load JSON from various sources at runtime.

## Static JSON

The simplest approach - pass JSON directly:

```tsx
<JSONUI json={myJson} />
```

## Function-Based Sources

Load JSON from a function:

```tsx
const fetchConfig = async () => {
  const response = await fetch('/api/ui-config');
  return response.json();
};

<JSONUI jsonSource={fetchConfig} />
```

## Observable Sources

Use RxJS-like observables for reactive updates:

```tsx
import { BehaviorSubject } from 'rxjs';

const uiSubject$ = new BehaviorSubject(defaultConfig);

<JSONUI jsonSource={uiSubject$} />
```

## Updating Observable Data

Update the UI by emitting new values:

```tsx
// In your app
uiSubject$.next(newConfig);

// The UI automatically re-renders
```

## Observable Interface

The observable must implement this interface:

```ts
interface Observable {
  subscribe: (callback: (value: any) => void) => {
    unsubscribe: () => void;
  };
}
```

## Comparison

| Source Type | Use Case | Pros | Cons |
|-------------|----------|------|------|
| Static JSON | Hardcoded UIs | Simple, no runtime | Must rebuild app |
| Function | API-loaded UIs | Dynamic, no rebuild | Network needed |
| Observable | Real-time UIs | Reactive updates | More complex |

## Best Practices

1. **Caching** - Cache API responses to reduce network calls
2. **Error handling** - Handle loading and error states
3. **Fallback** - Provide default UI when loading

## Example: Loading States

```tsx
const [json, setJson] = useState(defaultConfig);
const [loading, setLoading] = useState(false);

const loadConfig = async () => {
  setLoading(true);
  try {
    const config = await fetch('/api/ui').then(r => r.json());
    setJson(config);
  } catch (e) {
    console.error('Failed to load:', e);
  } finally {
    setLoading(false);
  }
};

<JSONUI json={loading ? loadingJson : json} />
```

## Next Section

- [Conditional Rendering](./conditional-rendering.md) - Show/hide components