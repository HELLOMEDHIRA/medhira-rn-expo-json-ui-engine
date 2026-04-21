# Quick Start

Get started with MEDHIRA JSON UI Engine in under 5 minutes.

## Your First JSON UI

Create a simple UI component using JSON:

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

const simpleUI = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { padding: 20 } },
  properties: [
    {
      type: 'Text',
      value: 'Hello, MEDHIRA!',
      props: { style: { fontSize: 24, fontWeight: 'bold' } }
    }
  ]
};

export default function App() {
  return <JSONUI json={simpleUI} />;
}
```

## Rendering Multiple Components

Build more complex UIs with nested components:

```tsx
const loginForm = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { padding: 20 } },
  properties: [
    {
      type: 'Text',
      value: 'Welcome Back',
      props: { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 } }
    },
    {
      type: 'TextInput',
      props: {
        placeholder: 'Email',
        style: { borderWidth: 1, padding: 10, marginBottom: 10 }
      }
    },
    {
      type: 'TextInput',
      props: {
        placeholder: 'Password',
        secureTextEntry: true,
        style: { borderWidth: 1, padding: 10, marginBottom: 20 }
      }
    },
    {
      type: 'Button',
      props: {
        title: 'Login',
        onPress: () => console.log('Login pressed')
      }
    }
  ]
};
```

## Using Dynamic Sources

Load JSON from a function or observable:

```tsx
// Function-based source
<JSONUI jsonSource={() => fetchMyJson()} />

// Observable source (RxJS-like)
<JSONUI jsonSource={myObservable$} />
```

## Next Steps

- [JSON UI Basics](../core-concepts/json-ui-basics.md) - Learn the core concepts
- [Component Registry](../core-concepts/component-registry.md) - Create reusable components
- [Advanced Examples](../examples/advanced-examples.md) - Complex use cases