import React from 'react'
import { addToCart } from "../slices/cartSlice"
import { useDispatch } from "react-redux"
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router"
import Image from "next/image"

const Product = ({ photo, title, disc, desc, id, price, name }) => {
	const dispatch = useDispatch()
	const router = useRouter()
  	// const addItemToCart = () => {
  	// 	// const product = { photo, title, disc, id, price, title, disc }
   //  	dispatch(addToCart({ photo, title, disc, id, price, title, disc }))
  	// }
  	const truncate = (str, len) => {
        return str.substring(0, (str + ' ').lastIndexOf(' ', len))
	};
	return (
		<div onClick={() => router.push(`/product/${id}`)} className="product_span">
	        {disc ? <span className="disc_span">-{disc}%</span> : null}
		    <span className="like_span">
		        <HeartIcon className="h-6 text-orange-500" />
		    </span>
	        <span className="h-32 lg:h-56 h-20 w-32 lg:w-56 relative">
	        	<Image src={photo} alt="alt_image" layout="fill" className="img_tag object-contain"/>
	        </span>
	        <p title={title} className="text-sm font-semibold text-gray-800 truncate">{title}</p>
	        <span className="flex items-center justify-between">
	            <p className="text-sm font-bold text-gray-700">KSH. {price}</p>
	            <ShoppingCartIcon className="h-6 text-orange-500 cursor-pointer" />
	    	</span>
	    </div>
	)
}

export default Product