# Component Registry

Create reusable components with the MEDHIRA component registry.

## Why Use Component Registry?

The registry allows you to:
- Define components once, use them anywhere
- Parameterize components with placeholders
- Build component libraries for your apps

## Creating a UseComponent

Use `defineUseComponent` to create reusable components:

```tsx
import { defineUseComponent } from 'medhira-rn-expo-json-ui-engine';

const UserCard = defineUseComponent(
  'UserCard',                          // Unique reference
  { name: 'John', email: 'john@test.com' },  // Default props
  {
    type: 'ViewContainer',
    wrapperComponent: 'View',
    props: { style: { padding: 16, borderRadius: 8 } },
    properties: [
      {
        type: 'Text',
        value: '{{name}}',
        props: { style: { fontSize: 18, fontWeight: 'bold' } }
      },
      {
        type: 'Text',
        value: '{{email}}',
        props: { style: { color: 'gray' } }
      }
    ]
  }
);
```

## Using Placeholders

Use `{{propName}}` syntax to inject dynamic values:

```tsx
const ProductCard = defineUseComponent(
  'ProductCard',
  { title: 'Product', price: 0 },
  {
    type: 'ViewContainer',
    wrapperComponent: 'View',
    properties: [
      {
        type: 'Text',
        value: '{{title}}'
      },
      {
        type: 'Text',
        value: '${{price}}'
      }
    ]
  }
);
```

## Using Registered Components

Reference components using the `useComponent` type:

```tsx
const page = {
  type: 'ViewContainer',
  properties: [
    {
      type: 'useComponent',
      ref: 'UserCard',
      props: { name: 'Jane', email: 'jane@example.com' }
    },
    {
      type: 'useComponent',
      ref: 'ProductCard',
      props: { title: 'Premium Plan', price: 99 }
    }
  ]
};
```

## Advanced: Nested Placeholders

Placeholders work in any property:

```tsx
const DynamicButton = defineUseComponent(
  'DynamicButton',
  { label: 'Click', onPress: () => {} },
  {
    type: 'Button',
    props: {
      title: '{{label}}',
      onPress: '{{onPress}}',
      style: { backgroundColor: '#007AFF' }
    }
  }
);
```

## Best Practices

1. **Use descriptive refs** - 'UserCard' not 'uc'
2. **Provide defaults** - Always set default props
3. **Single responsibility** - One component, one purpose
4. **Document props** - Comment expected prop values

## Next Section

- [Dynamic Sources](./dynamic-sources.md) - Load JSON at runtime