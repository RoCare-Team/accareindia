'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


function ServiceSection() {

    const [showAllServices, setShowAllServices] = useState(false);
    const urlPath = usePathname();


    const careServices = [
        {
            id: 1,
            serviceImg: '/assets/images/servicesImages/ac.png',
            serviceHeading: 'Jet foam AC service (Window)',
            servicePrice: '₹ 499/-',
            serviceInfo: 'Quick and reliable repair services for all your home needs.',
            // serviceList:[
            //     {  
            //     // for future purposes
            //     }
            // ],
            serviceUrl: 'ac',
            serviceReview:'3.5 K',
        },
        {
            id: 2,
            serviceImg: '/assets/images/acCareCool.jpeg',
            serviceHeading: 'Jet foam AC service (Window)',
            servicePrice: '₹ 499/-',
            serviceInfo: 'Quick and reliable repair services for all your home needs.',
            // serviceList:[
            //     {  
            //     // for future purposes
            //     }
            // ],
            serviceUrl: 'ac',
            serviceReview:'3.5 K',
        },
        {
            id: 3,
            serviceImg: '/assets/images/acCareImg.jpeg',
            serviceHeading: 'Jet foam AC service (Window)',
            servicePrice: '₹ 499/-',
            serviceInfo: 'Quick and reliable repair services for all your home needs.',
            // serviceList:[
            //     {  
            //     // for future purposes
            //     }
            // ],
            serviceUrl: 'ac',
            serviceReview:'3.5 K',
        },
        {
            id: 4,
            serviceImg: '/assets/images/servicesImages/ac.png',
            serviceHeading: 'Jet foam AC service (Window)',
            servicePrice: '₹ 499/-',
            serviceInfo: 'Quick and reliable repair services for all your home needs.',
            // serviceList:[
            //     {  
            //     // for future purposes
            //     }
            // ],
            serviceUrl: 'ac',
            serviceReview:'3.5 K',
        },
       
    ]

    // Toggle function to show/hide all services
    // const toggleAllServices = (e) => {
    //     e.preventDefault();
    //     setShowAllServices(!showAllServices);
    // };

    return (
        <div className=" common-spacing">
            <h3 className="text-3xl mb-1.5 text-center text-black "><b>Explore Our Services</b></h3>
            {/* <button onClick={handleApi}>apii call</button> */}
            <h5 className="text-gray-600 text-center mb-5">We offer a comprehensive range of home services to keep your property in perfect condition. <br /> Choose the service you need or contact us for custom solutions.</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 servicesHero">
                {careServices.map((service) => (
                    <div className="bg-white h-70 shadow-md rounded-xl hover:-translate-y-0.5  hover:shadow-blue-100" key={service.id}>
                        <div className="w-full">
                            <img src={service.serviceImg} className="h-38 w-full rounded-t-md  bg-gray-300 "></img>
                        </div>
                        <div className="md:p-5 p-2 flex items-start justify-center flex-col  md:gap-3">
                            <div className="flex flex-row justify-between items-center w-full">
                                <h2 className="text-black  text-xs md:text-sm">{service.serviceHeading}</h2>
                                <span className="serivceReview-style"><b>{service.serviceReview} Reviews</b></span>
                            </div>
                            <h5 className="text-gray-500 text-wrap p-0 text-xs md:text-sm md:pr-10">{service.serviceInfo}</h5>
                            <div className="flex flex-row justify-between items-center w-full">
                                <a href={`/${service.serviceUrl}`} className="learn-more-link text-xs md:text-sm">View Service</a>
                                <span className="text-gray-500 text-xs md:text-sm">{service.servicePrice}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="text-center mt-4 mb-4 ">
                <button
                    className="text-white  view-btn-style font-medium px-4 py-2 border border-blue-300  hover:bg-blue-600 bg-blue-500 "
                    // onClick={toggleAllServices}
                >
                    { "Explore Our Services"}
                </button>
            </div>
        </div>
    );
}

export default ServiceSection;