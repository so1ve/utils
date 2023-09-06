import { toString } from "./base";
import type { Falsy, Undef } from "./types";

export const isFalsy = (x: any): x is Falsy => !x;
export const isUndef = (x: any): x is Undef => x === false || x == null;
export const isDef = <T = any>(val?: T): val is T => typeof val !== "undefined";
export const isBoolean = (val: any): val is boolean => typeof val === "boolean";
export const isFunction = <T extends (...args: any[]) => any>(
	val: any,
): val is T => typeof val === "function";
export const isNumber = (val: any): val is number => typeof val === "number";
export const isString = (val: unknown): val is string =>
	typeof val === "string";
export const isObject = (val: any): val is Record<PropertyKey, unknown> =>
	toString(val) === "[object Object]";
export const isUndefined = (val: any): val is undefined =>
	toString(val) === "[object Undefined]";
export const isNull = (val: any): val is null =>
	toString(val) === "[object Null]";
export const isRegExp = (val: any): val is RegExp =>
	toString(val) === "[object RegExp]";
export const isDate = (val: any): val is Date =>
	toString(val) === "[object Date]";
