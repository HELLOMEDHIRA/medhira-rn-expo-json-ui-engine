# Advanced Examples

Advanced use cases and patterns for MEDHIRA.

## Dynamic Component Registry

### Creating a Card Library

```tsx
import { defineUseComponent } from 'medhira-rn-expo-json-ui-engine';

// Create reusable card components
const InfoCard = defineUseComponent(
  'InfoCard',
  { title: '', description: '' },
  {
    type: 'ViewContainer',
    wrapperComponent: 'View',
    props: { style: { padding: 16, margin: 8, borderRadius: 8, backgroundColor: '#fff' } },
    properties: [
      { type: 'Text', value: '{{title}}', props: { fontSize: 18, fontWeight: 'bold' } },
      { type: 'Text', value: '{{description}}', props: { marginTop: 4 } }
    ]
  }
);

const ActionCard = defineUseComponent(
  'ActionCard',
  { title: '', actionLabel: 'Click' },
  {
    type: 'ViewContainer',
    wrapperComponent: 'TouchableOpacity',
    props: { style: { padding: 16, margin: 8, borderRadius: 8, backgroundColor: '#007AFF' } },
    properties: [
      { type: 'Text', value: '{{title}}', props: { color: '#fff' } },
      { type: 'Button', props: { title: '{{actionLabel}}' } }
    ]
  }
);
```

### Using the Registry

```tsx
const pageConfig = {
  type: 'ViewContainer',
  properties: [
    {
      type: 'useComponent',
      ref: 'InfoCard',
      props: { title: 'Getting Started', description: 'Learn the basics' }
    },
    {
      type: 'useComponent',
      ref: 'ActionCard',
      props: { title: 'Pro Feature', actionLabel: 'Upgrade' }
    }
  ]
};
```

## Reactive UI with Observables

### Real-Time Updates

```tsx
import { BehaviorSubject } from 'rxjs';

const notificationCount$ = new BehaviorSubject(0);

// In your UI
const notificationBadge = {
  type: 'ViewContainer',
  properties: [
    { type: 'Text', value: 'Notifications' },
    // This will update automatically when observable emits
  ]
};

// Update from anywhere in your app
notificationCount$.next(5);
```

## Conditional Layouts

### Role-Based Dashboard

```tsx
const createDashboard = (userRole: string) => ({
  type: 'ViewContainer',
  properties: [
    // Visible to all
    { type: 'Text', value: 'Welcome', showIf: true },

    // Admin only
    {
      type: 'Button',
      props: { title: 'Admin Settings' },
      showIf: userRole === 'admin'
    },

    // Manager and above
    {
      type: 'Button',
      props: { title: 'Reports' },
      showIf: userRole === 'manager' || userRole === 'admin'
    },

    // Logout for everyone
    { type: 'Button', props: { title: 'Logout' } }
  ]
});
```

## API-Driven UI

### Fetching Configuration

```tsx
const fetchDashboardConfig = async () => {
  const response = await fetch('https://api.example.com/dashboard');
  return response.json();
};

// Use as dynamic source
<JSONUI jsonSource={fetchDashboardConfig} />
```

## Complex Forms

### Multi-Step Form

```tsx
const stepForm = {
  type: 'ViewContainer',
  properties: [
    // Step indicator
    {
      type: 'ViewContainer',
      wrapperComponent: 'View',
      properties: [
        { type: 'Text', value: 'Step 1 of 3' }
      ]
    },

    // Dynamic fields based on step
    {
      type: 'TextInput',
      props: { placeholder: 'Enter your name' }
    },
    {
      type: 'TextInput',
      props: { placeholder: 'Enter your email' }
    },

    // Navigation
    {
      type: 'Button',
      props: { title: 'Next', onPress: () => {} }
    }
  ]
};
```

## Performance Optimization

### Memoized JSON

```tsx
import { useMemo } from 'react';

function App() {
  const uiConfig = useMemo(() => ({
    type: 'ViewContainer',
    properties: dynamicData.map(item => ({
      type: 'Text',
      value: item.label
    }))
  }), [dynamicData]);

  return <JSONUI json={uiConfig} />;
}
```

## Error Handling

### Error Boundary Pattern

```tsx
const safeRender = (component) => {
  try {
    return renderUIComponent(component);
  } catch (error) {
    return {
      type: 'Text',
      value: 'Error rendering component',
      props: { style: { color: 'red' } }
    };
  }
};
```

## Next Section

- [License](../about/license.md)