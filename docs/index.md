---
title: MEDHIRA JSON UI Engine
---

# medhira-rn-expo-json-ui-engine

<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="150"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

A JSON-driven UI engine for React Native and Expo that enables dynamic, runtime-rendered interfaces without rebuilding the app.

!!! note
    This package is designed specifically for **Expo React Native projects only**, and requires **Expo SDK version 52 or higher**.

## Why MEDHIRA?

In today's mobile app landscape, many applications—especially those powered by chatbots or backend-driven platforms—require the flexibility to render UIs dynamically from a backend source. **MEDHIRA JSON UI Engine** enables exactly that:

- **Backend-Driven UIs** - Perfect for chatbot-driven layouts and CMS integrations
- **Runtime Rendering** - Render components via JSON without code changes or app rebuilds
- **Performance Optimized** - Built with performance in mind using style caching
- **Flexible & Extensible** - Component registry and custom type support

## Key Features

- :material-render: **Render UI directly from JSON**
- :material-puzzle: **Reusable component registry** via `useComponent`
- :material-update: **Runtime support** for static JSON, functions, and RxJS-like observables
- :material-react: **Built-in support** for 25+ React Native/Expo components
- :material-eye-show: **Conditional visibility** with `showIf`
- :material-cog: **Style optimization** with caching
- :material-language-typescript: **Full TypeScript support**

## Quick Example

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

const json = {
  type: 'Text',
  value: 'Hello MEDHIRA!',
  props: {
    style: { fontSize: 24 }
  }
};

export default function App() {
  return <JSONUI json={json} />;
}
```

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at **hello.medhira@gmail.com**

---

**MEDHIRA** - Engineering Intelligence Across Everything
