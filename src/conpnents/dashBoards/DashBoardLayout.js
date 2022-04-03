import React from 'react'

const DashBoardLayout = () => {
    return (
        <section className='mt-16 bg-yellow-500 '>

            <div className='Tabs grid grid-cols-12'>
                <div className='nav col-span-3 w-full  bg-red-400 p-0'>
                    <ul className='bg-green-400 '>
                        <li className='mt-0'>Home</li>
                        <li className='mt-0'>Course</li>
                        <li className='mt-0'>More</li>
                    </ul>
                </div>
                <div className="outlet col-span-9 bg-red-600">
                    comtent here
                </div>

            </div>
        </section>
    )
}

export default DashBoardLayout