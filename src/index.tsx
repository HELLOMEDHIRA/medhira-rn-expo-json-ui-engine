import { Fragment, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import renderUIComponent from './render';
import type { JSONSource, UIComponent } from './types';
import { JSONUIEnums } from './types';
import {
  JSONUIContext,
  setRenderContext,
  type JSONUIContextValue,
} from './context';
import { getComponentKey, isObservable, isPromiseLike } from './utils';
import { JSONUIErrorBoundary } from './JSONUIErrorBoundary';

export { JSONUIErrorBoundary } from './JSONUIErrorBoundary';
export {
  defineUseComponent,
  registerJSONComponent,
  clearComponentRegistry,
} from './custom';
export { JSONUIContext, useJSONUIContext } from './context';

type JSONUIProps = {
  json?: UIComponent | UIComponent[];
  jsonSource?: JSONSource;
  context?: JSONUIContextValue;
  loadingComponent?: ReactNode;
  errorFallback?: ReactNode;
  onRenderError?: (error: Error) => void;
};

const resolveSyncSource = (
  jsonSource: JSONSource | undefined,
  json: UIComponent | UIComponent[] | undefined
): UIComponent | UIComponent[] => {
  if (isObservable(jsonSource)) {
    return json ?? [];
  }
  if (typeof jsonSource === 'function') {
    const result = jsonSource();
    if (isPromiseLike(result)) {
      return json ?? [];
    }
    return result;
  }
  if (jsonSource) {
    return jsonSource;
  }
  return json ?? [];
};

const JSONUIInner = ({
  json,
  jsonSource,
  context = {},
  loadingComponent,
}: JSONUIProps) => {
  const [observableValue, setObservableValue] = useState<
    UIComponent | UIComponent[]
  >(() => (Array.isArray(json) ? json : json ? [json] : []));
  const [asyncValue, setAsyncValue] = useState<UIComponent | UIComponent[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isObservable(jsonSource)) {
      const sub = jsonSource.subscribe(setObservableValue);
      return () => sub.unsubscribe();
    }
    return undefined;
  }, [jsonSource]);

  useEffect(() => {
    if (isObservable(jsonSource) || typeof jsonSource !== 'function') {
      return undefined;
    }

    let cancelled = false;
    const run = async () => {
      setLoading(true);
      try {
        const result = jsonSource();
        const resolved = isPromiseLike(result) ? await result : result;
        if (!cancelled) {
          setAsyncValue(resolved);
        }
      } catch (error) {
        console.error('JSONUI jsonSource failed:', error);
        if (!cancelled) {
          setAsyncValue(json ?? []);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [json, jsonSource]);

  const resolvedJson = useMemo(() => {
    if (isObservable(jsonSource)) {
      return observableValue ?? [];
    }
    if (typeof jsonSource === 'function') {
      return asyncValue ?? json ?? [];
    }
    return resolveSyncSource(jsonSource, json);
  }, [json, jsonSource, observableValue, asyncValue]);

  const mergedContext = useMemo(() => ({ ...context }), [context]);

  useEffect(() => {
    setRenderContext(mergedContext);
  }, [mergedContext]);

  if (loading && loadingComponent) {
    return <>{loadingComponent}</>;
  }

  if (loading && !loadingComponent) {
    return (
      <View style={{ padding: 16 }}>
        <ActivityIndicator />
      </View>
    );
  }

  const tree = Array.isArray(resolvedJson)
    ? resolvedJson.map((component, idx) => (
        <Fragment key={getComponentKey(component, idx)}>
          {renderUIComponent(component)}
        </Fragment>
      ))
    : renderUIComponent(resolvedJson);

  return (
    <JSONUIContext.Provider value={mergedContext}>
      {tree}
    </JSONUIContext.Provider>
  );
};

const JSONUI = (props: JSONUIProps) => (
  <JSONUIErrorBoundary
    fallback={props.errorFallback}
    onError={props.onRenderError}
  >
    <JSONUIInner {...props} />
  </JSONUIErrorBoundary>
);

export { JSONUI, JSONUIEnums };
export type { UIComponent, JSONSource, ShowIfFn } from './types';
export type { JSONUIContextValue } from './context';
