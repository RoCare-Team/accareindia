"use client"
import React, { useEffect, useState } from "react";
// import ExtraOptions from "../modals/extraOptions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import PhoneVerification from "../PhoneVerification/PhoneVerification";
import { toast, ToastContainer } from "react-toastify";
// import {  useParams } from "react-router-dom";
import { useParams } from "next/navigation";

const ServicesList = ({ cate, addedServices = [], state, handleCartLoading }) => {
  //   const location = useLocation();
  const [serviceListCart, setServiceListCart] = useState([]);

  const [clickedValues, setClickedValues] = useState([]);

  // const handleButtonClick = (value) => {
  //   setClickedValues((prevValues) => [...prevValues, value]);
  // };

  const { city, brand, cat } = useParams();
  // const [city, brand, cat] = params.params || [];

  const [catNam, setCatNam] = useState("");
  const [servicedata, setServiceData] = useState([]);
  const [catergoryTitle, setCatergoryTitle] = useState("");
  const [BrandName, setBrandName] = useState("");
  // const { city, cat } = useParams();

  // console.log(city +"-"+ brand );

  // console.log(BrandName);


  // Define which categories should use the modal
  const modalCategories = ['ac', 'refrigerator', 'chimney', 'washing-machine', 'water-purifier'];
  const [showModal, setShowModal] = useState(false);

  // const type = localStorage.setItem('type', 'add');

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setServiceListCart(JSON.parse(storedCartItems));
    } else {
      setServiceListCart([]);
    }
  }, [state]); //  dependency to change the cart states

  // Initialize from localStorage and props when component mounts
  useEffect(() => {
    // Load clickedValues from localStorage
    const storedClickedValues = localStorage.getItem('clickedValues');
    if (storedClickedValues) {
      setClickedValues(JSON.parse(storedClickedValues));
    }

    // Initialize serviceListCart from both localStorage and props
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setServiceListCart(JSON.parse(storedCartItems));
    } else if (addedServices.length > 0) {
      setServiceListCart(addedServices);
      localStorage.setItem('cartItems', JSON.stringify(addedServices));
    }

    localStorage.setItem('type', 'add');
  }, []);

  // Update serviceListCart when addedServices prop changes
  useEffect(() => {
    if (addedServices.length > 0) {
      setServiceListCart(addedServices);
      localStorage.setItem('cartItems', JSON.stringify(addedServices));
    }
  }, [addedServices]);
  useEffect(() => {
    let lead_type = null;

    //   const cat=category;

    if (cat === "washing-machine-repair" || city === "washing-machine-repair" || cate === "washing-machine-repair") {
      lead_type = 4;
    } else if (cat === "ac" || city === "ac" || cate === "ac") {
      lead_type = 2;
    } else if (cat === "ro-water-purifier" || city === "ro-water-purifier" || cate === "ro-water-purifier") {
      lead_type = 1;
    } else if (cat === "microwav-repair" || city === "microwav-repair" || cate === "microwav-repair") {
      lead_type = 9;
    } else if (cat === "vacuum-cleaner-repair" || city === "vacuum-cleaner-repair" || cate === "vacuum-cleaner-repair") {
      lead_type = 11;
    } else if (cat === "geyser-repair" || city === "geyser-repair" || cate === "geyser-repair") {
      lead_type = 5;
    } else if (cat === "kitchen-chimney-repair" || city === "kitchen-chimney-repair" || cate === "kitchen-chimney-repair") {
      lead_type = 10;
    } else if (cat === "refrigerator-repair" || city === "refrigerator-repair" || cate === "refrigerator-repair") {
      lead_type = 6;
    } else if (cat === "led-tv-repair" || city === "led-tv-repair" || cate === "led-tv-repair") {
      lead_type = 8;
    } else if (cat === "air-purifier-repair" || city === "air-purifier-repair" || cate === "air-purifier-repair") {
      lead_type = 18;
    } else if (cat === "kitchen-cleaning-service" || city === "kitchen-cleaning-service" || cate === "kitchen-cleaning-service") {
      lead_type = 32;
    } else if (cat === "sofa-cleaning-service" || city === "sofa-cleaning-service" || cate === "sofa-cleaning-service") {
      lead_type = 29;
    } else if (cat === "pest-control" || city === "pest-control" || cate === "pest-control") {
      lead_type = 33;
    } else if (cat === "tank-cleaning" || city === "tank-cleaning" || cate === "tank-cleaning") {
      lead_type = 34;
    } else if (cat === "mason-service" || city === "mason-service" || cate === "mason-service") {
      lead_type = 39;
    } else if (cat === "house-painting" || city === "house-painting" || cate === "house-painting") {
      lead_type = 35;
    } else if (cat === "bathroom-cleaning-service" || city === "bathroom-cleaning-service" || cate === "bathroom-cleaning-service") {
      lead_type = 30;
    } else if (cat === "home-deep-cleaning-service" || city === "home-deep-cleaning-service" || cate === "home-deep-cleaning-service") {
      lead_type = 31;
    }



    const cid = localStorage.getItem('customer_id');

    fetch('https://waterpurifierservicecenter.in/customer/ro_customer/all_services.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cid: cid, lead_type: lead_type })

    })
      .then(res => res.json())
      .then(data => {
        // console.log("Service Response:", data);
        // console.log(data.Title);

        setServiceData(data.service_details);
        setCatergoryTitle(data.Title);
        setBrandName(cat);

      }, [])



  }, [cat])

