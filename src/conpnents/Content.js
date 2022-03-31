import React from 'react'

const Content = () => {
    return (
        <section className=" container m-auto grid grid-cols-1 sm:grid-cols-3 p-4 rounded-2xl">
            <div className=" flex items-center ">
                <img src="/assets/img/AllCourseListPage/Android.PNG" alt="" className='' />

            </div>
            <div className=" p-4 flex flex-col justify-center items-center md:items-start sm:col-span-2">
                <h1 className="text-xl m-2 lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-500">Heading</h1>
                <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingt is a long established fact that a reader will be distracted by.,</p>
                <button className='active:bg-blue-900 bg-blue-500 hover:bg-red-600   px-3 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold mt-5    '>More</button>

            </div>

        </section>
    )
}

export default Content