export function getLastWorkedCompany<T extends Record<string, any>>(
  obj: T
): T[keyof T] | undefined {
  const keys = Object.keys(obj);
  const lastKey = keys[keys.length - 1];
  return obj[lastKey];
}
