import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import React from "react"
// import { products } from "../utiles/data"
import Product from "./Product.jsx"

const TopProducts = ({ recentProducts }) => {
    console.log(recentProducts?.data)
    return (
        <section className="flex flex-col my-4 w-full h-max-fit mx-auto">
            <span className="title_span">Recent Products</span>
            <div className="product_grid">
                {recentProducts?.data?.map(item => (
                    <Product key={item._id} id={item._id} title={item.title} disc={!item.disc && 0} name={item.title} photo={item.photo} price={item.price} />
                ))}
            </div>
        </section>
    )
}

export default TopProducts