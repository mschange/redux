/**
 * applyMiddleware对dispatch进行扩展
 * 所以这里的thunk可以拿到getstate以及dispatch
 */
// logger是打印日子，所以不需要dispatch
export default function logger({getState}) {
  return next => action => {
    console.log(action.type, new Date().toLocaleString());
    // 上一次的值
    const preValue = getState();
    console.log('prev state', preValue);
    // 执行
    const currentValue = next(action);
    const nextValue = getState();
    console.log("next state", nextValue)
    return currentValue;
  }
}