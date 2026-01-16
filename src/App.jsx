import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

// Step-by-step logic:

// App creates cart state

// App passes:

// the cart data → to Cart

// a function to update the cart → to Product

// Product button:

// calls that function

// passes the product

// App updates state

// Cart re-renders with new data

const App = () => {
  // TODO: Implement state for dark mode toggle

  const [shoppingList, setShoppingList] = useState([])

  const [category, setCategory] = useState("all") //category is simply a string and the initial state is "all"

  
  

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

{/* //  const removeProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
       */}


 

{/* 
      {if(userselection="fruits"){
        console.log("apple");
        
      } */}

      <ProductList setShoppingList={setShoppingList} category={category} />

      {/* TODO: Implement and render Cart component */}
      <Cart shoppingList={shoppingList} />
    
    </div>
  )
}

export default App

