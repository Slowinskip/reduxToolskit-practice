import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function plusCount() {
    setCount(count + 1)
  }
  function minusCount() {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={minusCount}>-</button>
      <button onClick={plusCount}>+</button>
    </div>
  )
}

export default App
