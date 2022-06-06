import React, { useState, useEffect } from 'react'
import loginValidation from './loginValidation';
import { useNavigate } from "react-router-dom";
import { storeToken } from '../../state/LocalStorageService';

// REDUX AUTHTOKEN SLICE 
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../../state/features/AuthTokenSlice';
import { getToken } from '../../state/LocalStorageService';

const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();


    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        role: "",

    });
    const onChange = (event) => {

        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const [error, setError] = useState({});
    const validateAll = async () => {
        await setError(loginValidation(values))
    }
    //Response Message 
    const [temp, setTemp] = useState({})
    // Temp solution to clear form 
    const clearForm = async (e) => {
        await setValues({
            username: "",
            email: "",
            password: "",
            role: "",

        })
        e.target.reset();
        await setError({});

    }

    //Login handler
    const LoginHandler = async (e) => {

        e.preventDefault();

        // Login APi call 
        if (error.submitStatus) {
            const response = await fetch("http://localhost:8000/api/zn/user/signin", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json()
            setTemp(json)


            // console.log(json);
            if (json.status) {

                storeToken(json.authToken)
                dispatch(setAuthToken(json.authToken))

                // navigate("/dashboard");

            }

            // fetch('http://localhost:8000/api/zn/user/register', {
            //     method: 'POST',
            //     body: JSON.stringify(values),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }

            // }).then(res => res.json())
            //     .then(res => setTemp(res.message));

            // Temp solution to clear form 
            // clearForm();
            // e.target.reset();

        }

    }

    // set auth token in redux store's authtoken slice 
    // let token = getToken()

    // useEffect(() => {


    // }, [token, dispatch])

    return (
        <>
            <div className='bg-white rounded-md h-full shadow-xl w-5/6 mt-4'>
                <div className='py-3 px-4'>
                    <h1 className='text-lg text-slate-400'> Login Form {values.name}</h1>

                </div>
                <hr />
                <form action="" className=' shadow-none py-3 px-4 ' onSubmit={LoginHandler}>
                    {/* Name  & Email */}
                    <div className='grid grid-cols-12 gap-3 mt-3'>



                        <div className='col-span-12  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Email</label>
                            <input type="text" className='w-full border-2  p-2 rounded-md' name='email' value={values.email} onChange={onChange} />
                            <p className='text-xs text-red-600'>{error.email}</p>
                        </div>
                        <div className='col-span-12  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Password</label>
                            <input type="password" className='w-full border-2  p-2 rounded-md' name='password' value={values.password} onChange={onChange} />
                            <p className='text-xs text-red-600'>{error.password}</p>
                        </div>
                        <div className='col-span-12  space-y-2 '>
                            <label htmlFor="" className='text-sm text-slate-500'>Role</label>

                            <select id="" className='w-full border-2  p-2 rounded-md' name="role" value={values.role} onChange={onChange}  >
                                <option value="" disabled className=''>choose... </option>
                                <option value="Student">Student</option>
                                <option value="Faculty">Faculty</option>
                            </select>
                            <p className='text-xs text-red-600'>{error.role}</p>
                        </div>

                    </div>
                    <h1>{temp.message}</h1>  {/* Server Response */}

                    <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' onClick={validateAll}>Login</button>

                </form>
            </div>
        </>
    )
}

export default Login