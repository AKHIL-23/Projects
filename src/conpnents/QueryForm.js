import React, { useState } from 'react'
import './QueryForm.css'


const QueryForm = () => {
    const [email, setemailState] = useState("");
    const [mobNumber, setmobNumberState] = useState("");
    const [name, setnameState] = useState("");
    const [query, queryState] = useState("");
    let emailChange = (event) => {
        setemailState(event.target.value);

    }
    let mobNumberChange = (event) => {
        setmobNumberState(event.target.value);

    }
    let nameChange = (event) => {
        setnameState(event.target.value);

    }
    let queryHandle = (event) => {
        queryState(event.target.value);

    }
    let submithandle = (event) => {
        event.preventDefault();


        setemailState("");
        setmobNumberState("");
        setnameState("");
        queryState("");


    }


    return (
        <>
            <section className='grid grid-cols-12 mt-10 mb-10   '>
                <div className='col-span-12 md:col-span-6 p-4  flex justify-center items-center '><img src="/assets/img/queryForm.svg" alt="" className='xl:w-3/4  ' /></div>

                <div className='col-span-12 md:col-span-6 p-5 space-y-5  '>
                    <h1 className='text-center text-blue-600 text-xl lg:text-3xl   '>Clear  your Douts !</h1>
                    <form action="" onSubmit={submithandle} className='   space-y-7  md:space-y-9 p-5 md:p-11
                        border   rounded-xl border-none ring-2 '>
                        <div className='relative  '>
                            <input type="text" id="nameField" placeholder=" " value={name} onChange={nameChange} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="nameField" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Name</label>
                        </div>

                        <div className='relative  '>
                            <input type="text" id="emailField" placeholder=" " value={email} onChange={emailChange} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="emailField" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>email</label>
                        </div>
                        <div className='relative  '>
                            <input type="number" id="mobNumber" placeholder=" " value={mobNumber} onChange={mobNumberChange} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="mobNumber" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Mobile Number</label>
                        </div>
                        <div className='relative'>
                            <textarea name="" id="queryTextBox" rows="10" value={query} onChange={queryHandle} className='bg-transparent border-none rounded-md p-5 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox w-full  ' required></textarea>
                            <label htmlFor="queryTextBox" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Type your query here </label>
                        </div>
                        <div className='relative '>
                            <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-10 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold' type="submit" id='querySend-btn'>Send</button>
                            <label htmlFor="querySend-btn">
                                <ion-icon name="paper-plane-outline" class='text-white absolute top-1 left-1 text-3xl z-10 cursor-pointer font-bold'></ion-icon>
                            </label>

                        </div>


                    </form>
                </div>
            </section>


        </>

    )
}

export default QueryForm