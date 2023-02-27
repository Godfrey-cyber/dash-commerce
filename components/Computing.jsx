import React from 'react'
import Product from "./Product.jsx"
const Computing = ({ category, categories }) => {
  console.log({categories})
  return (
      <section className="flex flex-col my-4">
          <span className="title_span">Great Deals</span>
          <div className="product_grid">
            {categories?.slice(0, 8).map(item => (
                    <Product key={item._id} id={item._id} title={item.title} disc={!item.disc && 0} name={item.title} photo={item.photo} price={item.price} />
                ))}
            </div>
    </section>
  )
}

export default Computing