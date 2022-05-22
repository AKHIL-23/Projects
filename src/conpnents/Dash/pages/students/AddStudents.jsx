import React from 'react'
import AddForm from './createComponents/AddForm';
import Profile from './createComponents/Profile';
// import { useEffect } from 'react';

// Redux 
import { useSelector } from 'react-redux';


function AddStudents() {



    const newStudent = useSelector((state) => state.student.student);
    return (
        <div className='h-screen'>
            <div className='mt-2 mb-4'>
                <span className='text-xs'>OVERVIEW {newStudent.name}</span>
                <h1 className='text-xl'>User Profile</h1>
            </div>
            <div className='grid grid-cols-12 gap-6 h-fit'>
                <div className='col-span-12 md:col-span-4'>
                    <Profile />
                </div>
                <div className='col-span-12 md:col-span-8'>
                    <AddForm record={newStudent} btnText={"Create New Student"} />
                </div>

            </div>
        </div>
    );
}

export default AddStudents