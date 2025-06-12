'use client'
import React, { useEffect, useState } from 'react'

const servicess = [
    {
        id: 1,
        serviceName: ' Jet foam AC service (Window) ',
        serviceTime: '30 min',
        servicePrice: '349',
    },
    {
        id: 2,
        serviceName: 'Window AC less/no cooling repair',
        serviceTime: '30 min',
        servicePrice: '449',
    },
    {
        id: 3,
        serviceName: 'Jet foam AC service (Split AC)',
        serviceTime: '30 min',
        servicePrice: '549',
    },
    {
        id: 4,
        serviceName: 'Anti-rust spray Foam Service (avoid gas leak)',
        serviceTime: '30 min',
        servicePrice: '649',

    }

]


// {
//     "date":"2025-05-29"
// }

function page() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentDate, setCurrentDate] = useState(null);
    const [slotsTiming, setSlotsTiming] = useState([]);
    const getNextFiveDays = () => {
        let days = [];
        for (let i = 0; i < 5; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);
            const day = date.toLocaleDateString("en-US", { weekday: "short" });
            const dayNum = date.getDate();
            const formattedDate = date.toISOString().slice(0, 10);

            days.push({ label: `${day} ${dayNum}`, value: formattedDate });

            // Thu May 29 2025 12:34:29 GMT+0530 (India Standard Time)
            // 2025-05-29
        }
        return days;
    };

    const availableDates = getNextFiveDays();

    // console.log(availableDates);

    // console.log(availableDates.value);


    // const response= fetch("https://waterpurifierservicecenter.in/customer/ro_customer/time_slot.php")
    const handleTimeStep = async (date) => {

        const payload = { date: date }

        const res = await fetch("https://waterpurifierservicecenter.in/customer/ro_customer/time_slot.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
        const data = await res.json();
        localStorage.setItem("selectedSlots", JSON.stringify(data.all_time_slots));
        setSlotsTiming(data);
        setSelectedDate(date)
        console.log(data);
    }

    // console.log(slotsTiming);
  
      const timeslot = JSON.parse(localStorage.getItem("selectedSlots") || "[]");
 






    return (
        <div className="flex justify-center items-center py-5  flex-col ">
            <div className="w-full md:w-10/12 lg:w-5/12 xl:w-6/12 mx-auto rounded-xl py-4 md:py-8 px-4 md:px-6 bg-white">

                <div className="flex flex-col items-center justify-center">
                    <h2 className='text-2xl'><b>Book Your Service</b></h2>
                    <h5 className='text-gray-400'>Complete the steps below to schedule your appointment</h5>
                </div>

                <div>
                    {/* stepper form to make for the better look*/}

                    {/* <p>step wise checking</p> */}

                    <div className='flex flex-row justify-evenly'>
                        {/*Progress bar ie step wise checking on which step*/}
                        <span className='progressBarBody rounded-full bg-transparent border-1 border-blue-300 p-1 hover:bg-blue-500 hover:text-white'>1</span>
                        <span className='progressBarBody rounded-full bg-transparent border-1 border-blue-300 p-1 hover:bg-blue-500 hover:text-white'>2</span>
                        <span className='progressBarBody rounded-full bg-transparent border-1 border-blue-300 p-1 hover:bg-blue-500 hover:text-white'>3</span>
                    </div>

                    <div>
                        {/* step 0 where the users selected service will be shown and whole screen will be disabled */}

                        <div className=''>
                            <h2 className='mb-6 text-xl'><b>Selected Service</b></h2>
                            <div className='grid-cols-2 grid space-y-2 space-x-3 mb-6'>
                                {servicess.map((service) => (
                                    <button key={service.id} className='bg-gray-100 h-20 rounded-xl focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-100  hover:-translate-y-0.5 p-4 hover:shadow-md'>
                                        <div className='flex text-left mb-2.5'>
                                            <h4 className='text-xs'><b>{service.serviceName}</b></h4>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-gray-400 text-xs'>{service.serviceTime}</span>
                                            <p className='text-green-500 text-xs'>{service.servicePrice}</p>

                                        </div>

                                    </button>
                                ))}

                            </div>

                            <div className='flex justify-end mb-3'>

                                <button className='text-white bg-blue-400 px-2 py-1 rounded-xs hover:bg-blue-600'>{'continue ->'}</button>
                            </div>

                        </div>







                    </div>

                    {/*Step 1  choosing date  time slots*/}

                    <div >
                        {/* step 1 where the users selected service will be shown and whole screen will be disabled */}

                        <div className=' flex flex-col gap-3'>

                            <h2 className='mb-6 text-xl'><b>Choose Date & Time</b></h2>
                            <div className='flex items-center justify-center gap-3  mb-6'>
                                {availableDates.map((days, index) => (
                                    <div key={index} className=''>
                                        <button onClick={() => handleTimeStep(days.value)} className='rounded-2xl border-blue-500 border-2   focus:bg-blue-700 focus:text-white p-4'>{days.label}</button>
                                    </div>
                                ))}





                            </div>
                            <div className=' '>
                                {selectedDate && (

                                    timeslot.length > 0 ? (
                                        <div className='flex items-center justify-center gap-3 flex-wrap  flex-row'>
                                            {timeslot.map((slots) => (
                                                <div key={slots.id}>
                                                    <button className='p-2 border-2  hover:bg-blue-300 hover:text-white border-blue-400 rounded-2xl focus:bg-blue-500 focus:text-white'>{slots.time_slots}</button>
                                                </div>
                                            ))

                                            }
                                        </div>
                                    ) : (<div className='flex items-center justify-center gap-3 flex-wrap  flex-row'>
                                        <p className='text-red-400'>no slots available for selected Date go for next</p>
                                    </div>))}
                            </div>

                            <div className='flex justify-between mb-3'>
                                <button className='text-white bg-blue-400 px-2 py-1 rounded-xs hover:bg-blue-600'>{'<- Back'}</button>
                                <button className='text-white bg-blue-400 px-2 py-1 rounded-xs hover:bg-blue-600'>{'Next ->'}</button>
                            </div>

                        </div>







                    </div>

                    {/*Step 2  choosing booking address */}
                    <div>

                        <div className=' flex flex-col gap-3 mb-3'>
                            <h3><b>Enter Your Details</b></h3>
                            <form action="" className='border-2 border-blue-300 mb-3 rounded-3xl flex flex-col gap-3 h-auto p-4'>
                                <div  className='mb-3 flex  gap-2'> <label htmlFor="" >Name:</label>
                                    <input type="text" name='name' id='name' className='border-2 border-blue-300' />
                                   

                                </div>
                               <div className='mb-3 flex  gap-2'>
                                 <label htmlFor="" >Email:</label>
                                    <input type='email' name='email' id='email' className='border-2 border-blue-300' />
                                   

                                </div> 

                                 <div className='mb-3 flex  gap-2'>
                                     <label htmlFor="" >Phone:</label>
                                    <input type='tel' name='phone' id='phone' className='border-2 border-blue-300' />
                                   

                                </div> 




                            </form>


                        </div>


                        <div className='flex justify-between'>
                            <button className='text-white bg-blue-400 px-2 py-1 rounded-xs hover:bg-blue-600'>{'<- Back'}</button>
                            <button className='text-white bg-green-400 px-2 py-1 rounded-xs hover:bg-green-600'>{'Confirm Booking'}</button>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default page