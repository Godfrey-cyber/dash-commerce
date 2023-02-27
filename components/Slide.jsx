import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { slide } from "../utiles/data"
import Image from "next/image"

const Slide = ({ slide }) => {
    const [current, setCurrent] = useState(0)
    const length = slide?.length
    if(!Array.isArray(slide) || slide.lengh <= 0) {
        return null
    }
    // next Slide
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    // prev Slide
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)
    
  return (
      <section className="grid grid-cols-12 h-min-h-fit lg:h-[400px] w-full sm:gap-x-4 gap-y-4 sm:px-20 px-2">
          <div className="col-span-12 sm:col-span-9 bg-white flex w-full relative h-full overflow-hidden my-4 rounded-md shadow-sm">
              {/* <div className="relative flex"> */}
              {slide.map((item, index) => (
                  <div key={index} className="">
                        {index === current && (
                        <div className={index === current ? "slide active" : "slide"}>
                            <ArrowLeftIcon className="arrow_left" onClick={prevSlide} />
                            <div className="flex flex-col space-y-3 md:space-y-6">
                                <span className="flex flex-col space-x-1">
                                    <h4 className="text-lg md:text-xl lg:text-6xl font-semibold lg:font-extrabold text-black">{item.name}</h4>
                                    <p className="text-sm font-bold text-gray-700 ">{item.text}</p>
                                </span>
                                <button className="bg-white border border-orange-600 text-sm lg:text-xl lg:w-1/5 rounded-md py-1 lg:py-2">{item.btn_text}</button>
                            </div>
                            <span className="h-32 lg:h-56 h-20 w-32 lg:w-56 relative">
                                <Image className=" object-fit" layout="fill" src={item.img} alt="img-Watch" />
                            </span>
                            <ArrowRightIcon className="arrow_right" onClick={nextSlide} />
                        </div>
                      )}
                </div>
              ))}
          </div>
          {/*  */}
          <div className="col-span-12 sm:col-span-3 flex py-3 my-4 flex-col space-y-2 px-4 w-full h-full rounded-md shadow-sm bg-white">
              <span className="flex items-center justify-between">
                  <img src="https://ke.jumia.is/cms/2022/W29/HP/Thumbnails2/Clearance-sale.png" alt="slide_image" className="h-12 w-12 rounded-sm" />
                    <p className="text-sm font-bold text-gray-700">Lorem ipsum dolor sit amet.</p>
              </span>
              <span className="flex items-center justify-between">
                  <img src="https://ke.jumia.is/cms/2022/W29/HP/Thumbnails2/Clearance-sale.png" alt="slide_image" className="h-12 w-12 rounded-sm" />
                    <p className="text-sm font-bold text-gray-700">Lorem ipsum dolor sit amet.</p>
              </span>
              <span className="flex items-center justify-between">
                  <img src="https://ke.jumia.is/cms/2022/W29/HP/Thumbnails2/Clearance-sale.png" alt="slide_image" className="h-12 w-12 rounded-sm" />
                    <p className="text-sm font-bold text-gray-700">Lorem ipsum dolor sit amet.</p>
              </span>
          </div>
    </section>
  )
}

export default Slide