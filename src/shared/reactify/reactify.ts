import type { ComputedRef, Ref } from 'vue';
import { computed, unref } from 'vue';

type AnyFn = (...args: any[]) => any

export type MaybeRef<T> = T | Ref<T>

type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)

type ReactiveFunc<T, Computed extends boolean> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: Computed extends true ? MaybeRefOrGetter<A[K]> : MaybeRef<A[K]> }) => ComputedRef<R>
  : never


export function toValue<T>(r: MaybeRefOrGetter<T>): T {
  return typeof r === 'function'
    ? (r as AnyFn)()
    : unref(r)
}

export function reactifyFunction<T extends Function, K extends boolean = true>(fn: T): ReactiveFunc<T, K> {
  return function (this: any, ...args: any[]) {
    return computed(() => fn.apply(this, args.map(i => toValue(i))))
  } as any
}