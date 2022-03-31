import React from "react";
import './Banner.css';
// import Wavesvg from "./pages/Wavesvg";


const Banner = () => {


    return (<>
        <section className='  items-start z-0 mt-20 sm:pl-28 sm:mt-20  md:mt-28 md:pl-36 lg:mt-36 lg:pl-52 xl:mt-56 xl:pl-56  2xl:mt-72 2xl:pl-80     ' >
            {/* bg-yellow-500 */}
            <div className=' p-3 w-full sm:w-72 md:w-80 lg:w-7/12 ' >
                <h1 className=' text-indigo-500 sm:text-indigo-800    animate-bounce  cursor-pointer text-4xl md:text-7xl 2xl:text-9xl  '>Banner</h1>
                <p className=' text-justify text-xl font-bold  '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting  industry.  lorem lorem lorem lorem lorem.
                </p>
                <div className='flex space-y-8 '>
                    <button className='sm:invisible visible' />
                    <button className='active:bg-indigo-900 bg-indigo-600 hover:bg-red-600   px-5 py-3 rounded-full text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold    '>Click here</button>
                    <button className='active:bg-indigo-900 bg-green-400 hover:bg-red-600   px-5 py-3 rounded-full text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold  ml-9  '>Sign in</button>

                </div>
            </div>
            <div className='absolute top-0 left-0 -z-10 sm:visible invisible  ' >
                <img src='/assets/img/bannerImg1.png' alt="banner" className="w-full h-auto  " ></img>
            </div >


        </section >
        {/* <Wavesvg  /> */}







    </>);
}

export default Banner;