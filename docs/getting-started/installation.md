# Installation

## Requirements

| Tool | Version |
|------|---------|
| Expo SDK | **56+** |
| React Native | **0.85+** |
| Node.js | **20+** |

## Install

```bash
npm install medhira-rn-expo-json-ui-engine
```

## Peer dependencies

```bash
npx expo install expo react react-native react-native-gesture-handler react-native-reanimated react-native-worklets react-native-pager-view
```

## Optional Expo modules

Install modules for the components you use:

```bash
npx expo install expo-image@^56.0.9 expo-camera@^56.0.7 expo-video@^56.1.2 expo-blur@^56.0.3 \
  expo-linear-gradient@^56.0.4 expo-checkbox@^56.0.1 expo-status-bar@^56.0.4 expo-gl@^56.0.5 \
  expo-live-photo@^56.0.3 react-native-pager-view@^8.0.2
```

## Verify

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

export default function App() {
  return (
    <JSONUI
      json={{
        type: 'Text',
        value: 'MEDHIRA is working!',
      }}
    />
  );
}
```

## Next steps

- [Quick Start](quick-start.md)
- [Basic Examples](../examples/basic-examples.md)
