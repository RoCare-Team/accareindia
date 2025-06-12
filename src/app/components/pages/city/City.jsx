
import Tabs from "@/app/components/pages/Services/AllServices";
import Assurance from "@/app/components/Assurance/Assurance";
import ServiceProcedure from '@/app/components/serviceProcedure/index';
import AllServicesList from "@/app/components/pages/Services/Services";
import ServicesList from "@/app/components/service/ServicesList";
import HomeCareService from "../../servicesSection/homeCareService";
import ServiceSection from "../../servicesSection/servicesSection";



const City = ({ city, cityData }) => {

    // console.log("test" + JSON.stringify(cityData));

    if (cityData.status === "1")
        return (
            <div>
                <div className="services-page common-spacing">

                    <div className="left-side lg:w-1/4 flex-col mb-1.5">
                        <div className="sticky top-20">
                            <h1 className="cityHeadings">Most Loved Services by Our Customers!</h1>
                            <div className=" mb-3 mobileBanner">
                                <img src="/assets/cityBanner/Front Banner.webp" alt='All Services in india' title="All Services in india" width={475} height={345} style={{
                                    borderRadius: '17px', width: '100%'
                                }} /></div>
                            <Tabs />
                        </div>
                    </div>
                    <div className="right-side lg:w-3/4">
                        <div className="rightSidePortion justify-center">
                            <div className="lg:w-1/2">
                                <h2 className="ml-2.5 mt-1.5 text-3xl">Services All Over {cityData?.city_name}</h2>
                                <div className="mb-3.5 flex items-center justify-center desktopBanner ">
                                    <img src="/assets/cityBanner/Front Banner.webp" alt='All Services in india' title={`Our Services in ${cityData?.city_name}`} width={475} height="auto" style={{
                                        borderRadius: '17px', width: '100%',
                                    }} />

                                </div>
                                <AllServicesList />
                            </div>
                            <div className="lg:w-5/12 cartContainer">
                                <div className="cart-body-section">

                                    <Assurance />
                                    <ServiceProcedure />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="common-spacing">
                    {/* <ServiceSection/> */}
                    <HomeCareService />
                </div>
                <div className="common-spacing">
                    <div className=" bg-white aboutStyle">
                        <h3 className="catgoreyTitle">ABOUT MR. SERVICE EXPERT {cityData.city_name}</h3>
                        <p className="catgoreyContent">{cityData?.city_detail?.city_content}</p>
                    </div>
                </div>
                <div className="bg-white common-spacing">
                    <h3 className="catgoreyTitle">Popular City in India</h3>
                    <div className="brandsServices flex items-center flex-wrap gap-2.5 ">
                        {cityData.recent_cities?.map((city) => (
                            <div className='brandsServices '>
                                <a href={`${city.city_url}`} title={`${city.city_url}`}>
                                    <li className='brand-btn-style'>
                                        {city.city_name}
                                        <span></span>
                                    </li>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        );
    else
        return (
            <div>
                <div className="flex flex-col lg:flex-row  bg-gray-200 common-spacing ">
                    <div className="lg:w-1/4 w-full bg-white shadow-md p-4 rounded-2xl">
                        <div className="sticky top-20">
                            <h3 className="cityHeadings">Most Loved Services by Our Customers!</h3>
                            <div className="mobileBanner mb-3   ">
                                
                                <img src={`/assets/categorybanner/${cityData.catbanner}`} alt={`${cityData?.categorydetail?.category_name}`} title={`${cityData?.categorydetail?.category_name}`} width={475} height={345} style={{
                                    borderRadius: '17px', width: '100%'
                                }}
                                />
                            </div>
                            <Tabs cat={city} />
                        </div>
                    </div>
                    <div className="lg:w-3/4 w-full ">
                        <div className="px-1 flex lg:flex-row flex-col justify-center">
                            <div className=" md:w-3xl w-full px-2">

                                <div className=" desktopBanner mb-3.5 h-64 w-full rounded-2xl flex items-center justify-center cat-service-style">
                                    {/* <img src={`/assets/categorybanner/${cityData.catbanner}`} alt={`${cityData?.categorydetail?.category_name}`} title={`${cityData?.categorydetail?.category_name}`} width={475} height={345}
                                        className="h-64 w-full rounded-2xl"
                                    /> */}
                                    
                                  
                                </div>
                                <h2 className="ml-2.5 mt-1.5 text-2xl"><b>{cityData?.categorydetail?.category_name}</b></h2>


                                <ServicesList category={city} status={cityData.status} />
                            </div>
                            <div className=" cartContainer">
                                <div className="cart-body-section">

                                    <Assurance />
                                    <ServiceProcedure />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="common-spacing">
                    <div className=" bg-white aboutStyle">
                        <h3 className="catgoreyTitle">ABOUT AC Care India {cityData.city_name}</h3>
                        <div dangerouslySetInnerHTML={{ __html: cityData?.categorydetail?.category_content }} className="serviceContentStyle" />
                    </div>
                </div>
                {/* <div className="bg-white common-spacing">
                    <h3 className="catgoreyTitle">Popular Brands of {cityData?.categorydetail?.category_name}</h3>
                    <div className="brandsServices flex items-center flex-wrap gap-2.5 ">
                        {cityData.brands?.map((city) => (
                            // brands
                            <div className='brandsServices '>
                                <a href={`/${city.city_name}/${city.brand_url}`}>
                                    <li className='brand-btn-style'>
                                        {city.brand_name}
                                        <span></span>
                                    </li>
                                </a>
                            </div>
                        ))}
                    </div>
                </div> */}


            </div>

        );

};

export default City;