import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: '',
  product: [
    { name: 'Gun', cost: '2', id: 0 },
    { name: 'Sword', cost: '2', id: 1 },
    { name: 'Armor', cost: '6', id: 2 },
    { name: 'Knife', cost: '2', id: 3 },
    { name: 'Shield', cost: '3', id: 4 },
  ],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productFilter: (state, action) => {
      state.filter = action.payload
    },
    addProduct: (state, action) => {
      state.product.push(action.payload)
    },
    deleteProduct: (state, action) => {
      const itemId = action.payload
      state.product = state.product.filter((item) => item.id !== itemId)
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  productFilter,
  addProduct,
  deleteProduct,
} = productsSlice.actions

export default productsSlice.reducer
