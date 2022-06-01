import React, { useState } from 'react'
import Options from './Options';
import Validation from './ValidationFunctions'

export let statesName = [

    'choose your State Name',
    'Andhra Praesh',
    'Arunachal radesh',
    'Assam',
    'Bihar',
    'Chhattisgah',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Padesh',
    'Jharkhand',
    'Karnataka',
    'Kerala	',
    'Madhya Praesh',
    'Maharashtr',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha	',
    'Punjab	',
    'Rajasthan',
    'Sikkim	',
    'Tamil Nadu',
    'TelanganaHydeabad',
    'Tripura	Agartala',
    'Uttar Pradsh',
    'Uttarakhan	Dehradun ',
    'Gairsain',
    'West Benga',
    // 'Union Territories Name',
    // 'Andaman and Nicobar Islands',
    // 'Chandigarh	',
    // 'Dadra & Nagar Haveli and Daman & Diu	',
    // 'Delhi	',
    // 'Jammu and Kashmir	 ',
    // 'Jammu ',
    // 'Lakshadweep	',
    // 'Puducherry	',
    // 'Ladakh'
];

const SignupComponent = () => {
    const [gender, setGender] = useState("");
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactNumber: "",
        role: "",
        gender: "",

    });

    const ChangeHandler = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
    const [error, setError] = useState({});

    const validatorAll = () => {
        setError(Validation(values))


    }
    const handleSubmit = (event) => {
        event.preventDefault();


    }
    return (
        <>
            <div className='p-4'>
                <form action="" onSubmit={handleSubmit} className='border rounded-md border-none ring-2 p-7  '>

                    <div className='grid grid-cols-12 gap-4 '>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4 mb-4'>
                            <input type="text" id="nameFeild" placeholder=" " name="username" value={values.username} onChange={ChangeHandler} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="nameFeild" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Name</label>
                            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{error.username}</h1>
                        </div>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4  mb-4'>
                            <input type="text" id="emailField" placeholder=" " name="email" value={values.email} onChange={ChangeHandler} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="emailField" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>email</label>
                            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{error.email}</h1>
                        </div>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4 mb-4'>
                            <input type="password" id="password" placeholder=" " name="password" value={values.password} onChange={ChangeHandler} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="password" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>password</label>
                            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{error.password
                            }</h1>
                        </div>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4 mb-4'>
                            <input type="password" id="confirmpassword" placeholder=" " name="confirmPassword" value={values.confirmPassword} onChange={ChangeHandler} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="confirmpassword" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'> confirm Password</label>
                            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{error.confirmPassword}</h1>
                        </div>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4 mb-4'>
                            <input type="number" id="contact-number" placeholder=" " name="contactNumber" value={values.contactNumber} onChange={ChangeHandler} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                            <label htmlFor="contact-number" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Contact Number</label>
                            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{error.contactNumber}</h1>
                        </div>
                        <div className='relative col-span-12 md:col-span-6 xl:col-span-4 mb-4'>
                            <select name="role" id="" className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' value={values.role} required>

                                <option value="Role_title">Select Your Role</option>
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                            </select>
                        </div>

                    </div>

                    <div className='w-full my-5'>

                        <input type="radio" id='male' name='gender' className='mx-3' checked={gender} onChange={() => { setGender("Male") }} /><label htmlFor="male">Male</label>
                        <input type="radio" id='female' name='gender' className='mx-3' checked={gender} onChange={() => { setGender("Female") }} /><label htmlFor="female">Female</label>

                    </div>




                    <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-3 py-2 mb-5 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold ' type="submit" onClick={validatorAll}>Sign up</button>

                    <div className=' w-full relative border-t-4  space-y-4 py-5' >

                        <p className='absolute -top-3 left-1/2 bg-white px-4'>OR</p>

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
        </>
    )
}

export default SignupComponent