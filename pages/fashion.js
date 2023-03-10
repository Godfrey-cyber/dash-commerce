import Head from 'next/head'
import React, { useState } from 'react'
import All from '../components/All'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { products, cats } from '../utiles/data'
import { useRouter } from "next/router"
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import axios from "axios"
import Image from "next/image"

const Fashion = ({ fashion }) => {
  const [openCatModal, setOpenCatModal] = useState(false)
    const handleAll = () => {
        setOpenCatModal(prev => !prev)
    }
  const router = useRouter()
  // const x = Object.entries(cats[3]).map(item => console.log(item))
  console.log({fashion})
  // const str = "Clothes & Footware"
  //   const trim = (word) => {
  //       return word.replace(/ /g,'')
  //   }
  //   console.log(trim(str).toLowerCase())
  //   console.log(str.split(""))
  return (
      <section className="head_section">
      <Head>
        <title>Wave | Shop the best quality and durable furnitures in town from trusted dealers</title>
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
            <h3 className="text-lg text-gray-700 py-1 border-b border-t border-gray-300 px-3">Condition</h3>
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
              <select className="text-sm border-none focus:border-none bg-white cursor-pointer focus:outline-none p-2">
                <option value="">Price Low to High</option>
                <option value="">Price High to Low</option>
                <option value="">Name Asc</option>
                <option value="">Name Desc</option>
              </select>
          </span>
          <span className="grid grid-cols-12 gap-x-6 gap-y-4 px-2">
              {fashion.map(item => (
                <div onClick={() => router.push(`/product/${item._id}`)} title={item.title} key={item._id} className="col-span-3 flex flex-col space-y-1 bg-white rounded-sm max-h-fit transition delay-200 hover:shadow-md shadow-gray-500 cursor-pointer relative p-2">
                {item.disc ? <span className="disc_span">-{item.disc}%</span> : null}
                <span className="like_span">
                    <HeartIcon className="h-6 text-orange-500" />
                </span>
                <span className="img_wrapper">
                    <Image src={item.photo} alt="alt_image" layout="fill" className="img_tag object-contain"/>
                </span>
                <p className="text-sm font-bold text-gray-700">{item.title}</p>
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
    // const { id } = params
    const str = "Clothes & Footware"
    const trim = (word) => {
        return word.replace(/ /g,'')
    }
    console.log(trim(str).toLowerCase())
    const fashion = await axios("http://localhost:8000/api/product/fetchAll?category=Clothes,Footware").then((res) => res.data)
    // const topBrands = await axios("http://localhost:8000/api/product/fetchAll").then((res) => res.data)
    return {
        props: {
            fashion: fashion.data,
            // topBrands
        }
    }
}
export default Fashion