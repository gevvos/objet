
type SomeArray = unknown[];

export const isNotEmptyArray = (val: SomeArray) => val.length > 0;

export const isLessThenMaxLengthArray = (val: SomeArray, maxLength: number) =>
  val.length <= maxLength;

export const isMoreThenMinLengthArray = (val: SomeArray, minLength: number) =>
  val.length >= minLength;
