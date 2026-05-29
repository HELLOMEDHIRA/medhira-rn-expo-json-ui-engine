# Advanced Examples

## Registry library

```tsx
import { defineUseComponent } from 'medhira-rn-expo-json-ui-engine';

const InfoCard = defineUseComponent('InfoCard', { title: '', body: '' }, {
  type: 'ViewContainer',
  wrapperComponent: 'View',
  properties: [
    { type: 'Text', value: '{{title}}' },
    { type: 'Text', value: '{{body}}' },
  ],
});
```

## Observable-driven UI

```tsx
import { BehaviorSubject } from 'rxjs';

const ui$ = new BehaviorSubject(defaultScreen);

export default function App() {
  return <JSONUI jsonSource={ui$} />;
}
```

## Role-based layout

```tsx
<JSONUI
  context={{ role: 'admin' }}
  json={{
    type: 'ViewContainer',
    properties: [
      {
        type: 'Button',
        props: { title: 'Admin' },
        showIf: (ctx) => ctx.role === 'admin',
      },
    ],
  }}
/>
```

## Safe rendering

```tsx
import { JSONUI, JSONUIErrorBoundary } from 'medhira-rn-expo-json-ui-engine';

<JSONUIErrorBoundary
  fallback={<Text>Unable to load screen</Text>}
  onError={(e) => reportError(e)}
>
  <JSONUI jsonSource={loadRemoteScreen} />
</JSONUIErrorBoundary>;
```

## PagerView

```tsx
{
  type: 'PagerView',
  props: { style: { height: 200 } },
  pages: [
    { type: 'Text', value: 'Page 1' },
    { type: 'Text', value: 'Page 2' }
  ]
}
```

## Next

- [License](../about/license.md)
