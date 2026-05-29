---
title: MEDHIRA JSON UI Engine
---

# medhira-rn-expo-json-ui-engine

<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="150"/>
</p>

A JSON-driven UI engine for **Expo SDK 56+** that renders native interfaces at runtime.

!!! note
    Requires **Expo SDK 56 or higher** and the React Native **New Architecture**.

## Architecture

```mermaid
flowchart TB
  subgraph Input
    J[Static JSON]
    F[Sync / Async function]
    O[Observable]
  end
  JSONUI[JSONUI]
  REG[Component registry]
  RN[Expo components]
  J --> JSONUI
  F --> JSONUI
  O --> JSONUI
  REG --> JSONUI
  JSONUI --> RN
```

## Key features

- :material-render: Render UI from JSON
- :material-puzzle: Reusable components via `defineUseComponent`
- :material-update: Static, function, Promise, and observable sources
- :material-eye: Conditional visibility with `showIf` and `context`
- :material-cog: Style caching integration
- :material-language-typescript: TypeScript support

## Quick example

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

const json = {
  type: 'Text',
  value: 'Hello MEDHIRA!',
  props: { style: { fontSize: 24 } },
};

export default function App() {
  return <JSONUI json={json} />;
}
```

## Support

- Email: **hello.medhira@gmail.com**
- GitHub Issues: [medhira-rn-expo-json-ui-engine](https://github.com/HELLOMEDHIRA/medhira-rn-expo-json-ui-engine/issues)

**MEDHIRA** — Engineering Intelligence Across Everything
