function createStore(reducer, enhancer) {
  
  // applyMiddleware是对dispatch的扩展，在这里把createStore以及reducer用聚合的形式传入
  if (enhancer) return enhancer(createStore)(reducer)
  // 定义state
  let currentState,
      currentListeners = []; // 订阅容器

  /**
   * createStrore 必须返回三个函数
   *  1、store.getState(); // 获取state值
   *  2、store.dispath(); // 触发reducer
   *  3、store.subscibe(); // 订阅store改变
   *  */ 
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    /**
     * 接受action
        * 例如： 
        * dispatch({
        *  type: 'xxx'，
        *  payload: xxx
        * })
     */

    // 修改值，使用createStore传递进来的reducer进行更新
    currentState = reducer(currentState, action);
    currentListeners.map(listener => listener());
  }
  function subscribe(listener) {
    currentListeners.push(listener);
    // 取消订阅
    return () => {
      // 移除订阅数组的当前项
      currentListeners.splice(currentListeners.indexOf(listener), 1)
    }
  }
  // 初始值为空，先执行一次dispatch获取默认值
  dispatch({type: "PTTTT/OO"});
  return {
    getState,
    dispatch,
    subscribe
  }
}

export default createStore;