import {
  clearComponentRegistry,
  defineUseComponent,
  resolvePlaceholders,
} from '../custom';
import { evaluateShowIf } from '../showIf';
import { setRenderContext } from '../context';
import { JSONUIEnums } from '../types';
import { isObservable, isPromiseLike, normalizeListItem } from '../utils';

describe('medhira-rn-expo-json-ui-engine', () => {
  beforeEach(() => {
    clearComponentRegistry();
    setRenderContext({});
  });

  it('registers and resolves useComponent templates', () => {
    defineUseComponent(
      'Greeting',
      { name: 'World' },
      {
        type: JSONUIEnums.LeafTypes.Text,
        value: 'Hello {{name}}',
      }
    );

    const resolved = resolvePlaceholders(
      { type: JSONUIEnums.CustomTypes.useComponent, ref: 'Greeting' },
      { name: 'MEDHIRA' }
    );

    expect(resolved).toMatchObject({ ref: 'Greeting' });
  });

  it('evaluateShowIf respects boolean and context function', () => {
    setRenderContext({ role: 'admin' });
    const component = {
      type: JSONUIEnums.LeafTypes.Text,
      value: 'x',
    };
    expect(evaluateShowIf((ctx) => ctx.role === 'admin', component)).toBe(true);
    expect(evaluateShowIf(false, component)).toBe(false);
  });

  it('resolvePlaceholders preserves functions from props', () => {
    const onPress = jest.fn();
    const resolved = resolvePlaceholders(
      { props: { title: '{{label}}', onPress: '{{onPress}}' } },
      { label: 'Go', onPress }
    ) as { props: { title: string; onPress: () => void } };
    expect(resolved.props.title).toBe('Go');
    expect(resolved.props.onPress).toBe(onPress);
  });

  it('normalizeListItem wraps primitives as Text', () => {
    expect(normalizeListItem('hello')).toEqual({
      type: JSONUIEnums.LeafTypes.Text,
      value: 'hello',
    });
  });

  it('detects observables and promises', () => {
    const observable = {
      subscribe: (cb: (v: unknown) => void) => {
        cb({});
        return { unsubscribe: () => {} };
      },
    };
    expect(isObservable(observable)).toBe(true);
    expect(isPromiseLike(Promise.resolve([]))).toBe(true);
  });
});
