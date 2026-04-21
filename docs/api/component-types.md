# Component Types

Complete reference for all component types in MEDHIRA.

## Enums

### ContainerTypes

| Type | Description |
|------|-------------|
| `ViewContainer` | Basic container wrapper |
| `ListContainer` | FlashList-based list |
| `ViewListContainer` | Container with embedded list |

### LeafTypes

| Type | Description |
|------|-------------|
| `Text` | Text display |
| `TextInput` | Text input field |
| `Button` | Touchable button |
| `Image` | Image display |
| `ImageBackground` | Image with overlay |
| `SectionList` | Sectioned list |
| `Checkbox` | Checkbox input |
| `LinearGradient` | Gradient background |
| `GLView` | OpenGL view |
| `LivePhotoView` | Live photo display |
| `StatusBar` | Status bar control |
| `VideoView` | Video player |
| `DateTimePicker` | Date/time picker |
| `Slider` | Slider input |
| `MaskedView` | Masked content |
| `SegmentedControl` | Segmented control |
| `Picker` | Selection picker |
| `LottieView` | Lottie animation |
| `Carousel` | Carousel view |

### ViewWrapperTypes

| Type | Description |
|------|-------------|
| `View` | Standard view |
| `SafeAreaView` | Safe area aware |
| `KeyboardAvoidingView` | Keyboard avoidance |
| `Pressable` | Pressable view |
| `TouchableHighlight` | Highlight on press |
| `TouchableOpacity` | Opacity on press |
| `TouchableWithoutFeedback` | No visual feedback |
| `BlurView` | Blur background |
| `CameraView` | Camera preview |

### CustomTypes

| Type | Description |
|------|-------------|
| `useComponent` | Registered component reference |

## TypeScript Interfaces

### BaseUIComponent

```ts
interface BaseUIComponent {
  type: UITypes;
  showIf?: boolean | ((context: any) => boolean);
}
```

### ViewContainerComponent

```ts
interface ViewContainerComponent extends BaseWrapperComponent {
  type: ContainerTypes.ViewContainer;
  properties: UIComponent[];
}
```

### ListContainerComponent

```ts
interface ListContainerComponent extends BaseUIComponent {
  type: ContainerTypes.ListContainer;
  props?: UIFlashListProps;
  components?: {
    headerComponent?: UIComponent;
    footerComponent?: UIComponent;
    emptyComponent?: UIComponent;
    itemSeparatorComponent?: UIComponent;
    cellRendererComponent?: UIComponent;
    stickyHeaderComponent?: UIComponent;
  };
}
```

### UseComponent

```ts
interface UseComponent<TRef extends string, TProps extends object> {
  type: CustomTypes.useComponent;
  ref: TRef;
  props?: TProps;
  properties?: UIComponent[];
}
```

## Next Section

- [Examples](../examples/basic-examples.md)