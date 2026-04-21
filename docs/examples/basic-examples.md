# Basic Examples

Practical examples to get started with MEDHIRA.

## Hello World

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

const helloWorld = {
  type: 'Text',
  value: 'Hello, MEDHIRA!',
  props: {
    style: { fontSize: 24 }
  }
};

export default function App() {
  return <JSONUI json={helloWorld} />;
}
```

## Simple Form

```tsx
const loginForm = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { padding: 20 } },
  properties: [
    {
      type: 'Text',
      value: 'Welcome Back',
      props: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
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
      props: { title: 'Login' }
    }
  ]
};
```

## Card Component

```tsx
const card = {
  type: 'ViewContainer',
  wrapperComponent: 'TouchableOpacity',
  props: { style: { margin: 10, padding: 16, borderRadius: 8, elevation: 2 } },
  properties: [
    {
      type: 'Text',
      value: 'Card Title',
      props: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 }
    },
    {
      type: 'Text',
      value: 'Card description goes here',
      props: { fontSize: 14, color: '#666' }
    }
  ]
};
```

## List of Items

```tsx
const itemList = {
  type: 'ListContainer',
  props: {
    data: ['Apple', 'Banana', 'Orange'],
    estimatedItemSize: 50
  }
};
```

## Image with Text

```tsx
const imageCard = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { margin: 10 } },
  properties: [
    {
      type: 'Image',
      props: {
        source: { uri: 'https://example.com/image.jpg' },
        style: { width: '100%', height: 150, borderRadius: 8 }
      }
    },
    {
      type: 'Text',
      value: 'Image Caption',
      props: { marginTop: 8, fontSize: 14 }
    }
  ]
};
```

## Multiple Components

```tsx
const dashboard = {
  type: 'ViewContainer',
  wrapperComponent: 'SafeAreaView',
  props: { style: { flex: 1, padding: 16 } },
  properties: [
    {
      type: 'Text',
      value: 'Dashboard',
      props: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 }
    },
    {
      type: 'ViewContainer',
      wrapperComponent: 'View',
      props: { style: { flexDirection: 'row', flexWrap: 'wrap' } },
      properties: [
        { type: 'Text', value: 'Stat 1' },
        { type: 'Text', value: 'Stat 2' },
        { type: 'Text', value: 'Stat 3' }
      ]
    }
  ]
};
```

## Next Section

- [Advanced Examples](./advanced-examples.md)