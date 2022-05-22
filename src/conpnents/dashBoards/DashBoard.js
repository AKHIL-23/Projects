import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import './SideBar.css'

const DashBoard = () => {


    const test = () => {

    }
    return (
        // flex  relative z-20'
        < section className=' h-screen flex   relative z-20' >

            <SideBar />


            <div className=' flex-1 p-5 bg-white  ml-20'>

                <Outlet />


            </div>


        </section >

    )
}

export default DashBoard