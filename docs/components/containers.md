# Container Components

Container components hold and render child components.

## ViewContainer

Basic container for wrapping components:

```tsx
const container = {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  props: { style: { padding: 16 } },
  properties: [
    { type: 'Text', value: 'Child 1' },
    { type: 'Text', value: 'Child 2' }
  ]
};
```

### Wrapper Types

| Wrapper | Use Case |
|---------|----------|
| `View` | Basic container |
| `SafeAreaView` | Safe area handling |
| `KeyboardAvoidingView` | Keyboard avoidance |
| `TouchableOpacity` | Touchable container |
| `TouchableHighlight` | Highlight on press |
| `TouchableWithoutFeedback` | No feedback |
| `Pressable` | Advanced touches |
| `BlurView` | Blur background |
| `CameraView` | Camera preview |

## ListContainer

Render lists with FlashList:

```tsx
const list = {
  type: 'ListContainer',
  props: {
    data: [{ id: 1 }, { id: 2 }, { id: 3 }],
    estimatedItemSize: 50
  },
  components: {
    headerComponent: { type: 'Text', value: 'Header' },
    footerComponent: { type: 'Text', value: 'Footer' },
    emptyComponent: { type: 'Text', value: 'No items' }
  }
};
```

### List Components

- `headerComponent` - List header
- `footerComponent` - List footer
- `emptyComponent` - Shown when no data
- `itemSeparatorComponent` - Item separator
- `cellRendererComponent` - Custom cell
- `stickyHeaderComponent` - Sticky header

## ViewListContainer

Container with embedded list:

```tsx
const viewList = {
  type: 'ViewListContainer',
  wrapperComponent: 'View',
  props: { style: { flex: 1 } },
  listProps: {
    data: items,
    estimatedItemSize: 60
  }
};
```

## Performance Tips

1. **Use estimatedItemSize** - Helps FlashList calculate layout
2. **Implement keyExtractor** - Unique keys for items
3. **Use recycling** - Reuse components efficiently

## Next Section

- [Basic Components](./basic-components.md)