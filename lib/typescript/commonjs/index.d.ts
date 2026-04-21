import type { UIComponent } from './types';
import { JSONUIEnums } from './types';
type JSONSource = UIComponent | UIComponent[] | (() => UIComponent | UIComponent[]) | {
    subscribe: (cb: (val: any) => void) => {
        unsubscribe: () => void;
    };
};
interface JSONUIProps {
    json?: UIComponent | UIComponent[];
    jsonSource?: JSONSource;
}
declare const JSONUI: ({ json, jsonSource }: JSONUIProps) => import("react").JSX.Element;
export { JSONUI, JSONUIEnums };
export type { UIComponent };
//# sourceMappingURL=index.d.ts.map