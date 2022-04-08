import React, { useState } from 'react'


const SignupComponent = () => {

    let [name, setName] = useState("");
    let [email, emailState] = useState("");
    let [pass, passState] = useState("");
    let [Conditions, conditionsState] = useState();

    const nameChange = (event) => {
        setName(event.target.value);


    }

    const emailChange = (event) => {
        emailState(event.target.value);

    }
    const passChange = (event) => {

        passState(event.target.value);

    }
    const checkboxChange = (event) => {

        conditionsState(event.checked);


    }


    const handleSubmit = (event) => {
        event.preventDefault();

        setName("");
        emailState("");
        passState("");
        conditionsState(false);




    }
    return (
        <>
            <form action="" onSubmit={handleSubmit} className='m-5  space-y-7  md:space-y-9 p-5 md:p-11
             border  flex flex-col md:items-center md:justify-center rounded-xl border-none ring-2  '>
                <div className='relative  '>
                    <input type="text" id="nameFeild" placeholder=" " value={name} onChange={nameChange} className='bg-transparent w-full md:w-96  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                    <label htmlFor="nameFeild" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Name</label>
                </div>
                <div className='relative  '>
                    <input type="text" id="emailField" placeholder=" " value={email} onChange={emailChange} className='bg-transparent w-full md:w-96  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                    <label htmlFor="emailField" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>email</label>
                </div>


                <div className='relative'>
                    <input type="password" id="password" placeholder=" " value={pass} onChange={passChange} className='bg-transparent w-full md:w-96 h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                    <label htmlFor="password" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>password</label>
                </div>
                <div className='w-full'>

                    <input type="checkbox" id='male' name='gender' className='mx-3' /><label htmlFor="male">Male</label>
                    <input type="checkbox" id='female' name='gender' className='mx-3' /><label htmlFor="female">Female</label>

                </div>


                {/* Checkbox jsx  */}
                <div className='  w-full space-x-1'>
                    <input type="checkbox" id='term' onChange={checkboxChange} checked={Conditions} className='w-10 h-4 border-none ' required />
                    <label htmlFor="term">Accept Terms and Conditions.</label>

                </div>


                <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-3 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold' type="submit">Sign in</button>


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
        </>
    )
}

export default SignupComponent