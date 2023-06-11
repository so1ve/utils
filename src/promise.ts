export const runPromiseInSequence = <U>(
  promises: [...Promise<any>[], Promise<U>],
): Promise<U> =>
  promises.reduce(
    (promiseChain, currentTask) => promiseChain.then(() => currentTask),
    Promise.resolve(),
  );
