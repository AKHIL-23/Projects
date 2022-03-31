import React from 'react'

const StudentTestimonialItem = () => {
    return (
        <>
            <div className=" item my-11 mx-5  flex justify-center items-center p-4 rounded-md  flex-col xl:flex-row  shadow-xl shadow-black-500/40  ">
                <div>
                    <img src="/assets/img/studentTestimonial/student_1.png" className='  ' alt="" />
                </div>
                <div>
                    <h1 className='text-xl text-blue-500 '>Lorem ipsum dolor </h1>
                    <div className='space-x-1'>
                        <i class="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i class="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i class="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i class="fa-solid fa-star text-xs text-yellow-400"></i>
                        <i class="fa-solid fa-star text-xs text-gray-400"></i>

                    </div>
                    <div className='space-x-4'>
                        <i class="fa-brands fa-facebook hover:text-blue-500"></i>
                        <i class="fa-brands fa-instagram hover:text-pink-400"></i>
                        <i class="fa-brands fa-twitter hover:text-blue-400"></i>
                        <i class="fa-brands fa-linkedin-in hover:text-blue-700"></i>

                    </div>
                    <p className='text-justify text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam harum nulla quas culpa, ducimus architecto doloribus aspernatur  nobis. </p>
                </div>


            </div >
        </>
    )
}

export default StudentTestimonialItem