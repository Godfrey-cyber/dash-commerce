import React from 'react'

const FiltersCat = () => {
  return (
      <div className="col-span-4 flex-col space-y-4 rounded-sm bg-white overflow-y-scroll p-3">
          <h3 className="text-lg text-gray-700 py-2 border-b-2 border-gray-300">Category</h3>
          <span className="flex flex-col space-y-1">
            <p className="text-sm text-gray-700 ">Electronics</p>
            <p className="text-sm text-gray-700 ">Laptops</p>
            <p className="text-sm text-gray-700 ">Smartphones</p>
            <p className="text-sm text-gray-700 ">Appliaces</p>
            <p className="text-sm text-gray-700 ">Fashion</p>
          </span>
    </div >
  )
}

export default FiltersCat