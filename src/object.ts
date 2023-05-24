export const objectKeys = <T extends object>(obj: T) =>
  Object.keys(obj) as `${keyof T &
    (string | number | boolean | null | undefined)}`[];

export const objectEntries = <T extends object>(obj: T) =>
  Object.entries(obj) as [keyof T, T[keyof T]][];

export const objectPick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[],
  omitUndefined = false,
) =>
  keys.reduce((n, k) => {
    if (k in obj && (!omitUndefined || obj[k] !== undefined)) {
      n[k] = obj[k];
    }

    return n;
  }, {} as Pick<T, K>);
