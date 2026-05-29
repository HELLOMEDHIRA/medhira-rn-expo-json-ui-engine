import type { UIComponent, UseComponent } from './types';
type ComponentEntry<Props extends object = Record<string, unknown>> = {
    ref: string;
    json: UIComponent;
    propsType?: Props;
    defaultProps?: Partial<Props>;
};
declare const registerJSONComponent: <Props extends object>(ref: string, json: UIComponent, props?: Partial<Props>) => void;
declare const getComponentEntry: (ref: string) => ComponentEntry | null;
declare const clearComponentRegistry: () => void;
declare const resolvePlaceholders: (template: unknown, props: Record<string, unknown>) => unknown;
declare const defineUseComponent: <TRef extends string, TProps extends Record<string, unknown>>(ref: TRef, props: TProps, json: UIComponent) => UseComponent<TRef, TProps>;
export { registerJSONComponent, getComponentEntry, resolvePlaceholders, defineUseComponent, clearComponentRegistry, };
//# sourceMappingURL=custom.d.ts.map