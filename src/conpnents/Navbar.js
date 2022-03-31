import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


import Banner from './Banner';

const Navbar = () => {
    return (

        <>
            <nav className='flex    items-center pt-4 px-3  sm:flex-row flex-col justify-around z-10   fixed top-0 w-full '>
                <Link to="/" className=' transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out ' >
                    <h1 className='text-xl md:text-3xl 2xl:text-4xl  cursor-pointer sm:text-blue-500 text-blue-500  ' >ZnInfotech</h1></Link>



                <label for="click" > <i className="fa-solid fa-bars text-xl absolute top-4 right-5 sm:invisible visible group  active:text-blue-900  "  ></i></label>
                <input type="checkbox" id="click" className='peer invisible'></input>


                <div className='  absolute top-14 -left-full sm:relative sm:top-auto sm:left-0 h-screen sm:h-auto  peer-checked:left-0 transition-all duration-1000 ease-in-out w-full sm:w-auto   '>
                    <ul className='flex sm:space-y-0 sm:space-x-8 justify-end sm:text-right text-center  sm:flex-row flex-col space-x-0 space-y-12 '>
                        <li></li>
                        <Link to="/"><li className='active:bg-blue-400 bg-blue-500  px-5 py-2 sm:rounded-full text-sm  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out cursor-pointer ' >Home</li></Link>

                        <Link to="/About">
                            <li className='hover:bg-blue-500 px-5 py-2 sm:rounded-full text-sm sm:text-black text-blue-400 hover:text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out  cursor-pointer'>About us</li>
                        </Link>
                        <Link to="/ContactUs">
                            <li className='hover:bg-blue-500 px-5 py-2 sm:rounded-full text-sm  sm:text-black text-blue-400 hover:text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out  cursor-pointer'>Contact</li>
                        </Link>
                        <Link to="/Dashboard">
                            <li className='hover:bg-blue-500 px-5 py-2 sm:rounded-full text-sm sm:text-black text-blue-400  hover:text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out  cursor-pointer'>
                                <i class="fa-solid fa-circle-user text-xl"></i><span className='ml-2'>User Name</span>
                            </li>
                        </Link>




                    </ul>
                </div>
            </nav>








        </>
    );

}
export default Navbar;