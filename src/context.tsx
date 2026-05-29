import { createContext, useContext } from 'react';

export type JSONUIContextValue = Record<string, unknown>;

export const JSONUIContext = createContext<JSONUIContextValue>({});

export const useJSONUIContext = (): JSONUIContextValue =>
  useContext(JSONUIContext);

let renderContext: JSONUIContextValue = {};

export const setRenderContext = (ctx: JSONUIContextValue): void => {
  renderContext = ctx;
};

export const getRenderContext = (): JSONUIContextValue => renderContext;
