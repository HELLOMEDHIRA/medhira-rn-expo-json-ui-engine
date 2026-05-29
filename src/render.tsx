import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  SectionList,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, ImageBackground } from 'expo-image';
import { Fragment, useMemo } from 'react';
import { FlashList } from '@shopify/flash-list';
import { getCachedStyle } from 'medhira-rn-styles-cache';
import MaskedView from '@react-native-masked-view/masked-view';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import { GLView } from 'expo-gl';
import { LivePhotoView } from 'expo-live-photo';
import { StatusBar } from 'expo-status-bar';
import { VideoView } from 'expo-video';
import Slider from '@react-native-community/slider';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import LottieView from 'lottie-react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { BlurView } from 'expo-blur';
import { CameraView } from 'expo-camera';
import Carousel from 'react-native-reanimated-carousel';
import { Picker } from '@react-native-picker/picker';
import type { PickerItemProps } from '@react-native-picker/picker';
import PagerView from 'react-native-pager-view';
import { getComponentEntry, resolvePlaceholders } from './custom';
import { evaluateShowIf } from './showIf';
import { getComponentKey, normalizeListData } from './utils';
import { JSONUIEnums } from './types';
import type { UIComponent, UseComponent } from './types';

const UseComponentWrapper = ({ ref, props, properties }: UseComponent) => {
  const entry = getComponentEntry(ref);

  const resolvedComponent = useMemo(() => {
    if (!entry) {
      return null;
    }
    const mergedProps = { ...entry.defaultProps, ...props };
    const json = resolvePlaceholders(entry.json, mergedProps) as UIComponent;

    if (json.type === JSONUIEnums.ContainerTypes.ViewContainer) {
      return {
        ...json,
        properties: properties ?? json.properties,
      };
    }
    return json;
  }, [entry, props, properties]);

  if (!resolvedComponent) {
    return null;
  }

  return <>{renderUIComponent(resolvedComponent)}</>;
};

const ViewContainerWrappers = {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BlurView,
  CameraView,
};

const recursiveRenderUIComponent = (component?: UIComponent) => {
  return component ? () => renderUIComponent(component) : undefined;
};

const cacheSingleStyle = (style: unknown) => {
  if (!style) {
    return {};
  }
  return getCachedStyle(style);
};

const renderChildList = (
  children: UIComponent[] | undefined,
  properties?: UIComponent[]
) => {
  const list = children ?? properties ?? [];
  return list.map((child, idx) => (
    <Fragment key={getComponentKey(child, idx)}>
      {renderUIComponent(child)}
    </Fragment>
  ));
};

const renderFlashList = (
  props: Record<string, unknown>,
  components?: ListComponents
) => {
  const {
    headerComponent,
    footerComponent,
    emptyComponent,
    itemSeparatorComponent,
    cellRendererComponent,
    stickyHeaderComponent,
  } = components ?? {};

  const data = normalizeListData(props.data as unknown[] | undefined);
  const listProps = { ...props, data };

  return (
    <FlashList
      {...listProps}
      ListHeaderComponent={recursiveRenderUIComponent(headerComponent)}
      ListFooterComponent={recursiveRenderUIComponent(footerComponent)}
      ListEmptyComponent={recursiveRenderUIComponent(emptyComponent)}
      ItemSeparatorComponent={recursiveRenderUIComponent(
        itemSeparatorComponent
      )}
      CellRendererComponent={recursiveRenderUIComponent(cellRendererComponent)}
      StickyHeaderComponent={recursiveRenderUIComponent(stickyHeaderComponent)}
      renderItem={({ item: listItem }) => renderUIComponent(listItem)}
    />
  );
};

type ListComponents = {
  headerComponent?: UIComponent;
  footerComponent?: UIComponent;
  emptyComponent?: UIComponent;
  itemSeparatorComponent?: UIComponent;
  cellRendererComponent?: UIComponent;
  stickyHeaderComponent?: UIComponent;
  sectionHeaderComponent?: UIComponent;
  sectionSeparatorComponent?: UIComponent;
};

const renderSectionList = (
  props: Record<string, unknown>,
  components?: ListComponents
) => {
  const {
    headerComponent,
    footerComponent,
    emptyComponent,
    itemSeparatorComponent,
    sectionHeaderComponent,
    sectionSeparatorComponent,
    cellRendererComponent,
  } = components ?? {};

  const SectionListComponent = SectionList as unknown as React.ComponentType<
    Record<string, unknown>
  >;

  return (
    <SectionListComponent
      {...props}
      renderItem={({ item }: { item: UIComponent }) => renderUIComponent(item)}
      renderSectionHeader={
        sectionHeaderComponent
          ? () => renderUIComponent(sectionHeaderComponent)
          : undefined
      }
      ListHeaderComponent={recursiveRenderUIComponent(headerComponent)}
      ListFooterComponent={recursiveRenderUIComponent(footerComponent)}
      ListEmptyComponent={recursiveRenderUIComponent(emptyComponent)}
      ItemSeparatorComponent={recursiveRenderUIComponent(
        itemSeparatorComponent
      )}
      SectionSeparatorComponent={recursiveRenderUIComponent(
        sectionSeparatorComponent
      )}
      CellRendererComponent={recursiveRenderUIComponent(cellRendererComponent)}
    />
  );
};

const renderPagerView = (item: {
  props?: Record<string, unknown>;
  pages?: UIComponent[];
  children?: UIComponent[];
}) => {
  const pages = item.pages ?? item.children ?? [];
  return (
    <PagerView {...(item.props as object)}>
      {pages.map((page: UIComponent, idx: number) => (
        <View key={getComponentKey(page, idx)} style={{ flex: 1 }}>
          {renderUIComponent(page)}
        </View>
      ))}
    </PagerView>
  );
};

