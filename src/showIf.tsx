import { getRenderContext } from './context';
import type { ShowIfFn, UIComponent } from './types';

export const evaluateShowIf = (
  showIf: boolean | ShowIfFn | undefined,
  component: UIComponent
): boolean => {
  if (showIf === false) {
    return false;
  }
  if (showIf === true || showIf === undefined) {
    return true;
  }
  if (typeof showIf === 'function') {
    const context = getRenderContext();
    const payload = { ...context, component };
    if (showIf.length >= 2) {
      return Boolean(showIf(context, component));
    }
    return Boolean(showIf(payload));
  }
  return true;
};
