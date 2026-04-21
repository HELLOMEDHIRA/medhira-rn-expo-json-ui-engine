import type { UIComponent, UseComponent } from "./types";
type ComponentEntry<Props extends object = any> = {
    ref: string;
    json: UIComponent;
    propsType?: Props;
    defaultProps?: Partial<Props>;
};
declare const registerJSONComponent: <Props extends object>(ref: string, json: UIComponent, props?: Partial<Props>) => void;
declare const getComponentEntry: (ref: string) => ComponentEntry | null;
declare const resolvePlaceholders: (template: any, props: Record<string, any>) => any;
declare const defineUseComponent: <TRef extends string, TProps extends Record<string, any>>(ref: TRef, props: TProps, json: UIComponent) => UseComponent<TRef, TProps>;
export { registerJSONComponent, getComponentEntry, resolvePlaceholders, defineUseComponent };
//# sourceMappingURL=custom.d.ts.map