import React from 'react';
import { Link } from 'react-router-dom';
import "./TrendingCards.css"

const TrendingCards = (props) => {
    return (
        <div className=' p-5 rounded-xl h-fit  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105 mt-2 hover:z-10 cart ' >
            <img src={props.dummy[0].courseimg} alt="" className='  mx-auto  ' />
            <div className='text-justify space-y-2  m-4'>
                <h4 className='text-center text-xl 2xl:text-base mt-5 '>{props.dummy[0].coursename}</h4>
                <p className='text-sm  2xl:text-base' >Lorem ipsum dolor,sit amet consectetur adipisicing elit. Ipsa consequatur sit necessitatibus anulla provident, </p>
            </div>
            <div className='flex justify-evenly items-start'>
                <Link to="/CourseName">
                    <button className='active:bg-blue-900 bg-blue-500 hover:bg-red-600   px-4 py-3 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold    '>Enroll Now</button>
                    <button className='active:bg-red-900 bg-red-500 hover:bg-red-600   px-5 py-3 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold  ml-9  '>Detail</button>
                </Link>


            </div>

        </div>
    )
}

export default TrendingCards