import { Paths } from '../typings/paths';

export function isStringsEqual(lhs: Paths, rhs: Paths) {
  return lhs === rhs;
}

export function isObjectsEqual(a: unknown, b: unknown) {
  const isArray = (value: unknown): value is [] => {
    return Array.isArray(value);
  };

  const isPlainObject = (value: unknown): value is Record<string, unknown> => {
    return typeof value === 'object'
      && value !== null
      && value.constructor === Object
      && Object.prototype.toString.call(value) === '[object Object]';
  };

  const isArrayOrObject = (value: unknown): value is ([] | Record<string, unknown>) => {
    return isArray(value) || isPlainObject(value);
  };

  if (!isArrayOrObject(a) && !isArrayOrObject(b)) return false;
  if (isArrayOrObject(a) && isArrayOrObject(b)) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    if (isPlainObject(a) && isPlainObject(b)) {
      for (const [key, aVal] of Object.entries(a)) {
        if (!Object.hasOwn(b, key)) return false;
        const bVal = b[key];
        if (isArrayOrObject(aVal) && isArrayOrObject(bVal)) {
          if (isObjectsEqual(aVal, bVal)) {
            continue;
          } else {
            return false;
          }
        } else {
          if (aVal !== bVal) return false;
        }
      }
      return true;
    }
    if (isArray(a) && isArray(b)) {
      a.forEach((el: unknown, i) => {
        if (isArrayOrObject(el) && isArrayOrObject(b[i])) {
          if (!isObjectsEqual(el, b[i])) return false;
        } else {
          if (el !== b[i]) return false;
        }
      });
      return true;
    }
  }
};
