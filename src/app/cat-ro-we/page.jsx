"use client"

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AllServices from '../components/pages/Services/AllServices'

const serviceTab = [{
    id: 1,
    serviceName: 'Ac  installation',
},

{
    id: 2,
    serviceName: 'Ac  unstallation',
},
{
    id: 3,
    serviceName: 'Amc Plans',
}
]

export default function page() {
    return (
        <div className='common-spacing bg-gray-200'>
            {/*New Desgin for the service page */}
            <div className='flex'>
                <div className="serviceLeftBody  w-1/3 bg-white shadow-md p-4 rounded-2xl">
                    <h1 className='mb-6'><b>Most Loved Services by Our Customers!</b></h1>
                    {/*service tab area*/}
                    <div className="flex  gap-3 flex-wrap justify-evenly items-start">
                        {serviceTab.map((subservice) => (
                            <div key={subservice.id} >
                                <button className='bg-gray-100  p-1   focus:bg-blue-200 focus:text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100 rounded-xl hover:text-blue-600'>{subservice.serviceName}</button>
                            </div>
                        ))}
                    </div>
                    <div>
                        {/* <AllServices/> */}
                        <h3 className='text-gray-400'>other related services </h3>

                       <div className='flex flex-wrap gap-2'>
                         <span className='bg-gray-100  p-1   focus:bg-blue-200 focus:text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100 rounded-xl hover:text-blue-600'>Ac services</span>

                         <span className='bg-gray-100  p-1   focus:bg-blue-200 focus:text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100 rounded-xl hover:text-blue-600'>Ac Spare parts services</span>

                          <span className='bg-gray-100  p-1   focus:bg-blue-200 focus:text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100 rounded-xl hover:text-blue-600'>Refrigerator services</span>
                       </div>

                    </div>

                </div>
                <div className=" px-6 serviceRightBody">
                    {/*all the service list and banner will be here and the cart thing will be here */}

                    <div className="w-3xl ">
                        {/* <img src="/assests/images/no-photos.webp" alt="no image" className='bg-gray-300 h-64 rounded-2xl ' /> */}
                        <div className='cat-service-style h-64 rounded-2xl '>

                        </div>
                        {/* Banner image */}

                        <div className='py-6 '>
                            <h3 className='mb-4'><b>Popular Services</b></h3>
                            <div>
                                {/*sub related servicww*/}

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="new-service-car p-6 rounded-2xl flex  shadow-md hover:-translate-y-0.5  flex-col gap-4 bg-white">

                                        <div className='flex items-center gap-2'>
                                            <div className='bg-blue-100 rounded-xl p-0.5'>
                                                <img src="/assets/images/ro-service/ro amc.webp" alt="icons" className='w-10 h-auto bg-blue-100 rounded-xl' />
                                            </div>
                                            <h3><b>RO Repair Service</b></h3>

                                        </div>

                                        <div className='flex gap-4'>
                                            <span>₹ 399</span>
                                            <span className='line-through text-gray-400'>₹ 499</span>
                                        </div>
                                        <div className='flex flex-row  gap-4 items-center'>
                                            <div>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>

                                            </div>
                                            <span className='line-through text-gray-400 text-xs'><b>4.8 (2.4k reviews)</b> </span>
                                        </div>
                                        <div className='w-full'>
                                            <button className='p-2 w-full bg-blue-600 border-1  rounded-xl border-blue-600 text-white hover:-translate-y-0.5  focus:bg-blue-700'>Add</button>
                                        </div>
                                    </div>

                                    <div className="new-service-car p-6 rounded-2xl flex  shadow-md hover:-translate-y-0.5  flex-col gap-4 bg-white">

                                        <div className='flex items-center gap-2'>
                                            <div className='bg-blue-100 rounded-xl p-0.5'>
                                                <img src="/assets/images/ro-service/ro amc.webp" alt="icons" className='w-10 h-auto bg-blue-100 rounded-xl' />
                                            </div>

                                            <h3><b>RO Repair Service</b></h3>

                                        </div>

                                        <div className='flex gap-4'>
                                            <span>₹ 399</span>
                                            <span className='line-through text-gray-400'>₹ 499</span>
                                        </div>
                                        <div className='flex flex-row  gap-4 items-center'>
                                            <div>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>

                                            </div>
                                            <span className='line-through text-gray-400 text-xs'><b>4.8 (2.4k reviews)</b> </span>
                                        </div>
                                        <div className='w-full'>
                                            <button className='p-2 w-full bg-blue-600 border-1  rounded-xl border-blue-600 text-white hover:-translate-y-0.5  focus:bg-blue-700'>Add</button>
                                        </div>
                                    </div>


                                    <div className="new-service-car p-6 rounded-2xl flex  shadow-md hover:-translate-y-0.5  flex-col gap-4 bg-white">

                                        <div className='flex items-center gap-2'>
                                            <div className='bg-blue-100 rounded-xl p-0.5'>
                                                <img src="/assets/images/ro-service/ro amc.webp" alt="icons" className='w-10 h-auto bg-blue-100 rounded-xl' />
                                            </div>
                                            <h3><b>RO Repair Service</b></h3>

                                        </div>

                                        <div className='flex gap-4'>
                                            <span>₹ 399</span>
                                            <span className='line-through text-gray-400'>₹ 499</span>
                                        </div>
                                        <div className='flex flex-row  gap-4 items-center'>
                                            <div>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>

                                            </div>
                                            <span className='line-through text-gray-400 text-xs'><b>4.8 (2.4k reviews)</b> </span>
                                        </div>
                                        <div className='w-full'>
                                            <button className='p-2 w-full bg-blue-600 border-1  rounded-xl border-blue-600 text-white hover:-translate-y-0.5  focus:bg-blue-700'>Add</button>
                                        </div>
                                    </div>



                                    <div className="new-service-car p-6 rounded-2xl flex  shadow-md hover:-translate-y-0.5  flex-col gap-4 bg-white">

                                        <div className='flex items-center gap-2'>
                                            <div className='bg-blue-100 rounded-xl p-0.5'>
                                                <img src="/assets/images/ro-service/ro amc.webp" alt="icons" className='w-10 h-auto bg-blue-100 rounded-xl' />
                                            </div>

                                            <h3><b>RO Repair Service</b></h3>

                                        </div>

                                        <div className='flex gap-4'>
                                            <span>₹ 399</span>
                                            <span className='line-through text-gray-400'>₹ 499</span>
                                        </div>
                                        <div className='flex flex-row  gap-4 items-center'>
                                            <div>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                                <span className='text-2xs text-yellow-300'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>

                                            </div>
                                            <span className='line-through text-gray-400 text-xs'><b>4.8 (2.4k reviews)</b> </span>
                                        </div>
                                        <div className='w-full'>
                                            <button className='p-2 w-full bg-blue-600 border-1  rounded-xl border-blue-600 text-white hover:-translate-y-0.5  focus:bg-blue-700'>Add</button>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="cart-body-container">
                    <div className="cart-border flex flex-col gap-1.5  p-4 shadow-md bg-white w-80 rounded-2xl">
                        <h3 className=''><b>Your Cart</b></h3>
                        <div className=' flex flex-col border-1  items-start justify-start gap-2 rounded-xl border-blue-400 px-3 py-2'>
                            <h2 className=''><b>RO Service & Maintenance</b></h2>

                            <div className='flex justify-between flex-row w-full items-start'>
                                <span className='text-blue-400'>Price: ₹499</span>
                                <button className='text-red-500 w-5 rounded-md h-6 hover:bg-red-300 '>x</button>
                            </div>
                            <div className="quantity-control">
                                <button className="IncrementDcrementBtn">
                                    -
                                </button>
                                <span> 1</span>
                                <button className="IncrementDcrementBtn" >
                                    +
                                </button>
                            </div>




                        </div>

                        <div className='border-t-1 w-full border-gray-400 '>
                            <div className='flex flex-row justify-between'>
                                <span className='text-gray-400'>Subtotal</span>
                                <span className='text-gray-400 '>₹499</span>
                            </div>

                            <div className='flex flex-row justify-between'>
                                <span className='text-gray-400 '>service fee</span>
                                <span className='text-gray-400'>₹0</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <span ><b>Total</b></span>
                                <span>₹499</span>
                            </div>
                            <div >
                                <button>Checkout</button>
                            </div>
                            {/* Subtotal


₹499
Service Fee
₹0
Total
₹499 */}
                        </div>



                    </div>
                </div>

            </div>
        </div>
    )
}
