import type { UIComponent } from './types';
export declare const isObservable: (obj: unknown) => obj is {
    subscribe: (cb: (val: UIComponent | UIComponent[]) => void) => {
        unsubscribe: () => void;
    };
};
export declare const isPromiseLike: (value: unknown) => value is Promise<UIComponent | UIComponent[]>;
export declare const normalizeListItem: (item: unknown) => UIComponent;
export declare const normalizeListData: (data: unknown[] | undefined) => UIComponent[];
export declare const getComponentKey: (component: UIComponent, index: number) => string;
//# sourceMappingURL=utils.d.ts.map