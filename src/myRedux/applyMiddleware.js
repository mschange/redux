export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    // 利用 enhancer(createStore)(reducer)创建store
    const store = createStore(reducer);
    // 记录dispatch
    let dispatch = store.dispatch;
    // 定义为dispatch加强的点，getstate函数不变，仍然需要
    const mid = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    
    // 对传递的middleware添加getstate以及dispatch属性
    /***
     * 
     * dispatch((dispatch) => {
     *   dispatch({
     *    type: 'xxx',
     *    payload: xxx
     *   })
     * })
     * 
     * 
     */
    const middlewareAll = middlewares.map(middleware => middleware(mid));

    // 实现聚合
    dispatch = compose(...middlewareAll)(dispatch);

    return {
      ...store,
      dispatch
    }
  }
}

// 聚合函数
function compose(...fns) {
  if (fns.length === 0) return arg => arg;
  if (fns.length === 1) return fns[0];
  return fns.reduce((a, b) => (...args) => a(b(...args)))
}
