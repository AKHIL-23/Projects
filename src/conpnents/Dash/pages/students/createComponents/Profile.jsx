import React from 'react'
import Avtar from './user-36-01.jpg'

const Profile = () => {
  return (
    <div className='bg-white rounded-md shadow-xl'>
        <div className='p-4 '>
           <div className='flex flex-col items-center justify-start py-5 '>
           <img src={Avtar} alt="user" className='rounded-full' />
            <h1 className='text-2xl text-slate-600 mt-4'>Sierra Brooks</h1>
            <h2 className='text-slate-400 '>Project Manager</h2>
           </div>
            <hr />
            <p className='text-slate-400 mt-2 '>Description</p>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</p>
        </div>


    </div>
  )
}

export default Profile