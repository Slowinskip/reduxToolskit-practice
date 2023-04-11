import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './redux/counter'

function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="counter">
        <h1>The count is: {count}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
          <button onClick={() => dispatch(incrementByAmount(2))}>
            Increment by 2
          </button>
          <button onClick={() => dispatch(decrementByAmount(2))}>
            Decrement by 2
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