// JSON nodes are dynamic at runtime; UIComponent union is validated at boundaries.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderUIComponent = (item: any): React.ReactElement | null => {
  if (!item) {
    return null;
  }

  const { ContainerTypes, LeafTypes, ViewWrapperTypes, CustomTypes } =
    JSONUIEnums;
  const {
    type,
    showIf,
    props: componentProps,
    value,
    wrapperComponent,
    components,
    listProps,
    properties,
    children,
    maskElement,
    items,
  } = item;

  if (!evaluateShowIf(showIf, item as UIComponent)) {
    return null;
  }

  switch (type) {
    case LeafTypes.Button:
      return <Button {...componentProps} />;
    case LeafTypes.Text:
      return (
        <Text style={cacheSingleStyle(componentProps?.style)}>{value}</Text>
      );
    case LeafTypes.Image:
      return (
        <Image
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.ImageBackground:
      return (
        <ImageBackground
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
          imageStyle={cacheSingleStyle(
            (componentProps as { imageStyle?: unknown })?.imageStyle ??
              componentProps?.style
          )}
        >
          {renderChildList(children, properties)}
        </ImageBackground>
      );
    case LeafTypes.TextInput:
      return (
        <TextInput
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.SectionList:
      return renderSectionList(
        (componentProps ?? {}) as Record<string, unknown>,
        components
      );
    case LeafTypes.Checkbox:
      return (
        <Checkbox
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.LinearGradient:
      return (
        <LinearGradient
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        >
          {renderChildList(children)}
        </LinearGradient>
      );
    case LeafTypes.GLView:
      return (
        <GLView
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.LivePhotoView:
      return (
        <LivePhotoView
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.StatusBar:
      return <StatusBar {...componentProps} />;
    case LeafTypes.VideoView:
      return (
        <VideoView
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.DateTimePicker:
      return <DateTimePicker {...componentProps} />;
    case LeafTypes.Slider:
      return (
        <Slider
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.MaskedView: {
      const mask = renderUIComponent(maskElement);
      if (!mask) {
        throw new Error('MaskedView requires a valid maskElement.');
      }
      return (
        <MaskedView maskElement={mask}>{renderChildList(children)}</MaskedView>
      );
    }
    case LeafTypes.SegmentedControl:
      return (
        <SegmentedControl
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
          tabStyle={cacheSingleStyle(
            (componentProps as { tabStyle?: unknown })?.tabStyle
          )}
          fontStyle={cacheSingleStyle(
            (componentProps as { fontStyle?: unknown })?.fontStyle
          )}
          sliderStyle={cacheSingleStyle(
            (componentProps as { sliderStyle?: unknown })?.sliderStyle
          )}
          activeFontStyle={cacheSingleStyle(
            (componentProps as { activeFontStyle?: unknown })?.activeFontStyle
          )}
        />
      );
    case LeafTypes.Picker:
      return (
        <Picker
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
          itemStyle={cacheSingleStyle(
            (componentProps as { itemStyle?: unknown })?.itemStyle
          )}
        >
          {(items ?? []).map((child: PickerItemProps, idx: number) => (
            <Picker.Item {...child} key={child.value?.toString() ?? idx} />
          ))}
        </Picker>
      );
    case LeafTypes.LottieView:
      return (
        <LottieView
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        />
      );
    case LeafTypes.Carousel: {
      const carouselData =
        (componentProps as { data?: UIComponent[] })?.data ?? children ?? [];
      const carouselProps = {
        ...((componentProps ?? {}) as Record<string, unknown>),
      };
      delete carouselProps.data;
      return (
        <Carousel
          {...(carouselProps as object)}
          data={carouselData}
          width={(carouselProps.width as number) ?? 300}
          style={cacheSingleStyle(carouselProps?.style)}
          containerStyle={cacheSingleStyle(
            (carouselProps as { containerStyle?: unknown }).containerStyle
          )}
          renderItem={({
            item: child,
            index,
          }: {
            item: UIComponent;
            index: number;
          }) => (
            <Fragment key={getComponentKey(child, index)}>
              {renderUIComponent(child)}
            </Fragment>
          )}
        />
      );
    }
    case LeafTypes.PagerView:
      return renderPagerView(item);
    case ContainerTypes.ViewContainer: {
      const wrapperKey = (wrapperComponent ??
        ViewWrapperTypes.View) as keyof typeof ViewContainerWrappers;
      const Wrapper = ViewContainerWrappers[wrapperKey] as React.ComponentType<
        Record<string, unknown>
      >;
      return (
        <Wrapper
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        >
          {renderChildList(undefined, properties)}
        </Wrapper>
      );
    }
    case ContainerTypes.ListContainer:
      return renderFlashList(
        (componentProps ?? {}) as Record<string, unknown>,
        components
      );
    case ContainerTypes.ViewListContainer: {
      const wrapperKey = (wrapperComponent ??
        ViewWrapperTypes.View) as keyof typeof ViewContainerWrappers;
      const Wrapper = ViewContainerWrappers[wrapperKey] as React.ComponentType<
        Record<string, unknown>
      >;
      return (
        <Wrapper
          {...componentProps}
          style={cacheSingleStyle(componentProps?.style)}
        >
          {renderFlashList(
            (listProps ?? {}) as Record<string, unknown>,
            components
          )}
        </Wrapper>
      );
    }
    case CustomTypes.useComponent:
      return <UseComponentWrapper {...(item as UseComponent)} />;
    default:
      console.warn('Unknown UI component type', type);
      return null;
  }
};

export default renderUIComponent;
