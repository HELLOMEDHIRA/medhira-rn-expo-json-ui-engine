import React from 'react';
import { Text, View } from 'react-native';

type JSONUIErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error) => void;
};

type JSONUIErrorBoundaryState = {
  error: Error | null;
};

export class JSONUIErrorBoundary extends React.Component<
  JSONUIErrorBoundaryProps,
  JSONUIErrorBoundaryState
> {
  state: JSONUIErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): JSONUIErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error): void {
    this.props.onError?.(error);
  }

  render(): React.ReactNode {
    if (this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <View style={{ padding: 16 }}>
          <Text style={{ color: '#c00' }}>
            Unable to render JSON UI. Check your configuration.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}
