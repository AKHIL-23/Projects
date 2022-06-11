import React, { useEffect, useState } from 'react'
import Validation from '../../../formComponents/ValidationFunctions.js';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
// import { fetchUserRecord, clearFetchRecord } from '../../state/features/UserSlice.js';
// import { storeToken } from '../../state/LocalStorageService';


const RegisterUser = () => {
    let navigate = useNavigate();


    // Redux 
    // const dispatch = useDispatch();
    const roles = useSelector((state) => state.user.roles);

    const [values, setValues] = useState({
        username: "",
        email: "",
        contactNumber: "",
        password: "",
        confirmPassword: "",
        role: "",
        gender: "",
    });
    // useEffect(() => {
    //     setValues(userRecord)
    // }, [userRecord])



    const onChange = (event) => {

        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const [error, setError] = useState({});

    // Form validation logic
    // const validateAll = async () => {
    //     await setError(Validation(values))

    //     // dispatch(fetchUserRecord(values))

    // }


    //Response Message 
    const [temp, setTemp] = useState({})
    // Temp solution to clear form 
    const clearForm = async (e) => {
        await setValues({
            username: "",
            email: "",
            contactNumber: "",
            password: "",
            confirmPassword: "",
            role: "",
            gender: "",
        })
        e.target.reset();
        await setError({});


    }

    const RegisterHandler = async (e) => {

        e.preventDefault();
        // if (error.submitStatus) {
        //     // Register New User API call
        //     const response = await fetch("http://localhost:8000/api/zn/user/register", {
        //         method: 'POST',
        //         body: JSON.stringify(values),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     const json = await response.json()
        //     setTemp(json)

        //     console.log(json);
        //     if (json.status) {

        //         // storeToken(json.authToken)
        //         // await navigate("/dashboard");
        //         clearForm(e)

        //     }




        // }
        console.log(values)

    }






    return (
        <div className='bg-white rounded-md h-full shadow-xl w-5/6 mt-4'>
            <div className='py-3 px-4'>
                <h1 className='text-lg text-slate-400'> Registration Form {values.name}</h1>

            </div>
            <hr />
            <form action="" className=' shadow-none py-3 px-4 ' onSubmit={RegisterHandler}>
                {/* Name  & Email */}
                <div className='grid grid-cols-12 gap-3 mt-3'>

                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Name</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='username' value={values.username} onChange={onChange} />
                        <p className='text-xs text-red-600'>{error.username}</p>
                    </div>

                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Email</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='email' value={values.email} onChange={onChange} />
                        <p className='text-xs text-red-600'>{error.email}</p>
                    </div>
                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Password</label>
                        <input type="password" className='w-full border-2  p-2 rounded-md' name='password' value={values.password} onChange={onChange} />
                        <p className='text-xs text-red-600'>{error.password}</p>
                    </div>
                    <div className='col-span-12 sm:col-span-6 space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Confirm password</label>
                        <input type="password" className='w-full border-2  p-2 rounded-md' name='confirmPassword' value={values.confirmPassword} onChange={onChange} />
                        <p className='text-xs text-red-600'>{error.confirmPassword}</p>
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-3 mt-3'>
                    <div className='col-span-6 space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Contact Number</label>
                        <input type="number" className='w-full border-2  p-2 rounded-md' name='contactNumber' value={values.contactNumber} onChange={onChange} />
                        <p className='text-xs text-red-600'>{error.Mnumber}</p>
                    </div>
                    <div className='col-span-6  space-y-2 '>
                        <label htmlFor="" className='text-sm text-slate-500'>Role</label>

                        <select id="" className='w-full border-2  p-2 rounded-md' name="role" value={values.role} onChange={onChange}  >
                            {/* <option value="" disabled className=''>choose... </option>
                            <option value="Student">Student</option>
                            <option value="Faculty">Faculty</option> */}
                            {
                                roles.map(role => {
                                    return (<option key={role._id} value={role._id}>{role.rolename}</option>)


                                })

                            }

                        </select>
                        <p className='text-xs text-red-600'>{error.role}</p>
                    </div>

                </div>
                {/* Gender section start  */}
                <div className='flex items-start justify-start mt-2 space-x-3'>

                    <div>

                        <input type="radio" id="male_gen" className='mr-2' name='gender' onClick={() => { setValues(pre => { return { ...values, gender: "Male" } }) }} />
                        <label htmlFor="male_gen"><span className='text-sm text-slate-500 cursor-pointer'>Male</span></label>

                    </div>
                    <div>
                        <input type="radio" id="female_gen" className='mr-2' name='gender' onClick={() => { setValues(pre => { return { ...values, gender: "Female" } }) }} />
                        <label htmlFor="female_gen"><span className='text-sm text-slate-500 cursor-pointer' >Female</span></label>
                    </div>
                    <div>
                        <input type="radio" id="others_gen" className='mr-2' name='gender' onClick={() => { setValues(pre => { return { ...values, gender: "Others" } }) }} />
                        <label htmlFor="others_gen"><span className='text-sm text-slate-500 cursor-pointer' >Others</span></label>
                    </div>
                    <p className='text-xs text-red-600'>{error.gender}</p>

                </div>
                {/* Gender section end  */}

                <h1>{temp.message}</h1>{/*   Server Response */}

                <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' >Registration</button>
                {/* onClick={validateAll} */}

            </form>
        </div>
    )
}

export default RegisterUser