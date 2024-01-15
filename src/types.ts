export type Falsy = Undef | 0 | "";
export type Undef = false | null | undefined;
export type MaybePromise<T> = T | PromiseLike<T>;
export type MaybeNull<T> = T | null | undefined;
export type MaybeArray<T> = T | T[];
export type Fn<T = void> = () => T;
export type Constructor<T = void> = new (...args: any[]) => T;
export type ElementOf<T> = T extends (infer E)[] ? E : never;
export type UnionToIntersection<U> = (
	U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
	? I
	: never;
export type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;
export type MergeInsertions<T> =
	T extends Record<PropertyKey, unknown>
		? { [K in keyof T]: MergeInsertions<T[K]> }
		: T;
