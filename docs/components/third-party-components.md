# Third-Party Components

## VideoView

```tsx
{ type: 'VideoView', props: { /* expo-video props */ } }
```

## MaskedView

`maskElement` is a sibling JSON node (not inside `props`):

```tsx
{
  type: 'MaskedView',
  maskElement: { type: 'ViewContainer', wrapperComponent: 'View', properties: [] },
  children: [{ type: 'Image', props: { source: { uri: 'https://example.com/a.png' } } }]
}
```

## Carousel

Use `props.data` as an array of UI nodes:

```tsx
{
  type: 'Carousel',
  props: {
    width: 300,
    height: 200,
    data: [
      { type: 'Text', value: 'Slide 1' },
      { type: 'Text', value: 'Slide 2' }
    ]
  }
}
```

## PagerView

```tsx
{
  type: 'PagerView',
  pages: [
    { type: 'Text', value: 'Page 1' },
    { type: 'Text', value: 'Page 2' }
  ]
}
```

## Lists

Use `ListContainer` with FlashList — list `data` can be UI nodes or primitives (strings render as `Text`).

## Next

- [API Reference](../api/jsonui.md)
