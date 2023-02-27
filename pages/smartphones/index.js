import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import React, { useState } from 'react'
import All from '../../components/All'
import Footer from '../../components/Footer'
import Smartphones from '../../components/Smartphones'
import Header from '../../components/Header'
import { electronics, products, smartphones } from '../../utiles/data'
import { useRouter } from "next/router"
import axios from "axios"
import Image from "next/image"

const Index = ({ smartphone }) => {
  const [openCatModal, setOpenCatModal] = useState(false)
  const handleAll = () => {
        setOpenCatModal(prev => !prev)
    }
    const trim = (word) => {
    	return word.replace(/ /g,'')
  	}
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)
  return (
      <section className="head_section">
      <Head>
        <title>Wave | Shop the {params[1]} and Accessories</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        {openCatModal && <All />}
        <Header setOpenCatModal={setOpenCatModal} handleAll={handleAll} />
      <div className="main_grid">
          <span className="col-span-8 flex-col gap-y-2">
            <p className="text-4xl font-extrabold text-black">{params[1]} and Accessories</p>
            <p className="text-sm font-light text-slate-700">Televisions, Home Theaters & Speakers, Projectors, Cameras at great prices and top brands from the sellers around Nairobi.</p>
          </span>
          <span className="col-span-4 ">
            <img src="https://imgs.search.brave.com/XOEkwdkYvviWKxrblIoKHMMK2hHlMfXqHNZgTiW2MqI/rs:fit:579:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/MHBtcG9ZNWdWal9v/NENLLUxEbW5BSGFH/RSZwaWQ9QXBp" alt="smart_phones" className="object-fit w-1/2 h-1/5" />
          </span> 
        </div>
        <div className="cat_grid_div">
          {smartphones.map(item => (
            <div onClick={() => router.push(`/smartphones/${trim(item.name).toLowerCase()}`)} key={item.id} className="main_grid_div">
              <span className="h-28 w-28 relative">
                    <Image src={item.img} alt="alt_image" layout="fill" className="img_tag object-contain"/>
                </span>
              <p className="text-sm text-gray-800 font-bold">{item.name}</p>
            </div>))}
        </div>
        <Smartphones smartphone={smartphone}/>
      </main>
      <Footer />
    </section>
  )
}
export async function getServerSideProps(context) {
    // const { id } = params
    const smartphone = await axios("http://localhost:8000/api/product/fetchAll?subcategory=Smartphones").then((res) => res.data)
    // const topBrands = await axios("http://localhost:8000/api/product/fetchAll").then((res) => res.data)
    return {
        props: {
            smartphone: smartphone.data,
            // topBrands
        }
    }
}
export default Index