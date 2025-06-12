"use client"
import React, { useState } from 'react'
import Cart from '../components/cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const acBrands = [
    { category: "LG Air Conditioner" },
    { category: "Lloyd Air Conditioner" },
    { category: "Voltas Air Conditioner" },
    { category: "Samsung Air Conditioner" },
    { category: "Hitachi Air Conditioner" },
    { category: "Carrier Air Conditioner" },
    { category: "Daikin Air Conditioner" },
    { category: "O General Air Conditioner" },
    { category: "Blue Star Air Conditioner" },
    { category: "Whirlpool Air Conditioner" },
    { category: "Panasonic Air Conditioner" },
    { category: "Onida Air Conditioner" },
    { category: "Haier Air Conditioner" },
    { category: "Godrej Air Conditioner" },
    { category: "Duct Air Conditioning" },
    { category: "Portable Air Conditioning" },
    { category: "Central Air Conditioner" },
    { category: "Smart Air Conditioner" }
];

const products = [
    {
        productId: 1,
        productName: "Arctic Breeze 12000 BTU Window Air Conditioner",
        productInfo: "Powerful cooling solution designed for medium-sized rooms up to 550 sq. ft. It offers three cooling modes (cool, dry, fan) and three fan speeds (low, medium, high), allowing you to customize your comfort.",
        productPrice: "800",
        productType: "window",
    },
    {
        productId: 2,
        productName: "CoolMaster 1.5 Ton Split AC",
        productInfo: "High-efficiency split AC with inverter technology for energy savings and silent operation. Suitable for rooms up to 180 sq. ft.",
        productPrice: "34000",
        productType: "split",
    },
    {
        productId: 3,
        productName: "BreezeFlow Window AC 1 Ton",
        productInfo: "Compact and budget-friendly window AC ideal for small bedrooms or offices. Includes auto restart and anti-bacterial filter.",
        productPrice: "22000",
        productType: "window",
    },
    {
        productId: 4,
        productName: "GlacierPro 2 Ton Split Inverter AC",
        productInfo: "Heavy-duty AC built for large rooms or halls. Features dual inverter compressor and 4-way swing for uniform cooling.",
        productPrice: "48000",
        productType: "split",
    },
    {
        productId: 5,
        productName: "AirSense 1.2 Ton Window AC",
        productInfo: "Reliable window AC with copper condenser and turbo cooling mode for quick relief from summer heat.",
        productPrice: "26000",
        productType: "window",
    },
    {
        productId: 6,
        productName: "ChillMate 1.5 Ton 3-Star Split AC",
        productInfo: "Efficient and durable split AC with 3-star rating for optimized power usage. Features include PM2.5 filter and auto clean.",
        productPrice: "31000",
        productType: "split",
    },
    {
        productId: 7,
        productName: "FrostWind Window AC 1.5 Ton",
        productInfo: "Robust and economical window air conditioner with advanced airflow technology and low-noise operation.",
        productPrice: "27000",
        productType: "window",
    },
];

