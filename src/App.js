import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './redux/slices/counter'
import {
  addProduct,
  deleteProduct,
  productFilter,
} from './redux/slices/products'
import { useState } from 'react'

function App() {
  const { count } = useSelector((state) => state.counter)
  const { product } = useSelector((state) => state.products)
  const { filter } = useSelector((state) => state.products)

  const [price, setPrice] = useState('')
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  const addData = () => {
    if (name.length > 0 && price > 0) {
      const data = { name: name, cost: price, id: product.length }
      dispatch(addProduct(data))
      setName('')
      setPrice('')
    }
  }
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
      <div className="products">
        <div>
          <input
            onChange={(e) => {
              dispatch(productFilter(e.target.value))
            }}
            value={filter}
            placeholder="Filter by name"
          ></input>
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder="Add name"
            ></input>
            <input
              onChange={(e) => {
                setPrice(e.target.value)
              }}
              placeholder="Add price"
            ></input>
            <button onClick={addData}>Add products</button>
          </div>
        </div>
        <div>
          {product
            .filter((i) => (filter ? i.name.includes(filter) : true))
            .map((i) => (
              <div className="product" key={i.id}>
                {i.name} {i.cost}$
                <button onClick={() => dispatch(deleteProduct(i.id))}>-</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App
