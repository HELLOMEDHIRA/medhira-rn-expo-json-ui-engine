import type { UIComponent } from './types';
import { JSONUIEnums } from './types';

export const isObservable = (
  obj: unknown
): obj is {
  subscribe: (cb: (val: UIComponent | UIComponent[]) => void) => {
    unsubscribe: () => void;
  };
} => !!obj && typeof (obj as { subscribe?: unknown }).subscribe === 'function';

export const isPromiseLike = (
  value: unknown
): value is Promise<UIComponent | UIComponent[]> =>
  !!value &&
  typeof (value as Promise<unknown>).then === 'function' &&
  typeof (value as Promise<unknown>).catch === 'function';

export const normalizeListItem = (item: unknown): UIComponent => {
  if (item && typeof item === 'object' && 'type' in (item as object)) {
    return item as UIComponent;
  }
  return {
    type: JSONUIEnums.LeafTypes.Text,
    value: String(item ?? ''),
  };
};

export const normalizeListData = (data: unknown[] | undefined): UIComponent[] =>
  (data ?? []).map(normalizeListItem);

export const getComponentKey = (
  component: UIComponent,
  index: number
): string => {
  const withKey = component as UIComponent & { key?: string; id?: string };
  return withKey.key ?? withKey.id ?? `${component.type}-${index}`;
};
