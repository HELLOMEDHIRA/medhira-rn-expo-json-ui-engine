import { StatusBar } from 'expo-status-bar';
import { JSONUI, defineUseComponent, JSONUIEnums } from 'medhira-rn-expo-json-ui-engine';

defineUseComponent(
  'HeroCard',
  { title: 'MEDHIRA JSON UI' },
  {
    type: JSONUIEnums.ContainerTypes.ViewContainer,
    wrapperComponent: JSONUIEnums.ViewWrapperTypes.View,
    props: { style: { padding: 16, gap: 8 } },
    properties: [
      {
        type: JSONUIEnums.LeafTypes.Text,
        value: '{{title}}',
        props: { style: { fontSize: 22, fontWeight: '700' } },
      },
      {
        type: JSONUIEnums.LeafTypes.Text,
        value: 'Expo SDK 56 example app',
        props: { style: { fontSize: 14, color: '#555' } },
      },
    ],
  }
);

const screen = {
  type: JSONUIEnums.ContainerTypes.ViewContainer,
  wrapperComponent: JSONUIEnums.ViewWrapperTypes.SafeAreaView,
  props: { style: { flex: 1, padding: 16 } },
  properties: [
    {
      type: JSONUIEnums.CustomTypes.useComponent,
      ref: 'HeroCard',
      props: { title: 'Hello from JSON' },
    },
    {
      type: JSONUIEnums.LeafTypes.Button,
      props: {
        title: 'Powered by MEDHIRA',
        onPress: () => console.log('pressed'),
      },
    },
  ],
};

export default function App() {
  return (
    <>
      <JSONUI json={screen} context={{ env: 'example' }} />
      <StatusBar style="auto" />
    </>
  );
}
