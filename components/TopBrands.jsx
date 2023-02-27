import Image from "next/image"
import React from "react"
import { brands } from "../utiles/data"
const TopCat = ({ topProducts }) => {
    return (
        <section title="Top Brands" className="cat_section">
            {topProducts?.data?.slice(4, 12).map(item => (
                <div key={item._id} title={item.title} className="flex flex-col space-y-4 items-center justify-between rounded-md h-44 w-44 bg-white p-2 cursor-pointer">
                    <img alt="hello" className="object-contain h-28 w-28" src={item.photo} />
                    <span className="px-2">
                        <p className="text-lg text-gray-800 font-bold">{item.title}</p>
                    </span>
                </div>
            ))}
        </section>
    )
}

export default TopCat