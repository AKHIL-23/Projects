import React, { useState } from 'react'
import Options from './Options';

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

    let [name, setName] = useState("");
    let [email, emailState] = useState("");
    let [pass, passState] = useState("");
    let [Conditions, conditionsState] = useState();
    let [courseName, setCourse] = useState();
    let [contactNumber, setContactNumber] = useState();
    let [cityName, setCittyName] = useState();
    let [radiobtn, setRadiobtn] = useState()

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
    const courseNameChange = (event) => {

        setCourse(event.target.value);

    }
    const contactNumberChanger = (event) => {

        setContactNumber(event.target.value);

    }
    const cityNameChange = (event) => {

        setCittyName(event.target.value);

    }
    const radioHandle = (event) => {
        setRadiobtn(event.checked)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setName("");
        emailState("");
        passState("");
        conditionsState(false);
        setCourse("");
        setContactNumber("");
        setCittyName("");
        setRadiobtn(false);

    }
    return (
        <>
            <div className=''>
                <form action="" onSubmit={handleSubmit} className='m-5  space-y-2 p-4    border   rounded-xl border-none ring-2  '>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 space-y-6 md:col-span-6 md:px-2 '>
                            <div className='relative  '>
                                <input type="text" id="nameFeild" placeholder=" " value={name} onChange={nameChange} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="nameFeild" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Name</label>
                            </div>
                            <div className='relative  '>
                                <input type="text" id="emailField" placeholder=" " value={email} onChange={emailChange} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="emailField" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>email</label>
                            </div>
                            <div className='relative'>
                                <input type="password" id="password" placeholder=" " value={pass} onChange={passChange} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="password" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>password</label>
                            </div>


                        </div>
                        <div className='col-span-12 space-y-6 md:col-span-6 md:px-2'>

                            <div className='relative mt-6 md:mt-0  '>
                                <input type="text" id="courseName" placeholder=" " value={courseName} onChange={courseNameChange} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="courseName" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Course Name</label>
                            </div>
                            <div className='relative'>
                                <input type="number" id="contact-number" placeholder=" " value={contactNumber} onChange={contactNumberChanger} className='bg-transparent w-full  h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="contact-number" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>Contact Number</label>
                            </div>

                            <div className='relative  '>
                                <input type="text" id="city" placeholder=" " value={cityName} onChange={cityNameChange} className='bg-transparent w-full   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required />
                                <label htmlFor="city" className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>City</label>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <select name="" id="" className='bg-transparent w-full md:mt-4   h-11 border-none rounded-md p-1 ring-2 focus:border-blue-500 focus:ring-blue-500  focus:outline-none textbox  ' required>

                            {statesName.map(data => <Options sn={data} clor={'green'} />)}

                        </select>

                    </div>





                    <div className='w-full pt-4'>

                        <input type="radio" id='male' name='gender' className='mx-3' checked={radiobtn} onChange={radioHandle} /><label htmlFor="male">Male</label>
                        <input type="radio" id='female' name='gender' className='mx-3' checked={radiobtn} onChange={radioHandle} /><label htmlFor="female">Female</label>

                    </div>


                    {/* Checkbox jsx  */}
                    <div className='  w-full space-x-1'>
                        <input type="checkbox" id='term' onChange={checkboxChange} checked={Conditions} className='w-10 h-4 border-none ' required />
                        <label htmlFor="term">Accept Terms and Conditions.</label>

                    </div>


                    <div className='flex justify-center py-3 '>
                        <button className='active:bg-blue-900 bg-blue-500 hover:bg-blue-600   px-3 py-2 rounded-md text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold ' type="submit">Sign up</button>
                    </div>


                    <div className=' w-full relative border-t-4  space-y-4 py-5' >
                        {/* <div>
                            <p className='absolute -top-5 left-1/2 lg:left-42 px-3 xl:left-40 bg-white'>or</p>
                        </div> */}
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