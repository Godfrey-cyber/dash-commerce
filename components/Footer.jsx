import React from "react"

const Footer = () => {
    return (
        <section className="grid grid-cols-12 gap-x-4 md:gap-x-4 mx-auto bg-gray-800 mt-6 max-h-fit min-h-fit px-4 w-full lg:px-20 py-4 lg:py-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 flex-col space-y-3">
                <h3 className="lg:text-xl text-lg font-semibold lg:font-bold text-white my-3">COMPANY</h3>
                <span className="flex-col space-y-2 text-sm font-light">
                    <h3 className="footer_col">About Us</h3>
                    <h3 className="footer_col">Sell on Wave</h3>
                    <h3 className="footer_col">Our profile</h3>
                    <h3 className="footer_col">Track Orders</h3>
                </span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 flex-col space-y-3">
                <h3 className="lg:text-xl text-lg font-semibold lg:font-bold text-white my-3">CONTACT US</h3>
                <span className="flex-col space-y-2 text-sm font-light">
                    <h3 className="footer_col">About Us</h3>
                    <h3 className="footer_col">Sell on Wave</h3>
                    <h3 className="footer_col">Our profile</h3>
                    <h3 className="footer_col">Track Orders</h3>
                </span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 flex-col space-y-3">
                <h3 className="lg:text-xl text-lg font-semibold lg:font-bold text-white my-3">EASY SHOPPING</h3>
                <span className="flex-col space-y-2 text-sm font-light">
                    <h3 className="footer_col">About Us</h3>
                    <h3 className="footer_col">Sell on Wave</h3>
                    <h3 className="footer_col">Our profile</h3>
                    <h3 className="footer_col">Track Orders</h3>
                </span>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 flex-col space-y-3">
                <h3 className="lg:text-xl text-lg font-semibold lg:font-bold text-white my-3">FOLLOW US</h3>
                <span className="flex-col space-y-2 text-sm font-light">
                    <h3 className="footer_col">About Us</h3>
                    <h3 className="footer_col">Sell on Wave</h3>
                    <h3 className="footer_col">Our profile</h3>
                    <h3 className="footer_col">Track Orders</h3>
                </span>
            </div>
        </section>
    )
}

export default Footer