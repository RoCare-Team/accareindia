'use client'

import React from 'react';

import ServiceSection from '../app/components/servicesSection/servicesSection';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';





const Home = () => {
  const locationRef = useRef(null);
  const serviceRef = useRef(null);
  const router = useRouter();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mr Service Expert",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.mrserviceexpert.com/assets/images/serviceLogo.webp"
    },
    "url": "https://www.mrserviceexpert.com",
    "telephone": "+91-9311587744",
    "email": "info@mrserviceexpert.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8th Floor, Head Office, JMD MEGAPOLIS, Sector 48",
      "addressLocality": "Gurgaon",
      "postalCode": "122008",
      "addressRegion": "Haryana",
      "addressCountry": {
        "@type": "Country",
        "name": "IN"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4595,
      "longitude": 77.0266
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "India"
    },
    "sameAs": [
      "https://www.facebook.com/MrServiceExpert/",
      "https://www.linkedin.com/company/mr-service-expert/",
      "https://x.com/mrserviceexpert"
    ],
    "priceRange": "₹399+",
    "description": "Mr Service Expert is a trusted name in home appliance repair across India. We provide reliable services for RO purifiers, ACs, refrigerators, washing machines, geysers, and more.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 679554,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amzad Khan"
      },
      "datePublished": "2025-02-01",
      "reviewBody": "Excellent service! My RO System was repaired quickly and efficiently.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What home appliances do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mr Service Expert offers repair, installation, and maintenance services for RO water purifiers, air conditioners, washing machines, and refrigerators."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a service with Mr Service Expert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can easily book a service by visiting our website at https://www.mrserviceexpert.com or by calling our customer care number."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide doorstep service for RO water purifiers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mr Service Expert offers doorstep service for all types of RO water purifiers, including installation, filter replacement, and maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "What types of air conditioners do you repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We repair split ACs, window ACs, inverter ACs, and central air conditioning systems for residential and commercial clients."
        }
      },
      {
        "@type": "Question",
        "name": "Do you repair front-load and top-load washing machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we service all models and brands of front-load, top-load, and semi-automatic washing machines with expert technicians."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a warranty on your repair services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide a limited service warranty on most repairs. Warranty details are shared at the time of service booking."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an AC service cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AC servicing starts from ₹399. The final cost depends on the type of service and any spare parts required."
        }
      },
      {
        "@type": "Question",
        "name": "Are your technicians verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all Mr Service Expert technicians are background-verified, trained, and experienced in appliance repair and servicing."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mrserviceexpert.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "RO Water Purifier",
        "item": "https://www.mrserviceexpert.com/ro-water-purifier"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AC Service",
        "item": "https://www.mrserviceexpert.com/ac"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Washing Machine Service",
        "item": "https://www.mrserviceexpert.com/washing-machine-repair"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Refrigerator Service",
        "item": "https://www.mrserviceexpert.com/refrigerator-repair"
      }
    ]
  };

  const benfits = [
    {
      id: 1,
      benfitsHeading: 'In Business',
      benfitsTitles: '10+ Years',
      benfitsIcons: '/assets/images/star.webp',
    },
    {
      id: 2,
      benfitsHeading: 'Satisfaction Guarantee',
      benfitsTitles: '100%',
      benfitsIcons: '/assets/images/star.webp',
    },
    {
      id: 3,
      benfitsHeading: 'Customer Support',
      benfitsTitles: '24/7',
      benfitsIcons: '/assets/images/star.webp',
    },
    {
      id: 4,
      benfitsHeading: 'Happy Customers',
      benfitsTitles: '5000+',
      benfitsIcons: '/assets/images/star.webp',

    },
    {
      id: 5,
      benfitsHeading: 'Professionals',
      benfitsTitles: 'Licensed',
      benfitsIcons: '/assets/images/star.webp',
    }
  ]
  const findService = () => {

    const location = locationRef.current?.value.trim();
    const service = serviceRef.current?.value;

    if (!service && !location) {
      toast.error('Please choose  a location or  a service.');
      return;
    }


    let path = '';
    if (location) path += `/${encodeURIComponent(location)}`;
    if (service) path += `/${encodeURIComponent(service)}`;

    console.log(path);

    router.push(path);


  };


  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
  <ToastContainer position="bottom-right" autoClose={3000}  />

      <div className=' homeviewStyle'>
        
        {/*=================hero section================================== */}
        <div className=" common-spacing herooBanner ">
          <div className='background'></div>
          <div className='hero-content '>
            <h2 className='text-2xl md:text-5xl font-bold text-gray-800 mb-6'>
              <b>Expert AC Care, Delivered to Your Doorstep</b>
            </h2>
            <h5 className='text-gray-500 mb-8'>
              From fast repairs to thorough maintenance — we ensure your cooling never skips a beat.
            </h5>


            <div className='mb-8 bg-white rounded-lg p-4 flex-wrap flex-col md:flex-row flex  gap-3.5 '>
              {/* <button></button> */}

              <div className='flex-1 relative'>
                <select className='bg-gray-100  rounded-md text-gray-600 w-full pl-8 pr-2 py-2  ' ref={locationRef} defaultValue="" >
                  <option disabled value={""} > Popular Cities </option>
                  <option value={'delhi'}>Delhi</option>
                  <option value={'gurgaon'}>Gurgaon</option>
                  <option value={'mumbai'}>Mumbai</option>
                  <option value={'noida'}>noida</option>
                </select>
                {/* <input type='text' placeholder='Search location' className='bg-gray-100 rounded-md text-gray-600  w-full pl-8 pr-2 py-2 '></input> */}
              </div>

              <div className='flex-1 relative'>
                <select className='bg-gray-100  rounded-md text-gray-600 w-full pl-8 pr-2 py-2  ' ref={serviceRef} defaultValue="" >
                  <option disabled value="" > Select our Services</option>
                  <option value={'ro-water-purifier'}>Ro Water Purifier</option>
                  <option value={'refrigerator-repair'}>Refrigerator</option>
                  <option value={'ac'}>Ac</option>
                  <option value={'washing-machine-repair'}>Washing Machine</option>
                </select>
              </div>


              <div className='flex-1 relative'>
                <button className='rounded-md bg-blue-500 p-2 text-white  hover:bg-blue-600 w-full pl-8 pr-2 py-2 ' onClick={findService}>Find Services</button>
              </div>


            </div>

            <div className='flex items-center justify-start mb-8 gap-2.5 '>
              <button className='rounded-md bg-blue-500 p-2 text-white  hover:bg-blue-600' >Book Now</button>

              <p > <b> Call Us </b><a href="tel:+919266608882" style={{ color: 'black', textDecoration: 'none' }}>+91-9266608882</a></p>
            </div>
          </div>

        </div>



        <div className='my-8'>
          <ServiceSection />
        </div>
        <div>


          <div className='bg-white flex justify-center gap-3 chooseUs py-7'>
            {/* <RepairView /> */}
            <div className='common-spacing'>
              <h2 className='text-center text-3xl md:text-5xl mb-3.5'><b>How It Works</b></h2>
              <h5 className='text-center text-gray-500 mb-8'>Getting your AC serviced has never been easier. Follow these simple steps to book your service.</h5>
              <div className='flex flex-row  justify-center flex-wrap mb-3.5 '>
                {/* for the icons  */}
                <div className='flex justify-center items-center view-card'>
                  <div className='w-full workImg flex justify-center items-center flex-col gap-2.5'>
                    <img src={'/assets/images/star.webp'} alt='icon logo'></img>
                    <h2 className='text-black text-center'>
                      <b> Book a Service</b>
                    </h2>
                    <h5 className='text-center text-gray-500'>
                      Choose the service you need and select a convenient time slot.
                    </h5>
                  </div>
                </div>
                {/*card 2*/}
                <div className='flex justify-center items-center view-card'>
                  <div className='w-full workImg flex justify-center items-center flex-col gap-2.5'>
                    <img src={'/assets/images/star.webp'} alt='icon logo'></img>
                    <h2 className='text-black text-center'>
                      <b>Meet Your Pro</b>
                    </h2>
                    <h5 className='text-center text-gray-500'>
                      Our certified professional will arrive on time and ready to work.
                    </h5>
                  </div>
                </div>
                {/*Card 3 */}
                <div className='flex justify-center items-center view-card'>
                  <div className='w-full workImg flex justify-center items-center flex-col gap-2.5'>
                    <img src={'/assets/images/star.webp'} alt='icon logo'></img>
                    <h2 className='text-black text-center'>
                      <b>Enjoy the Results</b>
                    </h2>
                    <h5 className='text-center text-gray-500'>
                      Sit back and enjoy your perfectly maintained home.
                    </h5>
                  </div>
                </div>

              </div>
              <div className='flex items-center justify-center mt-6'>
                <button className='rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700 '>Get Started Now</button>
              </div>
            </div>

          </div>
        </div>

        <div className='flex flex-wrap  flex-row gap-4 viewss bg-gray-100 p-3 '>
          {benfits.map((benfits) => (
            <div key={benfits.id} className='flex p-6  items-center '>
              <div className='w-full workImg flex   items-center flex-col gap-2.5'>
                <img src={benfits.benfitsIcons} alt={benfits.benfitsTitles}></img>
                <h2 className='text-black text-center'>
                  <b>{benfits.benfitsTitles}</b>
                </h2>
                <h5 className='text-center text-gray-500'>
                  {benfits.benfitsHeading}
                </h5>
              </div>
            </div>
          ))}
        </div>


        <div className="common-spacing  mt-2">
          <div className=" bg-white aboutStyle g-4">
            <h3 className="catgoreyTitle">ABOUT AC CARE India </h3>

            <h2 className="text-primary mb-4">{"AC Care India: A Leading Online Platform For All Air Conditioner Sales And Services"}</h2>

            <p>AC care saves your time money by connecting with the expert AC repair staff by visiting the website, dialing the AC service toll-free/helpline number, visiting the AC Care India customer care section, and sharing your AC service requirement by a single click form. Let us know about any AC preventive maintenance services through AC service helpline number (9266608882) that is all day active to discuss, compare, and evaluate any kinds of issues related to your air conditioner system. Based on your AC service needs the AC customer care executives to guide you with the most suitable AC service solution.</p>

            <p><b>Why Consider AC Care India?</b></p>
            <p>
              Why did you choose AC Care India, you get all sorts of AC installation and other preventive maintenance services through 5 Star AC service professionals so that you can enjoy the hassle-free AC service. The AC service engineers at AC Care India are handpicked and well qualified to deliver you the most satisfactory service at your doorway. Along with the high level of customer satisfaction, you can also get affordable service.

              At AC care India you can meet the verified and skilled technician to handle after-sales services to ensure 100% customer satisfaction. Apart from all models of AC installation, you can also get a complete set of pre, and post-sales services with the shortlisted service technicians. The AC customer care service team offers proper assistance and suggests regular AC servicing tips to increase the shelf life of your home AC. Hence, AC Care India is undoubtedly become the one-step solution when AC becomes more than a luxury. As your trusted AC service partner, get the best quality AC services at-home comfort at an economical price.
            </p>

            <p>
              <strong>Call Us:</strong>{' '}
              <a href="tel:+919266608882" style={{ color: '#007bff', textDecoration: 'underline' }}>+91-9266608882</a>
              <br />
              <strong>Book Online:</strong>{' '}
              <a
                href="https://www.accareindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff', textDecoration: 'underline' }}
              >
                www.accareindia.com
              </a>
            </p>
          </div>
        </div>
      </div></>
  )
}

export default Home