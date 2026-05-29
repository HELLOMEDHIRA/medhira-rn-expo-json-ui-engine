import { JSONUIEnums } from './types';
import type { UIComponent, UseComponent } from './types';

type ComponentEntry<Props extends object = Record<string, unknown>> = {
  ref: string;
  json: UIComponent;
  propsType?: Props;
  defaultProps?: Partial<Props>;
};

const registry = new Map<string, ComponentEntry<Record<string, unknown>>>();

const registerJSONComponent = <Props extends object>(
  ref: string,
  json: UIComponent,
  props: Partial<Props> = {}
): void => {
  const entry: ComponentEntry<Props> = {
    ref,
    json,
    propsType: {} as Props,
    defaultProps: props,
  };
  registry.set(ref, entry as ComponentEntry<Record<string, unknown>>);
};

const getComponentEntry = (ref: string): ComponentEntry | null =>
  registry.get(ref) ?? null;

const clearComponentRegistry = (): void => {
  registry.clear();
};

const resolvePlaceholders = (
  template: unknown,
  props: Record<string, unknown>
): unknown => {
  if (typeof template === 'string') {
    const single = template.match(/^{{\s*(.*?)\s*}}$/);
    if (single) {
      const value = props[single[1]!.trim()];
      if (value !== undefined) {
        return value;
      }
      return '';
    }
    return template.replace(/{{(.*?)}}/g, (_, key: string) => {
      const value = props[key.trim()];
      return value !== undefined ? String(value) : '';
    });
  }
  if (typeof template === 'object' && template !== null) {
    const result: Record<string, unknown> | unknown[] = Array.isArray(template)
      ? []
      : {};
    for (const k in template as Record<string, unknown>) {
      (result as Record<string, unknown>)[k] = resolvePlaceholders(
        (template as Record<string, unknown>)[k],
        props
      );
    }
    return mergeFunctionProps(result, props);
  }
  return template;
};

const mergeFunctionProps = (
  resolved: unknown,
  props: Record<string, unknown>
): unknown => {
  if (!resolved || typeof resolved !== 'object' || Array.isArray(resolved)) {
    return resolved;
  }
  const output = { ...(resolved as Record<string, unknown>) };
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'function') {
      output[key] = value;
    }
  }
  return output;
};

const defineUseComponent = <
  TRef extends string,
  TProps extends Record<string, unknown>,
>(
  ref: TRef,
  props: TProps,
  json: UIComponent
): UseComponent<TRef, TProps> => {
  registerJSONComponent<TProps>(ref, json, props);
  return {
    type: JSONUIEnums.CustomTypes.useComponent,
    ref,
    props,
  };
};

export {
  registerJSONComponent,
  getComponentEntry,
  resolvePlaceholders,
  defineUseComponent,
  clearComponentRegistry,
};
