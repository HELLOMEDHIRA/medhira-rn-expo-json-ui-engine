import type { FlashListProps } from '@shopify/flash-list';
import type { BlurViewProps } from 'expo-blur';
import type { CameraViewProps } from 'expo-camera';
import type { CheckboxProps } from 'expo-checkbox';
import type { GLViewProps } from 'expo-gl';
import type { LivePhotoViewProps } from 'expo-live-photo';
import type { LinearGradientProps } from 'expo-linear-gradient';
import type { StatusBarProps } from 'expo-status-bar';
import type { VideoViewProps } from 'expo-video';
import type { ReactNativeModalDateTimePickerProps } from 'react-native-modal-datetime-picker';
import type { SliderProps } from '@react-native-community/slider';
import type { MaskedViewProps } from '@react-native-masked-view/masked-view';
import type { SegmentedControlProps } from '@react-native-segmented-control/segmented-control';
import type { PickerItemProps, PickerProps } from '@react-native-picker/picker';
import type { LottieViewProps } from 'lottie-react-native';
import type { TCarouselProps } from 'react-native-reanimated-carousel';
import type { ImageBackgroundProps, ImageProps } from 'expo-image';
import type { TextInputProps, TextProps, TouchableOpacityProps, ViewProps, PressableProps, TouchableHighlightProps, TouchableWithoutFeedbackProps, ButtonProps, KeyboardAvoidingViewProps, SectionListProps, SectionListData } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';
declare enum CustomTypes {
    useComponent = "useComponent"
}
declare enum ContainerTypes {
    ViewContainer = "ViewContainer",
    ListContainer = "ListContainer",
    ViewListContainer = "ViewListContainer"
}
declare enum LeafTypes {
    Button = "Button",
    TextInput = "TextInput",
    Text = "Text",
    Image = "Image",
    ImageBackground = "ImageBackground",
    SectionList = "SectionList",
    Checkbox = "Checkbox",
    LinearGradient = "LinearGradient",
    GLView = "GLView",
    LivePhotoView = "LivePhotoView",
    StatusBar = "StatusBar",
    VideoView = "VideoView",
    DateTimePicker = "DateTimePicker",
    Slider = "Slider",
    MaskedView = "MaskedView",
    SegmentedControl = "SegmentedControl",
    Picker = "Picker",
    LottieView = "LottieView",
    Carousel = "Carousel"
}
export { ContainerTypes, LeafTypes };
declare enum ViewWrapperTypes {
    View = "View",
    SafeAreaView = "SafeAreaView",
    KeyboardAvoidingView = "KeyboardAvoidingView",
    Pressable = "Pressable",
    TouchableHighlight = "TouchableHighlight",
    TouchableOpacity = "TouchableOpacity",
    TouchableWithoutFeedback = "TouchableWithoutFeedback",
    BlurView = "BlurView",
    CameraView = "CameraView"
}
export { ViewWrapperTypes };
type UIContainerTypes = ContainerTypes.ViewContainer | ContainerTypes.ListContainer | ContainerTypes.ViewListContainer;
type UIComponentTypes = LeafTypes.Button | LeafTypes.TextInput | LeafTypes.Text | LeafTypes.Image | LeafTypes.ImageBackground | LeafTypes.SectionList | LeafTypes.Checkbox | LeafTypes.LinearGradient | LeafTypes.GLView | LeafTypes.LivePhotoView | LeafTypes.StatusBar | LeafTypes.VideoView | LeafTypes.DateTimePicker | LeafTypes.Slider | LeafTypes.MaskedView | LeafTypes.SegmentedControl | LeafTypes.Picker | LeafTypes.LottieView | LeafTypes.Carousel;
type UITypes = UIContainerTypes | UIComponentTypes;
interface BaseUIComponent {
    type: UITypes;
    showIf?: boolean | ((context: any) => boolean);
}
interface ButtonComponent extends BaseUIComponent {
    type: LeafTypes.Button;
    props?: ButtonProps;
}
interface TextComponent extends BaseUIComponent {
    type: LeafTypes.Text;
    value: string;
    props?: TextProps;
}
interface ImageComponent extends BaseUIComponent {
    type: LeafTypes.Image;
    props: ImageProps;
}
interface ImageBackgroundComponent extends BaseUIComponent {
    type: LeafTypes.ImageBackground;
    props: ImageBackgroundProps;
}
interface TextInputComponent extends BaseUIComponent {
    type: LeafTypes.TextInput;
    props: TextInputProps;
}
type UISectionListProps = Omit<SectionListProps<UIComponent, SectionListData<UIComponent>>, 'renderItem' | 'renderSectionHeader' | 'ListHeaderComponent' | 'ListFooterComponent' | 'ListEmptyComponent' | 'ItemSeparatorComponent' | 'SectionSeparatorComponent' | 'CellRendererComponent' | 'stickySectionHeadersEnabled'>;
interface SectionListComponent extends BaseUIComponent {
    type: LeafTypes.SectionList;
    props: UISectionListProps;
}
interface CheckboxComponent extends BaseUIComponent {
    type: LeafTypes.Checkbox;
    props: CheckboxProps;
}
interface LinearGradientComponent extends BaseUIComponent {
    type: LeafTypes.LinearGradient;
    props: LinearGradientProps;
    children: UIComponent[];
}
interface GLViewComponent extends BaseUIComponent {
    type: LeafTypes.GLView;
    props: GLViewProps;
}
interface LivePhotoViewComponent extends BaseUIComponent {
    type: LeafTypes.LivePhotoView;
    props: LivePhotoViewProps;
}
interface StatusBarComponent extends BaseUIComponent {
    type: LeafTypes.StatusBar;
    props: StatusBarProps;
}
interface VideoViewComponent extends BaseUIComponent {
    type: LeafTypes.VideoView;
    props: VideoViewProps;
}
interface DateTimePickerComponent extends BaseUIComponent {
    type: LeafTypes.DateTimePicker;
    props: React.Component<ReactNativeModalDateTimePickerProps, any>;
}
interface SliderComponent extends BaseUIComponent {
    type: LeafTypes.Slider;
    props: SliderProps;
}
interface MaskedViewComponent extends BaseUIComponent {
    type: LeafTypes.MaskedView;
    props: Omit<MaskedViewProps, 'maskElement'>;
    maskElement: ViewContainerComponent | ViewListContainerComponent;
    children: UIComponent[];
}
interface SegmentedControlComponent extends BaseUIComponent {
    type: LeafTypes.SegmentedControl;
    props: SegmentedControlProps;
}
interface PickerComponent extends BaseUIComponent {
    type: LeafTypes.Picker;
    props: PickerProps;
    items: PickerItemProps;
}
interface LottieViewComponent extends BaseUIComponent {
    type: LeafTypes.LottieView;
    props: LottieViewProps;
}
interface CarouselComponent extends BaseUIComponent {
    type: LeafTypes.Carousel;
    props: Omit<TCarouselProps<UIComponent>, 'renderItem'>;
    children: UIComponent[];
}
type WrapperComponentPropsMap = {
    [ViewWrapperTypes.View]: ViewProps;
    [ViewWrapperTypes.SafeAreaView]: SafeAreaViewProps;
    [ViewWrapperTypes.KeyboardAvoidingView]: KeyboardAvoidingViewProps;
    [ViewWrapperTypes.Pressable]: PressableProps;
    [ViewWrapperTypes.TouchableHighlight]: TouchableHighlightProps;
    [ViewWrapperTypes.TouchableOpacity]: TouchableOpacityProps;
    [ViewWrapperTypes.TouchableWithoutFeedback]: TouchableWithoutFeedbackProps;
    [ViewWrapperTypes.BlurView]: BlurViewProps;
    [ViewWrapperTypes.CameraView]: CameraViewProps;
};
type BaseWrapperComponent<T extends ViewWrapperTypes> = BaseUIComponent & {
    wrapperComponent: T;
    props?: WrapperComponentPropsMap[T];
};
type ViewContainerWrapperComponent = BaseWrapperComponent<ViewWrapperTypes.View> | BaseWrapperComponent<ViewWrapperTypes.SafeAreaView> | BaseWrapperComponent<ViewWrapperTypes.KeyboardAvoidingView> | BaseWrapperComponent<ViewWrapperTypes.Pressable> | BaseWrapperComponent<ViewWrapperTypes.TouchableHighlight> | BaseWrapperComponent<ViewWrapperTypes.TouchableOpacity> | BaseWrapperComponent<ViewWrapperTypes.TouchableWithoutFeedback> | BaseWrapperComponent<ViewWrapperTypes.BlurView> | BaseWrapperComponent<ViewWrapperTypes.CameraView>;
type UIFlashListProps = Omit<FlashListProps<UIComponent>, 'renderItem' | 'ListHeaderComponent' | 'ListFooterComponent' | 'ListEmptyComponent' | 'ItemSeperatorComponent' | 'CellRendererComponent' | 'StickyHeaderComponent'>;
type ViewContainerComponent = ViewContainerWrapperComponent & {
    type: ContainerTypes.ViewContainer;
    properties: UIComponent[];
};
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
interface ViewListContainerComponent extends BaseUIComponent {
    type: ContainerTypes.ViewListContainer;
    listProps: UIFlashListProps;
    props?: ViewProps;
    components?: {
        headerComponent?: UIComponent;
        footerComponent?: UIComponent;
        emptyComponent?: UIComponent;
        itemSeparatorComponent?: UIComponent;
        cellRendererComponent?: UIComponent;
        stickyHeaderComponent?: UIComponent;
    };
}
export type { ViewContainerComponent, ListContainerComponent, ViewListContainerComponent, };
interface UseComponent<TRef extends string = string, TProps extends object = Record<string, any>> {
    type: CustomTypes.useComponent;
    ref: TRef;
    props?: TProps;
    properties?: UIComponent[];
}
export type { UseComponent };
type UIComponent = ButtonComponent | TextComponent | ImageComponent | ImageBackgroundComponent | TextInputComponent | SectionListComponent | CheckboxComponent | LinearGradientComponent | GLViewComponent | LivePhotoViewComponent | StatusBarComponent | VideoViewComponent | DateTimePickerComponent | SliderComponent | MaskedViewComponent | SegmentedControlComponent | PickerComponent | LottieViewComponent | CarouselComponent | ViewContainerComponent | ListContainerComponent | ViewListContainerComponent | UseComponent;
export type { UIComponent };
declare const JSONUIEnums: {
    ContainerTypes: typeof ContainerTypes;
    LeafTypes: typeof LeafTypes;
    ViewWrapperTypes: typeof ViewWrapperTypes;
    CustomTypes: typeof CustomTypes;
};
export { JSONUIEnums };
//# sourceMappingURL=types.d.ts.map