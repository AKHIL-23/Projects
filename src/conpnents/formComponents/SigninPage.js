import React from 'react'
import TabComponent from './TabComponent'
import Navbar from './../commonUtils/Navbar'

const SigninPage = () => {
    return (
        <>
            <Navbar />
            <section className='grid grid-cols-12  mt-16 h-screen '>
                <div className="loginbanner col-span-12   lg:col-span-5  d:pt-10 flex justify-center items-center   ">
                    <img src="/assets/img/signin1.svg" alt="signin" className='' />
                </div>
                <div className="formWrapper col-span-12  lg:col-span-7      ">
                    <TabComponent />
                </div>

            </section>
        </>
    )
}

export default SigninPage
// place-content-center