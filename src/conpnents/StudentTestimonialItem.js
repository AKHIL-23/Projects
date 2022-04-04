import React from 'react'
import './StudentTestimonialItem.css'

const StudentTestimonialItem = (props) => {
    return (
        <>
            <div className=" item my-20 mx-5    p-4 pt-20 rounded-lg bg-blue-500  shadow-xl shadow-black-500/40 relative  ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-0 left-0'><path fill="#ffff" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,234.7C640,256,800,224,960,186.7C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

                <div className='  w-28 h-28  rounded-full outline-double outline-4 outline-blue-500 absolute -top-12 bg-white left-0 '>
                    <img src="/assets/img/studentTestimonial/student_1.png" className='' alt="" />
                </div>
                <div className='space-y-1  '>
                    <h1 className='text-xl xl:text-2xl text-white '>{props.studentData[2].studentName}</h1>
                    <div className='space-x-1'>
                        <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i className="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i className="fa-solid fa-star text-xs text-gray-400"></i>

                    </div>
                    <div className='space-x-4'>
                        <i className="fa-brands fa-facebook text-white hover:text-blue-900"></i>
                        <i className="fa-brands fa-instagram text-white hover:text-pink-400"></i>
                        <i className="fa-brands fa-twitter text-white hover:text-blue-900"></i>
                        <i className="fa-brands fa-linkedin-in text-white hover:text-blue-900"></i>

                    </div>
                    <p className='text-justify text-sm text-white '>{props.studentData[2].studentMessage} </p>
                </div>


            </div >
        </>
    )
}

export default StudentTestimonialItem