import { type ReactNode } from 'react';
import type { JSONSource, UIComponent } from './types';
import { JSONUIEnums } from './types';
import { type JSONUIContextValue } from './context';
export { JSONUIErrorBoundary } from './JSONUIErrorBoundary';
export { defineUseComponent, registerJSONComponent, clearComponentRegistry, } from './custom';
export { JSONUIContext, useJSONUIContext } from './context';
type JSONUIProps = {
    json?: UIComponent | UIComponent[];
    jsonSource?: JSONSource;
    context?: JSONUIContextValue;
    loadingComponent?: ReactNode;
    errorFallback?: ReactNode;
    onRenderError?: (error: Error) => void;
};
declare const JSONUI: (props: JSONUIProps) => import("react").JSX.Element;
export { JSONUI, JSONUIEnums };
export type { UIComponent, JSONSource, ShowIfFn } from './types';
export type { JSONUIContextValue } from './context';
//# sourceMappingURL=index.d.ts.map