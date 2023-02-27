import React from 'react'
import Product from "./Product.jsx"
const GreatDeals = ({ greatDeals }) => {
  return (
      <section className="flex flex-col my-4 w-full h-max-fit mx-auto">
          <span className="title_span">Great Deals</span>
          <div className="product_grid">
            {greatDeals?.data?.splice(0,8).map(item => (
                    <Product key={item._id} id={item._id} title={item.title} disc={!item.disc && 0} name={item.title} photo={item.photo} price={item.price} />
                ))}
            </div>
    </section>
  )
}

export default GreatDeals