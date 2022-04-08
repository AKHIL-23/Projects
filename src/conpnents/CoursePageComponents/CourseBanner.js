import React from 'react'
import { useParams } from 'react-router-dom'

const CourseBanner = (props) => {
    let url = useParams();
    console.log(url);
    return (
        <section className=' relative grid grid-cols-12 courseBanner  pt-14 p-5 sm:pt-20 2xl:pt-0' >


            <div className='col-span-12 sm:col-span-5 lg:col-span-4 2xl:flex 2xl:flex-col 2xl:justify-center '><img src="/assets/img/AllCourseListPage/Android.PNG" alt="" /></div>
            <div className='col-span-12 sm:col-span-7 lg:col-span-8 2xl:flex 2xl:flex-col 2xl:justify-center    space-y-2'>
                <h1 className='text-xl sm:text-2xl lg:text-3xl'>Android </h1>
                <p className='text-sm'>for Beginners and Experienced Learners</p>
                <p className='text-sm lg:text-lg'>Learn to build publish worthy Android Apps using its<br /> latest development language</p>
                <p className='text-sm'>$ course fee</p>
                <div className='space-x-1'>
                    <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                    <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                    <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                    <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                    <i className="fa-solid fa-star text-xs text-gray-400"></i>

                </div>
                <div>
                    <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-3 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold' >Enroll Now</button>
                </div>


            </div>

        </section>

    )
}

export default CourseBanner