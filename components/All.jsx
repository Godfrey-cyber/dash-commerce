import React from 'react'

const All = () => {
  
  return (
      <div className="flex flex-col relative inset-x-0 inset-y-0 bg-orange-900">
          <div className="flex flex-col bg-white shadow-gray-300 fixed shadow-md rounded-sm top-16 left-12 lg:right-48 z-50 max-w-[200px] group py-3">
              <p className="cat_items group:text-orange-600">Electronics</p>
              <p className="cat_items group:text-orange-600">Health & Beauty</p>
              <p className="cat_items group:text-orange-600">Home & Office</p>
              <p className="cat_items group:text-orange-600">Appliances</p>
              <p className="cat_items group:text-orange-600">Phones & Tablets</p>
              <p className="cat_items group:text-orange-600">Tvs & Audio</p>
              <p className="cat_items group:text-orange-600">FAshion</p>
              <p className="cat_items group:text-orange-600">Gaming</p>
              <p className="cat_items group:text-orange-600">Baby Products</p>
              <p className="cat_items group:text-orange-600">Sporting Goods</p>
          </div>
    </div>
  )
}

export default All