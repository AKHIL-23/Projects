import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <section className='p-10 relative' style={{ backgroundColor: "#e8f2ff" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-0 left-0 z-20  '><path fill="#ffff" fillOpacity="1" d="M0,192L34.3,181.3C68.6,171,137,149,206,149.3C274.3,149,343,171,411,202.7C480,235,549,277,617,256C685.7,235,754,149,823,144C891.4,139,960,213,1029,234.7C1097.1,256,1166,224,1234,208C1302.9,192,1371,192,1406,192L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

            <div className='container mx-auto mb-10 -mt-10 sm:mt-5 md:mt-16 text-white'>
                <div className='grid grid-cols-12 rounded-xl bg-blue-500 p-3 relative  z-10 hover:z-30 transform hover:-translate-y-1 hover:scale-105 transition duration-500 ease-in-out shadow-2xl'>
                    <div className='col-span-full sm:col-span-6 lg:order-1 xl:col-span-3 xl:order-1 p-4 space-y-2 '>
                        <h1 className='text-xl md:text-3xl hover:text-blue-900 '>ZN Infotech</h1>
                        <ul className='space-y-2'>
                            <li className='text-sm md:text-lg'><ion-icon name="location-outline" class='hover:text-blue-900  text-xl' ></ion-icon> 1st Floor, Super Complex, Kursi Road, Tedhi Pulia, Lucknow-226020</li>
                            <li className='text-sm md:text-lg'><ion-icon name="mail-outline" class='hover:text-blue-900  text-xl'  ></ion-icon> info@zninfotech.com</li>
                            <li className='text-sm md:text-lg'><ion-icon name="call-outline" class='hover:text-blue-900  text-xl' ></ion-icon>  9335726249</li>
                        </ul>
                    </div>
                    <div className=' col-span-full sm:col-span-6 lg:order-3 lg:col-span-full xl:col-span-6 xl:order-2 p-4 w-3/4 '>
                        <img src="/assets/img/background/mountain-g747952440_1920.jpg" alt="" />
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14231.431541546248!2d80.956231!3d26.908005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a345236356bd958!2sZN%20Infotech!5e0!3m2!1sen!2sin!4v1648984979420!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </div>
                    <div className='col-span-full lg:order-2 lg:col-span-6 xl:col-span-3 xl:order-3 p-4 space-y-2 '>
                        <h1 className='text-xl md:text-3xl hover:text-blue-900 0'>ZN Infotech</h1>
                        <ul className='space-y-2' >
                            <li className='text-sm md:text-lg'>Home</li>
                            <li className='text-sm md:text-lg'>Aboutus</li>
                            <li className='text-sm md:text-lg'>contact us</li>
                            <li className='text-sm md:text-lg'>privacy policy</li>

                        </ul>
                    </div>
                    <div className='col-span-12 order-5 text-lg m-2 text-center cursor-pointer hover:text-blue-900'><ion-icon name="logo-github" class='text-xl'></ion-icon> Developed and Design By: Akhilesh Kumar Singh </div>
                </div>

            </div>



        </section >
    )
}

export default Footer