import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import All from '../../components/All'
import Header from '../../components/Header'
import { products } from '../../utiles/data'
import Footer from "../../components/Footer"
import { useRouter } from 'next/router'
import axios from "axios"
import Image from "next/image"

const ProductCat = ({electronics}) => {
  const [openCatModal, setOpenCatModal] = useState(false)
  const [products, setProducts] = useState(electronics)
  const [sort, setSort] = useState("")
    const handleAll = () => {
        setOpenCatModal(prev => !prev)
    }
  const router = useRouter()
  const { params } = router.query
  console.log(params)
  useEffect(() => {
        if (sort === "HighToLow") {
            setProducts(products.sort((a, b) => a.price - b.price));
        } else if (sort === "LowToHigh") {
            setProducts(products.sort((a, b) => b.price - a.price));
        } else if (sort === "newest") {
            setProducts(products.sort((a, b) => a.createdAt - b.createdAt));
        } else {
            setProducts(electronics)
        }
    }, [sort])
  return (
      <section className="head_section">
      <Head>
        <title>Wave | Shop the lattest quality home appliances from our trusted dealers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {openCatModal && <All />}
        <Header setOpenCatModal={setOpenCatModal} handleAll={handleAll} />
      <section className="product_section">
        <div className="col-span-3 flex-col space-y-4 rounded-sm h-fit  pb-4 bg-white">
          <h3 className="text-lg text-gray-700 py-1 border-b border-gray-300  px-3">Quick Filter</h3>
          <div className="flex flex-col space-y-1">
            <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">Verified Seller</p>
              </span>
              <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">On Sale</p>
              </span>
              <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">New Product</p>
            </span>
            </div>
            <h3 className="text-lg text-gray-700 py-1 border-b border-t border-gray-300  px-3">Categories</h3>
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-700 font-normal cursor-pointer px-3">Small Appliances</p>
            <p className="text-sm text-gray-700 font-normal cursor-pointer px-3">Large Appliances</p>
            <p className="text-sm text-gray-700 font-normal cursor-pointer px-3">Other Appliances</p>
            <p className="text-sm text-gray-700 font-normal cursor-pointer px-3">Kitchen & Dinning</p>
          </div>
            <h3 className="text-lg text-gray-700 py-1 border-b border-t border-gray-300  px-3">Condition</h3>
          <div className="flex flex-col space-y-1">
            <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="Brand New" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">Brand New</p>
              </span>
              <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="Used" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">Used</p>
              </span>
              <span className="flex space-x-3 items-center px-3">
                <input type="checkbox" name="Refurblished" id="" className="bg-orange-500" />
                <p className="text-sm text-gray-600 font-normal cursor-pointer">Refurblished</p>
            </span>
          </div>
          </div >
          <div className="col-span-9 flex-col space-y-4 rounded-sm bg-white">
            <span className="flex justify-between items-center border-b border-gray-200 px-2">
              <p className="text-sm text-gray-700 p-2">Recent Products</p>
               <select name="size" onClick={(event) => setSort(event.target.value)} className="text-sm border-none focus:border-none bg-white cursor-pointer focus:outline-none p-2">
                <option value="LowToHigh">Price Low to High</option>
                <option value="HighToLow">Price High to Low</option>
                {/*<option value="Asc">Name Asc</option>*/}
                <option value="newest">Newest</option>
              </select>
          </span>
          <span className="grid grid-cols-12 gap-x-6 gap-y-4 px-2">
              {products.map(item => (
                <div onClick={() => router.push(`/product/${item._id}`)} title={item.title} key={item._id} className="col-span-3 flex flex-col space-y-1 bg-white rounded-sm max-h-fit transition delay-200 hover:shadow-md shadow-gray-500 cursor-pointer relative p-2">
                <span className="disc_span">-{item?.disc}%</span>
                <span className="like_span">
                    <HeartIcon className="h-6 text-orange-500" />
                </span>
                {/*<span className="img_wrapper">
                    <Image src={item.photo} alt="alt_image" layout="fill" className="img_tag object-contain"/>
                </span>*/}
                <span className="h-32 lg:h-52 h-20 w-32 lg:w-48 relative">
                <Image src={item.photo} alt="alt_image" layout="fill" className="img_tag object-contain"/>
            </span>
                <p className="text-sm font-bold text-gray-700 truncate">{item.title}</p>
                <span className="flex items-center justify-between">
                    <p className="text-sm font-bold text-gray-700">KSH. {item.price}</p>
                    <ShoppingCartIcon className="h-6 text-orange-500 cursor-pointer" />
                </span>
            </div>
            ))}
          </span>
        </div >
    </section>
      </main>
      <Footer />
    </section>
  )
}
export async function getServerSideProps(context) {
     const category = context.query.electronics
    console.log(category)
    const capitalize = s => s && s[0].toUpperCase() + s.slice(1)
    const query = capitalize(category)
    const electronics = await axios(`http://localhost:8000/api/product/fetchAll?subcategory=${query}`).then((res) => res.data)
    // const laptops = await axios("http://localhost:8000/api/product/fetchAll?subcategory=Laptops").then((res) => res.data)
    return {
        props: {
            electronics: electronics.data,
            // topBrands
        }
    }
}
export default ProductCat