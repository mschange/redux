/**
 * applyMiddleware对dispatch进行扩展
 * 所以这里的thunk可以拿到getstate以及dispatch
 */
import isPromise from "is-promise";
export default function promise({dispatch}) {
  return next => action => {
    return isPromise(action) ? action.then(dispatch) : next(action);
  };
}