import React from "react";


function index() {

  return (

    <div className="serviceStepper bg-white rounded-2xl">

      <ol className="serviceStyle">
        <p className="text-blue-400  text-lg font-medium mb-3"><b>Service Process</b></p>

        <div className="flex flex-col relative gap-2.5">
          <div className="verticalLine"></div>
          <li className="serviceSteps">Select Service Type</li>
          <li className="serviceSteps">Get Free Expert Quote</li>
          <li className="serviceSteps">Approve & Schedule Easily</li>
          <li className="serviceSteps">Professional Service Delivery</li>
          <li className="serviceSteps">Pay Safely After Work</li>
          <li className="serviceSteps">Rate Service & Leave Review</li>

        </div>
      </ol>


    </div>

  )
}

export default index