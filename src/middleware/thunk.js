
/**
 * applyMiddleware对dispatch进行扩展
 * 所以这里的thunk可以拿到getstate以及dispatch
 */
export default function thunk({dispatch, getState}) {
  /**
   * 如果dispatch传递进来的函数，继续向下执行，并把dispatch跟getState传进去
   * 否则执行reducer结束
   */
  return next => action => {
    if (typeof action === 'function') return action(dispatch, getState);
    return next(action);
  }
}