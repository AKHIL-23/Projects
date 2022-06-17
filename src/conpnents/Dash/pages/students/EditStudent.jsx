import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AddForm from './createComponents/AddForm';
import Profile from './createComponents/Profile';

// Redux 
import { useDispatch } from 'react-redux';
import { getStudentRecord, clearFetechRecord } from './../../../../state/features/studentSlice'





const EditStudent = () => {
    // Redux 
    const dispatch = useDispatch();
    let param = useParams();
    dispatch(getStudentRecord(param._id))

    useEffect(() => {
        return () => {
            dispatch(clearFetechRecord())
        };
    }, [])


    return (
        <>
            <div className='h-screen'>
                <div className='mt-2 mb-4'>
                    <span className='text-xs'>EDIT</span>
                    <h1 className='text-xl'>heading</h1>
                </div>
                <div className='grid grid-cols-12 gap-6 h-fit'>
                    <div className='col-span-12 md:col-span-4'>
                        <Profile />
                    </div>
                    <div className='col-span-12 md:col-span-8'>
                        <AddForm btnText={"Update Student Record"} />
                    </div>

                </div>
            </div>

        </>
    )
}

export default EditStudent