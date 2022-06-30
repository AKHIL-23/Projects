import React from 'react'
import { useState } from 'react'
import Avtar from '../../images/user-36-01.jpg'
import { useSelector } from 'react-redux'
import { statesName } from '../../../formComponents/SignupComponent'
import Options from '../../../formComponents/Options'
import Validation from './validateStudentFrontend.js'

const Profile = () => {
    //Redux store 
    const logeduser = useSelector((state) => state.user.user);
    const [values, setValues] = useState(logeduser)
    console.log(values)

    const onChange = (event) => {

        setValues({ ...values, [event.target.name]: event.target.value });

    }
    const [error, setError] = useState({});
    // Form validation logic
    const validateAll = async () => {
        await setError(Validation(values))

    }
    const saveChangeHandler = (e) => {
        e.preventDefault()
    }
    //Response Message 
    const [temp, setTemp] = useState()
    return (
        <>
            <div className='h-screen'>
                <div className='mt-2 mb-4'>
                    <span className='text-xs'>Profile</span>
                    <h1 className='text-xl'>{values.username}</h1>
                </div>
                <div className='grid grid-cols-12 gap-6 h-fit'>
                    <div className='col-span-12 md:col-span-4'>
                        <div className='bg-white rounded-md shadow-xl'>
                            <div className='p-4 '>
                                <div className='flex flex-col items-center justify-start py-5 '>
                                    <img src={Avtar} alt="user" className='rounded-full' />
                                    {/* <h1 className='text-2xl text-slate-600 mt-4'>{studentRecord.name}</h1> */}
                                    <h2 className='text-slate-400 '>{values.email}</h2>
                                </div>
                                <hr />
                                {/* <p className='text-slate-400 mt-2 '>Description {studentRecord.email}</p> */}
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</p>
                            </div>


                        </div>
                    </div>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='bg-white rounded-md h-full shadow-xl'>
                            <div className='py-3 px-4'>
                                <h1 className='text-lg text-slate-400'> Account Details {values.username}</h1>

                            </div>
                            <hr />
                            <form action="" className=' shadow-none py-3 px-4 ' onSubmit={saveChangeHandler} >
                                {/* Name  & Email */}
                                <div className='grid grid-cols-12 gap-3 mt-3'>

                                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                                        <label htmlFor="" className='text-sm text-slate-500'>Name</label>
                                        <input type="text" className='w-full border-2  p-2 rounded-md' name='username' value={values.username} onChange={onChange} />
                                        <p className='text-xs text-red-600'>{error.name}</p>
                                    </div>

                                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                                        <label htmlFor="" className='text-sm text-slate-500'>Email</label>
                                        <input type="text" className='w-full border-2  p-2 rounded-md' name='email' value={values.email} onChange={onChange} disabled />
                                        <p className='text-xs text-red-600'>{error.email}</p>
                                    </div>
                                </div>

                                <div className='grid grid-cols-12 gap-3 mt-3'>
                                    <div className='col-span-4 space-y-2'>
                                        <label htmlFor="" className='text-sm text-slate-500'>contact Number</label>
                                        <input type="number" className='w-full border-2  p-2 rounded-md' name='contactNumber' value={values.contactNumber} onChange={onChange} />
                                        <p className='text-xs text-red-600'>{error.Mnumber}</p>
                                    </div>



                                </div>

                                <div className='flex items-start justify-start mt-2 space-x-3'>

                                    <div>
                                        {/* onClick={() => { setValues(pre => { return { ...values, gender: "Male" } }) }} */}
                                        <input type="radio" id="male_gen" className='mr-2' name='gender' defaultChecked={values.gender == 'Male' ? true : false} />
                                        <label htmlFor="male_gen" ><span className='text-sm text-slate-500 cursor-pointer'>Male</span></label>

                                    </div>
                                    <div>
                                        <input type="radio" id="female_gen" className='mr-2' name='gender ' defaultChecked={values.gender == 'Female' ? true : false} />
                                        <label htmlFor="female_gen"><span className='text-sm text-slate-500 cursor-pointer' >Female</span></label>
                                    </div>
                                    <div>
                                        <input type="radio" id="others_gen" className='mr-2' name='gender' defaultChecked={values.gender == 'Others' ? true : false} />
                                        <label htmlFor="others_gen"><span className='text-sm text-slate-500 cursor-pointer' >Others</span></label>
                                    </div>

                                </div>


                                <div className='mt-3'>
                                    <label htmlFor="" className='text-sm text-slate-500' >Address</label>
                                    <input type="text" className='w-full border-2 p-2 rounded-md' name='address' value={values.address} onChange={onChange} />
                                    <p className='text-xs text-red-600'>{error.address}</p>
                                </div>

                                <div className='grid grid-cols-12 gap-3 mt-3'>

                                    <div className='col-span-12 sm:col-span-2 space-y-2 '>
                                        <label htmlFor="" className='text-sm text-slate-500'>Age</label>
                                        <input type="number" className='w-full border-2  p-2 rounded-md' name='age' value={values.age} onChange={onChange} />
                                        <p className='text-xs text-red-600'>{error.age}</p>
                                    </div>

                                    <div className='col-span-12 sm:col-span-5 space-y-2'>
                                        <label htmlFor="" className='text-sm text-slate-500'>City</label>
                                        <input type="text" className='w-full border-2  p-2 rounded-md' name="city" value={values.city} onChange={onChange} />
                                        <p className='text-xs text-red-600'>{error.city}</p>
                                    </div>
                                    <div className='col-span-12 sm:col-span-5 space-y-2 flex flex-col items-start justify-center  '>
                                        <label htmlFor="" className='text-sm text-slate-500'>State</label>
                                        <select id="" className='w-full p-2 border-2 rounded-md' name="state" value={values.state} onChange={onChange} >
                                            {statesName.map(data => <Options key={data} sn={data} clor={'slate'} />)}
                                        </select>
                                        <p className='text-xs text-red-600'>{error.state}</p>
                                    </div>


                                </div>
                                <h1>{temp}</h1>

                                <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' onClick={validateAll}>Save Changes</button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Profile