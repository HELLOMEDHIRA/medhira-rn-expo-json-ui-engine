# Component Types

Public enums are available as `JSONUIEnums`.

## Containers

| Type | Description |
|------|-------------|
| `ViewContainer` | Wrapper + `properties` |
| `ListContainer` | FlashList |
| `ViewListContainer` | Wrapper + FlashList |

## Leaf components

| Type | Description |
|------|-------------|
| `Text` | Text display |
| `TextInput` | Input |
| `Button` | Button |
| `Image` | Image |
| `ImageBackground` | Background + overlay children |
| `SectionList` | Sectioned list |
| `Checkbox` | Checkbox |
| `LinearGradient` | Gradient |
| `GLView` | GL surface |
| `LivePhotoView` | Live photo |
| `StatusBar` | Status bar |
| `VideoView` | Video |
| `DateTimePicker` | Modal picker |
| `Slider` | Slider |
| `MaskedView` | Masked content |
| `SegmentedControl` | Segments |
| `Picker` | Wheel picker |
| `LottieView` | Lottie animation |
| `Carousel` | Reanimated carousel (`props.data`) |
| `PagerView` | Horizontal pages (`pages` or `children`) |

## Wrappers (`ViewContainer`)

`View`, `SafeAreaView`, `KeyboardAvoidingView`, `Pressable`, `TouchableHighlight`, `TouchableOpacity`, `TouchableWithoutFeedback`, `BlurView`, `CameraView`

## Custom

| Type | Description |
|------|-------------|
| `useComponent` | Reference to `defineUseComponent` |

## Next

- [Basic Examples](../examples/basic-examples.md)