const limitListItems = (html, max = 4) => {
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const allLis = doc.querySelectorAll('li');

  if (allLis.length > max) {
    // Keep only the first 4
    for (let i = max; i < allLis.length; i++) {
      allLis[i].remove();
    }

    // Append "..." as a final <li>
    const moreLi = doc.createElement('li');
    moreLi.textContent = ' ';
    allLis[0].parentNode.appendChild(moreLi);
  }

  return doc.body.innerHTML;
};

  // console.log(servicedata);









  const handleAddToCart = async (service) => {
    if (!addedServices.includes(service.id)) {
      // onAddToCart(service); 
      setClickedValues((prevValues) => [...prevValues, service.id]);
      const service_id = service.id;
      const quantity = 1;
      console.log(quantity);

      const type = localStorage.getItem('type');
      const cid = localStorage.getItem('customer_id');
      // console.log(cid);
      if (cid != null) {
        toast.success('Hope You Enjoy Our Services 🎉');
        const payload = { service_id, quantity, cid, type };
        const res = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/add_to_cart.php", {

          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails == null ? [] : data.AllCartDetails));
        localStorage.setItem('cart_total_price', data.total_price == null ? 0 : data.total_price);

        // Update the addedServices array after successful API call
        // setAddedServices(prev => [...prev, service.id]);

        // Update clickedValues and store in localStorage
        const newClickedValues = [...clickedValues, service.id];
        setClickedValues(newClickedValues);
        localStorage.setItem('clickedValues', JSON.stringify(newClickedValues));

        // Update serviceListCart and store in localStorage
        const newServiceListCart = [...serviceListCart, service.id];
        setServiceListCart(newServiceListCart);
        localStorage.setItem('cartItems', JSON.stringify(newServiceListCart));

        if (handleCartLoading) {
          handleCartLoading();
        }
      } else {
        setShowModal(true);
        // toast.error('Login before addding any service');

        // setTimeout(() => {
        //   setShowModal(true);
        // }, 1500)

      }

    }
  };

  // console.log(clickedValues);


  return (
    <div className=" gap-4 grid md:grid-cols-2 grid-cols-1 ">
      {/* <ToastContainer /> */}
      {/* <h3 className="mt-3 ml-4"><b>{catergoryTitle}</b></h3> */}
      {servicedata?.map((service) => {
        // const isAdded = addedServices.includes(service.id);
        const isAdded = serviceListCart.includes(service.id)
        // Fix: Define useModal variable here
        const useModal = modalCategories.includes(service.category);

        const newList= limitListItems(service.description, 4);

        return (

          <div key={service.id} id={service.id} className="   ">

            <div className="p-6 rounded-2xl flex border-2 border-blue-300 w-full h-72 shadow-md hover:-translate-y-0.5  flex-col gap-4 bg-white" >
              <div className="flex serviceWiseContainer">
                <div className="serviceDetails">

                  <h3 className="serviceVarities">{service.service_name}</h3>
                  <div>
                    <span className="serviceReview">
                      <FontAwesomeIcon icon={faStar} /> {4.5} (30K+ reviews)
                    </span>
                    <div className="dashedLine"></div>
                    <div className="prices flex gap-2.5">
                      <span>
                        ₹{service?.price}
                      </span>

                      {/* removed this cause it was making it string {service?.price + 100 } */}
                      <span className="actualPrice">₹{Number(service?.price) + 100}</span>
                    </div>
                  </div>
                </div>
                <div className="serviceImgContainer">

                  <div className="serviceDetailsImg mb-0.5">
                    <img src={service.image} alt={service.category_name || service.service_name} height={72} width={72} title={service.category_name || service.service_name} />
                  </div>

                  <div className=" ">

                    <button
                      title="Add"
                      className={`add-to-cart-btn ${isAdded ? "bg-blue-300 px-2 text-white py-1.5 cursor-not-allowed" : "IncrementDcrementBtn2"} rounded`}
                      onClick={() => handleAddToCart(service)}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added" : "Add"}
                    </button>

                  </div>
                </div>
              </div>
              <div className="briefInfo2 w-full" dangerouslySetInnerHTML={{ __html: newList }}></div>
            </div>
          </div>
        );
      })}
      <PhoneVerification setShowModal={setShowModal} showModal={showModal} />

    </div>
  );
};

export default ServicesList;