# Conditional Rendering

Show or hide components based on conditions.

## Basic Boolean

Use `showIf` with a boolean value:

```tsx
const adminOnly = {
  type: 'Text',
  value: 'Admin Panel',
  showIf: true  // Always shows
};
```

```tsx
const hidden = {
  type: 'Text',
  value: 'Hidden',
  showIf: false  // Never shows
};
```

## Function Condition

Use a function for dynamic conditions:

```tsx
const context = { user: { role: 'admin' } };

const adminUI = {
  type: 'Button',
  props: { title: 'Delete All' },
  showIf: (ctx) => ctx.user?.role === 'admin'
};
```

## Practical Examples

### Role-Based UI

```tsx
const menuConfig = {
  type: 'ViewContainer',
  properties: [
    {
      type: 'Text',
      value: 'Dashboard',
      showIf: true
    },
    {
      type: 'Text',
      value: 'Admin Settings',
      showIf: (ctx) => ctx.user?.role === 'admin'
    },
    {
      type: 'Button',
      props: { title: 'Logout' },
      showIf: true
    }
  ]
};
```

### Feature Flags

```tsx
const newFeatureUI = {
  type: 'Button',
  props: { title: 'New Feature' },
  showIf: (ctx) => ctx.featureFlags?.newDashboard === true
};
```

### Loading States

```tsx
const content = {
  type: 'ViewContainer',
  properties: [
    {
      type: 'Text',
      value: 'Loading...',
      showIf: (ctx) => ctx.loading
    },
    {
      type: 'Text',
      value: 'Content Loaded!',
      showIf: (ctx) => !ctx.loading
    }
  ]
};
```

## Context Pattern

Pass context to evaluate conditions:

```tsx
const appContext = {
  user: { id: 1, role: 'admin' },
  featureFlags: { newDashboard: true },
  loading: false
};

// Pass context through your app's state management
```

## Best Practices

1. **Keep functions simple** - Complex logic in utils
2. **Use consistent context** - Same structure across your app
3. **Null checks** - Handle undefined properties safely

## Next Section

- [Containers](../components/containers.md) - Container components