// utils.ts
export function getLastWorkedCompany<T>(obj: T): T[keyof T] | undefined {
  const keys = Object.keys(obj);
  const lastKey = keys[keys.length - 1];
  return obj[lastKey];
}
