import React from 'react'
import TabComponent from './TabComponent'
import Navbar from './../commonUtils/Navbar'
import SiginComponent from './SiginComponent'

const SigninPage = () => {
    return (
        <>
            <Navbar />


            <section className='grid grid-cols-12 h-screen '>

                <div className="loginbanner col-span-12 lg:col-span-7 px-10  d:pt-10     ">

                    <img src="/assets/img/signin1.svg" alt="signin" className='mt-16' />
                    <h1 className='text-3xl mt-4 text-center text-white'>WELCOME TO ZNINFOTECH</h1>
                    <p className='text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam unde natus corrupti adipisci laborum, possimus molestiae debitis ducimus aliquid! Repudiandae quis ex cum doloribus voluptate consequuntur ullam nemo mollitia quas!</p>
                </div>
                <div className="formWrapper col-span-12  lg:col-span-5      ">


                    <SiginComponent />

                </div>


            </section>
        </>
    )
}

export default SigninPage
// place-content-center