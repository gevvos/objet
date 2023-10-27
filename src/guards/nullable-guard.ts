type Nullable<T> = T | null | undefined;

export const isNotUnspecified = <T>(val: Nullable<T>): val is NonNullable<T> =>
  val !== null && val !== undefined;
