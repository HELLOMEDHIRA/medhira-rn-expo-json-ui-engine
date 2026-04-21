# Third-Party Components

Advanced components from Expo and React Native ecosystem.

## Expo Components

### VideoView

```tsx
const video = {
  type: 'VideoView',
  props: {
    source: { uri: 'https://example.com/video.mp4' },
    style: { width: '100%', height: 200 }
  }
};
```

### CameraView

```tsx
const camera = {
  type: 'CameraView',
  props: {
    style: { width: '100%', height: 300 }
  }
};
```

### LinearGradient

```tsx
const gradient = {
  type: 'LinearGradient',
  props: {
    colors: ['#FF6B6B', '#4ECDC4'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 }
  },
  properties: [
    { type: 'Text', value: 'On Gradient' }
  ]
};
```

### StatusBar

```tsx
const statusBar = {
  type: 'StatusBar',
  props: {
    style: 'dark'
  }
};
```

## Input Components

### Checkbox

```tsx
const checkbox = {
  type: 'Checkbox',
  props: {
    value: false,
    onValueChange: (val) => console.log(val)
  }
};
```

### Slider

```tsx
const slider = {
  type: 'Slider',
  props: {
    minimumValue: 0,
    maximumValue: 100,
    onValueChange: (val) => console.log(val)
  }
};
```

### DateTimePicker

```tsx
const picker = {
  type: 'DateTimePicker',
  props: {
    mode: 'date',
    onDateChange: (date) => console.log(date)
  }
};
```

### SegmentedControl

```tsx
const segmented = {
  type: 'SegmentedControl',
  props: {
    values: ['Option 1', 'Option 2', 'Option 3'],
    selectedIndex: 0
  }
};
```

### Picker

```tsx
const picker = {
  type: 'Picker',
  props: {
    selectedValue: 'option1',
    onValueChange: (val) => console.log(val)
  },
  items: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ]
};
```

## Animation & Media

### LottieView

```tsx
const lottie = {
  type: 'LottieView',
  props: {
    source: require('./animation.json'),
    autoPlay: true,
    loop: true
  }
};
```

### Carousel

```tsx
const carousel = {
  type: 'Carousel',
  props: {
    data: [item1, item2, item3],
    width: 300,
    height: 200
  }
};
```

### FlashList

```tsx
const flashList = {
  type: 'ListContainer',
  props: {
    data: items,
    estimatedItemSize: 50
  }
};
```

## Advanced Views

### MaskedView

```tsx
const masked = {
  type: 'MaskedView',
  props: {
    maskElement: { type: 'ViewContainer', ... }
  },
  properties: [
    { type: 'Image', ... }
  ]
};
```

### GLView

```tsx
const glView = {
  type: 'GLView',
  props: {
    style: { width: 300, height: 300 }
  }
};
```

## Next Section

- [API Reference](../api/jsonui.md)