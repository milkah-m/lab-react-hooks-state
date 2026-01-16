import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

//  const removeProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));



// ### **4️⃣ Implement the Category Filter**
// - Create a **dropdown menu** to filter products by category.
// - When a user selects a category, **only matching products** should be displayed.
// - Use **state management (`useState`)** to track the selected category.

const ProductList = ( {setShoppingList, category}) => {
  const filteredProducts =
  category === "all"
  ? sampleProducts
  : sampleProducts.filter(product => product.category === category)
  
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filteredProducts.length > 0}
      ?{filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} setShoppingList = {setShoppingList} />
      ))}
      : <p>no products available</p>
    </div>
  )
}

export default ProductList
