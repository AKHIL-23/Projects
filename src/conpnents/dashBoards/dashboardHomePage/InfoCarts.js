import React from 'react'

const InfoCarts = (props) => {
    return (
        <div className='col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3   grid grid-cols-12 p-3 rounded-md shadow-xl bg-white'>

            <div className='col-span-8 text-center space-y-2  '>
                <i className={`${props.data.logo}  text-7xl`}></i>
                <p className='text-lg '>{props.data.name}</p>
            </div>
            <div className='col-span-4 flex items-center'>
                <h1 className='text-3xl'>{props.data.number}</h1>
            </div>

        </div>
    )
}

export default InfoCarts