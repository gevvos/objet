export const isNotEmptyString = (val: string) => val !== '';

export const isLessThenMaxLengthString = (val: string, maxLength: number) =>
  val.length <= maxLength;

export const isLessThenMinLengthString = (val: string, minLength: number) =>
  val.length >= minLength;

export const isRegexp = (val: string, regex: RegExp) => regex.test(val);

export const isNotXSS = (val: string) => {
  const regex = /<(|\/|[^/>][^>]+|\/[^>][^>]+)>|(">)/i;

  return !isRegexp(val, regex);
};

export const isPhone = (val: string) => {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^[\+]?[0-9]?\(?[0-9]{3}\)?[-\s\.]?[0-9]{3}([-\s\.]?[0-9]{2}){2}$/;

  return isRegexp(val, regex);
};

export const isEmail = (val: string) => {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  return isRegexp(val, regex);
};

export const isPassword = (val: string) => {
  const hasSymbols = isRegexp(
    val,
    // eslint-disable-next-line no-useless-escape
    /[`!@#\$%\^&\*\(\)\-_=\+\[\]{};:"\\\|,\.<>\/\?]+/
  );
  const hasLetters = isRegexp(val, /[a-zA-Z]+/);
  const hasNumbers = isRegexp(val, /\d+/);
  const hasAllowSymbols = isRegexp(
    val,
    // eslint-disable-next-line no-useless-escape
    /^[0-9a-zA-Z`!@#\$%\^&\*\(\)\-_=\+\[\]{};:"\\\|,\.<>\/\?]+$/
  );

  return hasSymbols && hasLetters && hasNumbers && hasAllowSymbols;
};
