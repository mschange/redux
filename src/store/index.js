// import { createStore, applyMiddleware } from 'redux';

// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import promise from "redux-promise";
import { createStore, applyMiddleware } from '../myRedux/index'

import  thunk  from '../middleware/thunk'
import logger  from '../middleware/logger'
import promise from '../middleware/promise'

const defaultState = {
  count: 0
}

export const countReducer = (state = defaultState, {  type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      const newStateAdd = state.count + payload;
      return {...state, ...{count: newStateAdd}}
    case 'MINUS':
      const newState = state.count - payload;
      return {...state, count: newState}
    default:
      return state;
  }
}


const store = createStore(
  countReducer,
  applyMiddleware(thunk, logger, promise)
)

export default store;