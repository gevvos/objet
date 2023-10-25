import { reactifyFunction } from '@shared';
import type { ComputedRef, UnwrapNestedRefs } from 'vue';
import { reactive } from 'vue';
import { ObjetError, ObjetWarning } from './error';

import type { Prop } from './property';

export type Props<Type> = {
  [Property in keyof Type]: UnwrapNestedRefs<Prop<Type[Property]>>;
};

export type Objet<E> = {
  /**
   * Список ошибок
   */
  errors: (ObjetError | ObjetWarning)[];
  /**
   * Валидна ли сущность
   * Сущность валидна, если все ее свойства валидны
   */
  isValid: boolean;
  /**
   * Свойства сущности
   */
  props: Props<E>;
};

export const defineObjet = <V extends Object>(planeObject: V) => {
  (Object.keys(planeObject) as (keyof Props<V>)[])
};
