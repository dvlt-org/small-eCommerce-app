import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from "./components/Cart"
import CheckOut from "./components/Checkout"

export default function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(prev => ([...prev, product]))
  }

  function removeFromCart(id) {
    setCart(() => (cart.filter((item, index) => index !== id)))
  }

  return (
    <div className='app'>
      <h1>Shopping cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart removeFromCart={removeFromCart} cart={cart} />
      <CheckOut cart={cart} />
    </div>
  )
}
