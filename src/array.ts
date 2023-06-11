import type { MaybeArray, MaybeNull } from "./types";

export function toArray<T>(array?: MaybeNull<MaybeArray<T>>): T[] {
  array = array ?? [];

  return Array.isArray(array) ? array : [array];
}

export const flattenArrayable = <T>(
  array?: MaybeNull<MaybeArray<T | T[]>>,
): T[] => toArray(array).flat(1) as T[];

export const uniq = <T>(array: readonly T[]): T[] => [...new Set(array)];

export function last(array: readonly []): undefined;
export function last<T>(array: readonly T[]): T;
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1);
}

export function remove<T>(array: T[], value: T) {
  if (!array) {
    return false;
  }
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);

    return true;
  }

  return false;
}

export function at(array: readonly [], index: number): undefined;
export function at<T>(array: readonly T[], index: number): T;
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length;
  if (!len) {
    return undefined;
  }

  if (index < 0) {
    index += len;
  }

  return array[index];
}

export const arrayEquals = <T>(array1: T[], array2: T[]): boolean =>
  array1.length === array2.length
    ? array1.every((element, index) => element === array2[index])
    : false;

export const arrayStartsWith = <T>(array: T[], prefix: T[]): boolean =>
  prefix.length > array.length
    ? false
    : arrayEquals(array.slice(0, prefix.length), prefix);
