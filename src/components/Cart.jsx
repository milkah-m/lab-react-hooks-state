// ### **3️⃣ Implement the Add to Cart Feature**
// - Each product should have an **"Add to Cart"** button.
// - Clicking the button should add the item to the cart.
// - The cart should display a **list of added items** with the text 'Item is in your cart' such as 'Milk is in your cart.'

import React, {useState} from 'react'

const Cart = ({shoppingList}) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
        <ul>{shoppingList.map( item =><li key={item.id}> {item.name} is in your cart </li>)}</ul> 
      
    </div>
  )
}

export default Cart
