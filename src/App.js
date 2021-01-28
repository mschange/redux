import React from 'react';

// 引入store
import store from './store';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    //subscribe当store中数据发生变化就会更新数据
    store.subscribe(()=>{
        this.setState(store.getState())
    })
  }
  hanleAdd = () => {
    store.dispatch({
      type: 'ADD',
      payload: 2
    })
  }
  hanleInmus = () => {
    store.dispatch({
      type: 'MINUS',
      payload: 1
    })
  }
  render(h) {
    const { count } = this.state;
    return (
      <>
        <p>{count}</p>
        <button onClick={this.hanleAdd}>+1</button>
        <button onClick={this.hanleInmus}>-1</button>
      </>
    )
  }
}

export default App;