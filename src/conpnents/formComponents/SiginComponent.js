import React, { useState } from 'react'
import FormInput from './FormInput';
import './SiginComponent.css';
// import Validation from './ValidationFunctions.js';
import loginValidation from './loginValidation.js';
import { storeToken } from '../../state/LocalStorageService';
import { setAuthToken } from '../../state/features/AuthTokenSlice';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
const SiginComponent = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });


    const [error, setError] = useState({});


    let inputs = [
        {
            id: 1,
            type: "text",
            name: "email",
            label: "email",
            error: error.email
        },
        {
            id: 2,
            type: "password",
            name: "password",
            label: "Password",
            error: error.password
        }
    ]
    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });

    }
    const validatorAll = () => {

        setError(loginValidation(values))

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (error.submitStatus) {
            const response = await fetch("http://localhost:8000/api/zn/user/signin", {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json()
            // setTemp(json)
            alert(json.message)
            // console.log(json);
            if (json.status) {

                storeToken(json.authToken)
                dispatch(setAuthToken(json.authToken))

                navigate("/dashboard");

            }

        }



    }

    return (
        <>
            <section className='flex flex-col justify-center h-screen'>
                <h1 className=' mb-14 text-center text-5xl text-blue-600'>Get Started !</h1>
                <div className=' flex  justify-center items-start xl:items-center   '>

                    <form action="" id='signin-form' onSubmit={handleSubmit} autoComplete="off" className='space-y-2 md:space-y-4 p-4 md:p-11
                    border rounded-xl border-none ring-2 '>
                        {inputs.map(data => <FormInput key={data.id} data={data} value={values[inputs.name]} onChange={onChange} ringclr="blue" />)}

                        {/* Checkbox jsx  */}
                        <div className='  w-full space-x-1'>
                            <input type="checkbox" id='term' className='w-10 h-4 border-none ' required />
                            <label htmlFor="term">Accept Terms and Conditions.</label>

                        </div>


                        <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-3 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold' type="submit" onClick={validatorAll}>Login</button>


                        <div className=' w-full relative border-t-4  space-y-4 pb-4' >
                            <p className='absolute -top-5 left-1/2 lg:left-42 px-3 xl:left-40 bg-white'>or</p>

                            <div className=' text-center py-3   rounded-md cursor-pointer hover:bg-blue-100 ring-1 '>
                                <i className="fa-brands fa-google-plus-g mr-2 text-2xl text-red-600 "></i>
                                <span>Continue with Google</span>
                            </div>
                            <div className=' text-center py-3  rounded-md cursor-pointer hover:bg-blue-100 ring-1 '>
                                <i className="fa-brands fa-facebook mr-2 text-2xl text-blue-600"></i>
                                <span>Continue with Google</span>
                            </div>

                        </div>


                    </form>
                </div>
            </section>


        </>
    )
}

export default SiginComponent;

