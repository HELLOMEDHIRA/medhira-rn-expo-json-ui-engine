# medhira-rn-expo-json-ui-engine

<!-- Keywords: react-native, expo, json-ui, runtime-ui, dynamic-ui, no-code, low-code, mobile-ui-engine, json-renderer, react-native-json, ui-from-json, component-registry, observable-ui, typescript-ui, rxjs-ui, medhira -->

<p align="center">
  <img src="https://github.com/HELLOMEDHIRA/medhira/blob/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="200"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

A JSON-driven UI engine for React Native and Expo that enables dynamic, runtime-rendered interfaces without rebuilding the app.

> **Note:** This package is designed specifically for **Expo React Native projects only**, and requires **Expo SDK version 52 or higher**. It may not work in pure React Native (non-Expo) setups.

---

## Why This Package Matters

In today's mobile app landscape, many applications—especially those powered by chatbots or backend-driven platforms—require the flexibility to render UIs dynamically from a backend source. This package enables exactly that:

* Ideal for **backend-driven UIs** or **chatbot-driven layouts**.
* Dynamically render components via JSON without code changes or app rebuilds.
* Built with **performance in mind** — styles are automatically cached and reused project-wide, reducing memory and rendering overhead.
* Smart layout strategies and optimization handled internally — you don't have to manage performance concerns manually.

This makes it a great choice for low-code platforms, headless CMS integrations, and any app that prioritizes flexibility and performance.

---

## Features

* Render UI directly from JSON
* Reusable component registry via `useComponent`
* Runtime support for:

  * Static JSON
  * Function-based sources
  * RxJS-like observables
* Built-in support for popular native/Expo components
* Support for conditional visibility with `showIf`
* Style optimization with `smh-rn-styles-cache`
* Full TypeScript support

---

## Installation

```bash
npm install medhira-rn-expo-json-ui-engine
# or
yarn add medhira-rn-expo-json-ui-engine
```

> Make sure to install peer dependencies (React Native, Expo, etc.) if not already present.

---

## Basic Usage

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

const json = {
  type: 'Text',
  value: 'Hello JSON UI',
  props: {
    style: { fontSize: 24 }
  }
};

export default function App() {
  return <JSONUI json={json} />;
}
```

---

## Dynamic Source

```tsx
<JSONUI jsonSource={() => fetchMyJson()} />
```

```tsx
<JSONUI jsonSource={myObservable$} />
```

---

## Component Registry

```tsx
import { defineUseComponent } from 'medhira-rn-expo-json-ui-engine';

const MyCard = defineUseComponent(
  'MyCard',
  { title: 'Title', subtitle: 'Sub' },
  {
    type: 'ViewContainer',
    wrapperComponent: 'View',
    props: { style: { padding: 10 } },
    properties: [
      { type: 'Text', value: '{{title}}' },
      { type: 'Text', value: '{{subtitle}}' }
    ]
  }
);

<JSONUI json={MyCard} />;
```

---

## Supported Components

### Containers:

* `ViewContainer`: Renders multiple nested components with optional layout.

  * Uses configurable `Wrapper` components like `View`, `TouchableWithoutFeedback`, etc.
* `ListContainer`: Standard list with item rendering and custom header/footer support.
* `ViewListContainer`: FlashList + wrapper + sticky headers; high-perf for dynamic lists.

### Basic Components:

* `Text`, `TextInput`, `Button`, `Image`, `ImageBackground`
* `Slider`, `Checkbox`, `DateTimePicker`, `StatusBar`
* `LottieView`, `GLView`, `CameraView`, `VideoView`
* `FlashList`, `LinearGradient`, `MaskedView`, `PagerView`

---

## Conditional Rendering

```json
{
  "type": "Text",
  "value": "Only if admin",
  "showIf": "context.user?.isAdmin"
}
```

> Supports boolean expressions or functions.

---

## Contributing

Contributions are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow this in all your interactions with the project.

Please feel free to reach out to the MEDHIRA team — hello.medhira@gmail.com

---

## Keywords

react-native, expo, json-ui, runtime-ui, dynamic-ui, no-code, low-code, mobile-ui-engine, json-renderer, react-native-json, ui-from-json, component-registry, observable-ui, typescript-ui, rxjs-ui, backend-driven-ui, chatbot-ui-engine, expo-sdk-52+, medhira

---

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at hello.medhira@gmail.com

---

## License

Apache-2.0 © MEDHIRA

---

## Links

* GitHub: [HELLOMEDHIRA/medhira-rn-expo-json-ui-engine](https://github.com/HELLOMEDHIRA/medhira-rn-expo-json-ui-engine)
* Issues: [Report bugs here](https://github.com/HELLOMEDHIRA/medhira-rn-expo-json-ui-engine/issues)
* Website: [https://medhira.io](https://medhira.io)

---