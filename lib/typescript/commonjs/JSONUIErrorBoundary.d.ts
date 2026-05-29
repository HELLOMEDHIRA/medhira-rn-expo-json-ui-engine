import React from 'react';
type JSONUIErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    onError?: (error: Error) => void;
};
type JSONUIErrorBoundaryState = {
    error: Error | null;
};
export declare class JSONUIErrorBoundary extends React.Component<JSONUIErrorBoundaryProps, JSONUIErrorBoundaryState> {
    state: JSONUIErrorBoundaryState;
    static getDerivedStateFromError(error: Error): JSONUIErrorBoundaryState;
    componentDidCatch(error: Error): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=JSONUIErrorBoundary.d.ts.map