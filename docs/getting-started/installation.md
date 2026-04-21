# Installation

This guide will help you install MEDHIRA JSON UI Engine in your React Native/Expo project.

## Requirements

- **React Native** 0.81+
- **Expo SDK** 52+
- **Node.js** 18+

## Install the Package

```bash
npm install medhira-rn-expo-json-ui-engine
# or
yarn add medhira-rn-expo-json-ui-engine
```

## Peer Dependencies

This package requires the following peer dependencies. Make sure they're installed:

```bash
npm install react react-native expo react-native-reanimated react-native-gesture-handler
# or
yarn add react react-native expo react-native-reanimated react-native-gesture-handler
```

## Additional Expo Packages

Depending on the components you use, you may need additional Expo packages:

```bash
npx expo install expo-image expo-camera expo-video expo-blur expo-linear-gradient expo-checkbox expo-status-bar expo-gl expo-live-photo
```

## Verify Installation

To verify the installation was successful, run:

```tsx
import { JSONUI } from 'medhira-rn-expo-json-ui-engine';

// Basic test
const testJson = {
  type: 'Text',
  value: 'MEDHIRA is working!',
};

export default function App() {
  return <JSONUI json={testJson} />;
}
```

## Next Steps

- [Quick Start](quick-start.md) - Get up and running in 5 minutes
- [Basic Examples](../examples/basic-examples.md) - See practical examples