function page() {
    const [brandOpen, setbrandOpen] = useState(false);
    const [product, setProduct] = useState(products);
    const [priceSort, setPriceSort] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    const sortHighToLow = () => {
        const sorted = [...product].sort((a, b) => b.productPrice - a.productPrice);
        setProduct(sorted);
    };

    const SortLowTOHigh = () => {
        const sortedd = [...product].sort((a, b) => a.productPrice - b.productPrice);
        setProduct(sortedd);
    };

    const filterSplit = () => {
        const filtered = products.filter(product => product.productType === "split");
        setProduct(filtered);
    }

    const filterWindow = () => {
        const filtered = products.filter(product => product.productType === "window");
        setProduct(filtered);
    }

    const resetFilter = () => {
        setProduct(products);
        setPriceSort("");
        setTypeFilter("");
    }

    return (
        <div className='py-4 px-12 flex-row flex '>
            <div className='w-1/5 shadow-md bg-white rounded-2xl flex flex-col p-4'>
                <div className='flex justify-between items-start w-full'>
                    <h2 className='mb-2 '><b>Air Conditioners</b></h2>
                    <span className='text-gray-500'><b>{`${'>'}`}</b></span>
                </div>
                <div className='flex flex-col p-2 gap-3'>
                    <h2 className='text-gray-500' onClick={() => setbrandOpen(brandOpen)}>Brands</h2>
                    <div className={`transition-all flex-col flex gap-2 rounded-xl bg-gray-200 p-2 duration-300 ${brandOpen ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'} overflow-auto`}>
                        {acBrands.map((brands, index) => (
                            <div key={index} className='' >
                                <button className='bg-purple-100 hover:-translate-y-0.5 hover:bg-blue-500 hover:text-white text-black border-1 border-blue-600 rounded-2xl p-2 w-full text-xs'>{brands.category}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='px-4 w-[55%]'>
                <div className='mb-2'><h2 className='text-xl mb-2'><b>Air Conditioners</b></h2>
                    <span className='text-gray-400 '>Discover our wide range of cooling solutions for your home or office</span></div>
                <div className='bg-white rounded-2xl px-4 py-2'>
                    <div className='flex justify-between mb-3'>
                        <span className='text-xs'><b>Sort By</b></span>
                        <span className='text-xs text-gray-600'>Showing {product.length} products</span>
                    </div>

                   <div className='flex justify-between items-center'>
                     <div className='flex flex-row gap-2'>
                        <select
                            value={priceSort} 
                            onChange={(e) => {
                                const value = e.target.value;
                                setPriceSort(value);
                                if (value === "highToLow") sortHighToLow();
                                if (value === "lowToHigh") SortLowTOHigh();
                            }}
                            className='bg-blue-200 hover:bg-blue-400 hover:text-white text-blue-700 text-xs rounded-xl p-2'
                        >
                            <option value="">Price Range</option>
                            <option value="highToLow">High To Low</option>
                            <option value="lowToHigh">Low To High</option>
                        </select>

                         <select
                            value={typeFilter} 
                            onChange={(e) => {
                                const value = e.target.value;
                                setTypeFilter(value);
                                if (value === "Window") filterWindow();
                                if (value === "split") filterSplit();
                            }}
                            className='bg-blue-200 hover:bg-blue-400 hover:text-white text-blue-700 text-xs rounded-xl p-2'
                        >
                            <option value="">Type</option>
                            <option value="Window">Window Ac</option>
                            <option value="split">Split Ac</option>
                        </select>

                        <button className='bg-blue-200 text-blue-700   hover:bg-blue-400 hover:text-white  text-xs rounded-xl p-2'>Capacity</button></div>

                        <button onClick={resetFilter} className='bg-blue-200 text-blue-700   hover:bg-blue-400 hover:text-white  text-xs rounded-xl p-2'>Reset Filter</button>

                   </div>
                </div>
                <div className='px-4 pt-4'>
                 
                    <div className='grid grid-cols-2 gap-4'>
                        {product.map((product) => (
                            <div key={product.productId} className=' group w-80 flex flex-col justify-between gap-4 relative  hover:-translate-y-0.5 hover:shadow-md bg-white rounded-2xl'>
                                <img src={'/assets/images/acCareCool.jpeg'} alt="product img" className='h-40 rounded-xl bg-blue-200' />
                                <span className='bg-blue-50 text-xs text-blue-600 rounded-lg py-1 px-2 absolute top-1.5 right-4  opacity-0 group-hover:opacity-100 '>
                                    {/* eye */}
                                    <FontAwesomeIcon icon={faEye} />
                                </span>
                                <div className='flex flex-col p-2'>
                                    <h2 className='mb-2'>{product.productName}</h2>
                                    {/* <span className='text-gray-400 text-xs mb-2'>{product.productInfo}</span> */}
                                    <div className='flex justify-between'>
                                        <span className='text-green-400 text-xs mb-2'>Reviews 1.5K</span>
                                    <span className='text-blue-600 mb-2'> Price: ₹{product.productPrice}</span>
                                    </div>

                                    <div className='flex gap-2 mb-4'>
                                        <span className='bg-blue-50 text-xs text-blue-600 rounded-lg py-1 px-2'>
                                            5 star Rating
                                        </span>

                                          <span className='bg-green-50 text-xs text-green-600 rounded-lg py-1 px-2'>
                                           Low Power
                                        </span>

                                          <span className='bg-purple-50 text-xs text-purple-600 rounded-lg py-1 px-2'>
                                           Smart Control
                                        </span>
                                    </div>

                                    <button className='bg-blue-600 mb-2 text-white rounded-2xl p-2 w-full hover:-translate-y-0.5 '>View</button>
                                </div>
                            </div>
                        ))}  

                    </div>
                </div>

            </div>
            <div className='w-1/4 bg-white rounded-2xl h-48 sticky top-0 p-4'>
                <Cart />

            </div>
        </div>
    )
}

export default page