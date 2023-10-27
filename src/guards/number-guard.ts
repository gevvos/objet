export const isNotZeroNumber = (val: number) => val !== 0;

export const isLessThenMaxNumber = (val: number, max: number) => val <= max;

export const isMoreThenMinNumber = (val: number, min: number) => val >= min;

export const isNotNaNNumber = (val: number) => !Number.isNaN(val);

export const isNotNegativeNumber = (val: number) => val >= 0;

export const isNotOutOfRangeNumber = (val: number, range: [number, number]) => {
  const [min, max] = range.sort((a, b) => a - b);
  return val >= min && val <= max;
};