import React from 'react'
import Product from "./Product.jsx"
const Computing = ({ appliance }) => {
  return (
      <section className="flex flex-col my-4">
          <span className="title_span">Great Deals</span>
          <div className="product_grid">
            {appliance?.map((item) => (
                    <Product key={item._id} id={item._id} title={item.title} disc={!item.disc && ""} name={item.title} photo={item.photo} price={item.price} />
                ))}
            </div>
    </section>
  )
}

export default Computing