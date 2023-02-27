import React, { useState } from 'react'
import All from "./All"
import { ShoppingCartIcon, MagnifyingGlassIcon, ChevronDownIcon, Bars3BottomLeftIcon, UserCircleIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/cartSlice"
import { useDispatch } from "react-redux"
// import { selectItems } from "."

const Header = ({ handleAll }) => {
  const items = useSelector(selectItems)
  const qty = useSelector(state => state.cart.quantity)
  console.log({items})
  console.log({qty})
  const dispatch = useDispatch()
    const router = useRouter()
  return (
      <div className="header_div">
          {/* logo */}
        <div className="flex space-x-4 items-center">
            <span className="flex md:hidden">
                <Bars3BottomLeftIcon className="h-8 text-grey-300" />
            </span>
            <span onClick={() => router.push("/")} className="font-bold cursor-pointer text-2xl">Wave</span>
        </div>
          {/* search input */}
        <form action="" className="form">
            <span onClick={handleAll} className="form_span_1">
              <p className="text-sm text-white font-semibold cursor-pointer">All</p>
              <ChevronDownIcon className="h-4 text-white"/>
            </span>
            <input type="text" className="form_input" placeholder="Search products" />
            <span className="form_span_2">
                <MagnifyingGlassIcon className="h-6 text-white"/>
            </span>
        </form>
          {/* Sign in & orders */}
        <div className="flex space-x-4 items-center">
            <span onClick={() => router.push("/login")} className="hidden lg:flex flex-col">
                <p className="text-xs form_text">Hello, sign in</p>
                <p className="text-sm form_text">My Account</p>
            </span>
            <UserCircleIcon className="lg:hidden h-8 text-grey-300" />
        {/*my orders*/}
            <span className="hidden lg:flex flex-col space-y-1">
                <p className="text-sm form_text">My Orders</p>
            </span>
            <ArchiveBoxArrowDownIcon className="lg:hidden h-8 text-grey-300" />
        {/*cart*/}
            <span onClick={() => router.push("/cart")} className="cursor-pointer relative">
                <ShoppingCartIcon className="h-6 grey-300"/>
                <span className="cart">{ items?.length > 9 ? "9+" : items?.length }</span>
            </span>
        </div>
    </div>
  )
}

export default Header
// Satan will never be given permission to destroy the saints.
// Rather, he is limited to sifting us “like wheat.” The good news
// is that God knows there is wheat inside each of us. The outcome
// of this type of satanic assault, which is allowed through the
// permissive will of God, is to cleanse the soul of pride and
// produce greater meekness and transparency in our lives. It may
// feel terrible, but God causes it to work for good. Our husk-like
// outer nature must die to facilitate the breaking forth of the
// wheat-like nature of the new creation man. Both the chaff and
// the husk were necessary; they provided protection for us from
// the harsh elements of this life. But before God can truly use us,
// in one way or another we will pass through a time of threshing