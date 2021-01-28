type Func<T extends any[], R> = (...a: T) => R

/**
 * 函数重载compose
 */
export default function compose(): <R>(a: R) => R
/**
 * 函数重载compose
 */
export default function compose<F extends Function>(f: F): F

/**
 * 函数重载compose
 */
export default function compose<A, T extends any[], R>(
  f1: (a: A) => R,
  f2: Func<T, A>
): Func<T, R>

/**
 * 函数重载compose
 */
export default function compose<A, B, T extends any[], R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func<T, A>
): Func<T, R>

/**
 * 函数重载compose
 */
export default function compose<A, B, C, T extends any[], R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func<T, A>
): Func<T, R>

/**
 * 函数重载compose
 */
export default function compose<R>(
  f1: (a: any) => R,
  ...funcs: Function[]
): (...args: any[]) => R
/**
 * 函数重载compose
 */
export default function compose<R>(...funcs: Function[]): (...args: any[]) => R

/**
 *
 * @param funcs 函数compose
 * @returns
 */
export default function compose(...funcs: Function[]) {
  // 判断是否传递进来function
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}


