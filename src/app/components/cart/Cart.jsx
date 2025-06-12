import React, { useEffect, useState } from "react";

import { IconButton } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { toast } from "react-toastify";



// const Cart = ({cartdata, total, onRemove, onIncrement, onDecrement, onCartLoad }) => {
const Cart = ({ cartLoaded, cartLoadedToggle }) => {

  const [cartDataArray, setCartDataArray] = useState([]);
  const [finalTotal, setFinalTotal] = useState(0);
  const [expand, setExpand] = useState(true);



  const displayCartData = () => {
    const cartdata = localStorage.getItem('checkoutState');
    // console.log(cartdata.leadtype_name[5].cart_dtls[5]);

    console.log(cartdata + 'heres all details');


    const cartDataArray = cartdata ? JSON.parse(cartdata) || [] : [];

    console.log(cartDataArray);


    // console.log(cartDataArray.cart_dtls[5]);


    setFinalTotal(localStorage.getItem('cart_total_price'));

    // const finalTotal = cartDataArray
    //   .map(item => Number(item.total_cart_price)) // Convert string to number
    //   .reduce((acc, price) => acc + price, 0); // Sum up prices

    // setFinalTotal(finalTotal);

    setCartDataArray(cartDataArray);
  }

  useEffect(() => {

    displayCartData(cartLoaded);
  }, [cartLoaded])



  const onIncrement = async (service_id, type, qunt) => {
    const cid = localStorage.getItem("customer_id");
    const num = Number(qunt);
    const quantity = num + 1;

    if (quantity <= 5) {
      const payload = { service_id, type, cid, quantity };
      console.log(JSON.stringify(payload));

      const res = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/add_to_cart.php", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails));
      localStorage.setItem('cart_total_price', data.total_price);

      displayCartData();
      toast.success(data.msg);


    } else {
      toast.error("You can't add more than 5 items");
    }

  };




  const onDecrement = async (service_id, type, qunt) => {
    const cid = localStorage.getItem("customer_id");
    const num = Number(qunt);
    const quantity = num - 1;

    if (quantity <= 5) {
      const payload = { service_id, type, cid, quantity };
      console.log(JSON.stringify(payload));

      const res = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/add_to_cart.php", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      // localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails, data.total_cart_price, data.cart_id));
      localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails == null ? [] : data.AllCartDetails));
      localStorage.setItem('cart_total_price', data.total_price == null ? 0 : data.total_price);
      if (quantity === 0) {
        const oldCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const updatedCartItems = oldCartItems.filter(id => id !== service_id);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // trigger parent update
        if (typeof cartLoadedToggle === 'function') {
          cartLoadedToggle();
        }
      }

      displayCartData();
      toast.success(data.msg);


    } else {
      toast.success('hey hey hey ')
    }

  };


  const handleRemoveFromCart = async (service_id, type, qunt) => {
    const cid = localStorage.getItem("customer_id");
    // const num = Number(qunt);
    const quantity = 0;
    const payload = { service_id, type, cid, quantity };

    // console.log(JSON.stringify(payload) + 'remove thing will work here');

    const res = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/add_to_cart.php", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    // localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails, data.total_cart_price, data.cart_id));

    localStorage.setItem('checkoutState', JSON.stringify(data.AllCartDetails == null ? [] : data.AllCartDetails));
    localStorage.setItem('cart_total_price', data.total_price == null ? 0 : data.total_price);
    const oldCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedCartItems = oldCartItems.filter(id => id !== service_id);
    console.log("cart remove" + updatedCartItems);

    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // trigger parent update
    if (typeof cartLoadedToggle === 'function') {
      cartLoadedToggle();
    }
    displayCartData();
    toast.success(data.msg);


  };


  // console.log(finalTotal);


  return (
    <div className=" bg-white rounded-2xl py-3 px-2 shadow-lg border border-gray-100 overflow-hidden">
      <div
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 cursor-pointer rounded-xl"
        onClick={() => setExpand(!expand)}
      > <div className="flex justify-between items-center">
        <span>Cart</span>
      </div>
      </div>

      <div className={`transition-all duration-300 ${expand ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        {cartDataArray.length === 0 ? (
          <div className="emptyStyle">
            <img src="/assets/images/emptyCart.webp" alt="Empty Cart" className="emptyImg" height="auto" width={72} />
            <p className="text-center">No services added.</p>
          </div>
        ) : (
          <>
            {cartDataArray?.map((service) => (
              <div key={service.cart_id} className="max-h-90 overflow-x-auto">
                <p className="ml-2.5">{service.leadtype_name}</p>

                {service.cart_dtls?.map((item, index) => (
                  <div className="cart-item-body" key={item.cart_id}>
                    <div className="cart-item">
                      <div className="service-details flex items-start flex-col">
                        <div className="flex items-center gap-4 ">
                          <span><b>{item.service_name}</b></span>

                          <div className="quantity-control">
                            <button className="IncrementDcrementBtn" onClick={() => onDecrement(item.service_id, 'delete', item.quantity)}>
                              -
                            </button>
                            <span>{item.quantity || 1}</span>
                            <button
                              className="IncrementDcrementBtn"
                              onClick={() => onIncrement(item.service_id, 'add', item.quantity)}
                              disabled={(item.quantity || 1) >= 5}
                              style={{
                                opacity: (item.quantity || 1) >= 5 ? 0.5 : 1,
                                cursor: (item.quantity || 1) >= 5 ? 'not-allowed' : 'pointer'
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className=" text-blue-400">
                          Price: ₹{item.price}
                        </div>

                      </div>
                      <div className="flex flex-col px-1">

                        <div>
                          <button onClick={() => handleRemoveFromCart(item.service_id, 'delete', 0)} className="text-red-500 w-5 rounded-md h-6 hover:bg-red-200 ">X</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div className="cart-footer">
              <div className="totalSection">
                <Link href={'/checkout'}><div className="cart-total forMb" style={{ cursor: 'pointer' }}>
                  <strong>Total: ₹{finalTotal}</strong>
                  <button>View Cart</button>
                </div></Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* <div className="grid grid-cols-2 gap-1 bg-gradient-to-r from-green-50 to-blue-50 p-2 rounded-xl">
       <span className="text-gray-400 text-xs">Authenic parts</span>
       <span className="text-gray-400 text-xs">Expert Technicain</span>
       <span className="text-gray-400 text-xs">24/7 Customer Service</span>
       <span className="text-gray-400 text-xs">Best Value</span>
      </div> */}
    </div>
  );
};

export default Cart;