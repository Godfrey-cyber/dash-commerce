import Image from "next/image"
import React from "react"
// import { categories } from "../utiles/data"
import { useRouter } from "next/router"
const Categories = ({categories}) => {
   const router = useRouter()
   console.log(categories)
   const trim = (word) => {
    return word.replace(/ /g,'')
  }
//   console.log(trim(str))
    return (
        <section title="Top Brands" className="cat_section">
            {categories?.map(item => (
                <div onClick={() => router.push(`/categories/${item._id}`)}  key={item._id} title={item.name} className="cat_item">
                    <span className="relative h-20 w-20">
                        <Image alt={item.name} className="object-fit " layout="fill" src={item?.descriptionImg} />
                    </span>
                    <span className="px-2">
                        <p className="text-xs lg:text-sm text-gray-800 font-bold">{item.name}</p>
                    </span>
                </div>
            ))}
        </section>
    )
}

export default Categories

//grid grid-flow-row-dense md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6