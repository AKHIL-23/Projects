import React from 'react'

const IntervierPreparation = () => {
    return (
        <section className=''>
            <div className='container mx-auto grid grid-cols-12 p-10 space-y-3   '>
                <div className='col-span-12 md:col-span-6 md:order-2 xl:flex xl:justify-center xl:items-center     '>
                    <img src="/assets/img/AllCourseListPage/interview.svg" alt="" className='xl:h-3/4 ' />
                </div>
                <div className='p-4 text-justify space-y-3 col-span-12 md:col-span-6 md:order-1 xl:flex xl:flex-col xl:justify-center xl:items-center   '>
                    <h1 className='text-2xl lg:text-3xl text-blue-500'>Interview preparation</h1>
                    <p className='text-sm lg:text-base 2xl:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis expedita fugit eveniet quod, itaque aperiam non suscipit at voluptatum qui minima assumenda quis autem perferendis numquam aliquid maiores facere. Nostrum. lorem
                    </p>
                </div>
            </div>

        </section >
    )
}

export default IntervierPreparation