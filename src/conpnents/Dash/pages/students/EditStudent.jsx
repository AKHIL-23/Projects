import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import AddForm from './createComponents/AddForm';
import Profile from './createComponents/Profile';





const EditStudent = () => {


    let param = useParams();
    // console.log(param._id);

    // useEffect(() => {
    //     fetch(`http://localhost:8000/api/zn/edit/:_id`, {
    //         method: 'PUT',
    //         // body: JSON.stringify(values),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }

    //     }).then(res => res.json())
    //         .then(res => console.log(res));

    // }, [])


    return (
        <>
            <div className='h-screen'>
                <div className='mt-2 mb-4'>
                    <span className='text-xs'>EDIT</span>
                    <h1 className='text-xl'>Edit Profile</h1>
                </div>
                <div className='grid grid-cols-12 gap-6 h-fit'>
                    <div className='col-span-12 md:col-span-4'>
                        <Profile />
                    </div>
                    <div className='col-span-12 md:col-span-8'>
                        <AddForm />
                    </div>

                </div>
            </div>

        </>
    )
}

export default EditStudent