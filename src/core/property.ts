import type { ComputedRef } from 'vue';
import type { MaybeRef } from '@shared';
import { reactifyFunction } from '@shared';
import { ObjetError, ObjetWarning } from './error';

export type Validator<V> = (val: V) => {
  errors: (ObjetError | ObjetWarning)[];
  isValid: boolean;
};

export type Prop<V> = {
  data: V;
  errors: (ObjetError | ObjetWarning)[];
  isValid: boolean;
};

export type PropFactory<V> = (data: MaybeRef<V>) => ComputedRef<Prop<V>>;

export const defineProp = <V>(validator?: Validator<V>) => {
  const create = (data: V) => {
    const { isValid, errors } = validator?.(data) ?? { isValid: true, errors: [] };
    const prop: Prop<V> = {
      data,
      isValid,
      errors,
    };

    return prop;
  };

  return create;
};
