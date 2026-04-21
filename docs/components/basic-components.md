# Basic Components

Core React Native components available in MEDHIRA.

## Text

Display text content:

```tsx
const text = {
  type: 'Text',
  value: 'Hello World',
  props: {
    style: { fontSize: 16, color: '#333' }
  }
};
```

## TextInput

User text input:

```tsx
const input = {
  type: 'TextInput',
  props: {
    placeholder: 'Enter text',
    style: { borderWidth: 1, padding: 8 }
  }
};
```

## Button

Touchable button:

```tsx
const button = {
  type: 'Button',
  props: {
    title: 'Press Me',
    onPress: () => console.log('Pressed!')
  }
};
```

## Image

Display images:

```tsx
const image = {
  type: 'Image',
  props: {
    source: { uri: 'https://example.com/image.png' },
    style: { width: 200, height: 200 }
  }
};
```

## ImageBackground

Image with overlay content:

```tsx
const bgImage = {
  type: 'ImageBackground',
  props: {
    source: { uri: 'https://example.com/bg.png' }
  },
  properties: [
    { type: 'Text', value: 'Overlaid Text' }
  ]
};
```

## View Container

Group components together:

```tsx
const group = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { padding: 16 } },
  properties: [
    { type: 'Text', value: 'Child 1' },
    { type: 'Text', value: 'Child 2' }
  ]
};
```

## All Basic Components

| Component | Description |
|----------|-------------|
| `Text` | Text display |
| `TextInput` | Text input |
| `Button` | Touchable button |
| `Image` | Image display |
| `ImageBackground` | Image with overlay |
| `ViewContainer` | Container wrapper |

## Next Section

- [Third-Party Components](./third-party-components.md)