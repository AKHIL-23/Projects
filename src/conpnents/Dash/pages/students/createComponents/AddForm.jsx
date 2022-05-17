import React, { useState } from 'react'
import { statesName } from '../../../../formComponents/SignupComponent'
import Options from '../../../../formComponents/Options'
import Validation from '../validateStudentFrontend'
const AddForm = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
    gender: "",
    address: "",
    status: "",
    city: "",
    state: "",


  });

  const onChange = (event) => {

    setValues({ ...values, [event.target.name]: event.target.value });


  }
  const [error, setError] = useState({});

  // Form validation logic
  const validateAll = async () => {
    await setError(Validation(values))

  }

  //Response Message 
  const [temp, setTemp] = useState("here!")
  const updateHandler = (e) => {

    e.preventDefault();

    if (error.submitStatus) {

      fetch('http://localhost:8000/api/zn/addstudent', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(res => res.json())
        .then(res => setTemp(res.message));


    }


  }

  return (
    <div className='bg-white rounded-md h-full shadow-xl'>
      <div className='py-3 px-4'>
        <h1 className='text-lg text-slate-400'> Account Details</h1>
      </div>
      <hr />
      <form action="" className=' shadow-none py-3 px-4 ' onSubmit={updateHandler}>
        {/* Name  & Email */}
        <div className='grid grid-cols-12 gap-3 mt-3'>

          <div className='col-span-12 sm:col-span-6 space-y-2'>
            <label htmlFor="" className='text-sm text-slate-500'>Name</label>
            <input type="text" className='w-full border-2  p-2 rounded-md' name='name' value={values.name} onChange={onChange} />
            <p className='text-xs text-red-600'>{error.name}</p>
          </div>

          <div className='col-span-12 sm:col-span-6 space-y-2'>
            <label htmlFor="" className='text-sm text-slate-500'>Email</label>
            <input type="text" className='w-full border-2  p-2 rounded-md' name='email' value={values.email} onChange={onChange} />
            <p className='text-xs text-red-600'>{error.email}</p>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-3 mt-3'>
          <div className='col-span-8 space-y-2'>
            <label htmlFor="" className='text-sm text-slate-500'>contact Number</label>
            <input type="number" className='w-full border-2  p-2 rounded-md' name='contactNumber' value={values.contactNumber} onChange={onChange} />
            <p className='text-xs text-red-600'>{error.Mnumber}</p>
          </div>
          <div className='col-span-4 space-y-2'>
            <label htmlFor="" className='text-sm text-slate-500'>Age</label>
            <input type="number" className='w-full border-2  p-2 rounded-md' name='age' value={values.age} onChange={onChange} />
            <p className='text-xs text-red-600'>{error.age}</p>
          </div>

        </div>

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

        </div>


        <div className='mt-3'>
          <label htmlFor="" className='text-sm text-slate-500' >Address</label>
          <input type="text" className='w-full border-2 p-2 rounded-md' name='address' onChange={onChange} />
          <p className='text-xs text-red-600'>{error.address}</p>
        </div>

        <div className='grid grid-cols-12 gap-3 mt-3'>

          <div className='col-span-12 sm:col-span-2 space-y-2 '>
            <label htmlFor="" className='text-sm text-slate-500'>status</label>

            <select id="" className='w-full border-2  p-2 rounded-md' name="status" value={values.status} onChange={onChange}  >
              <option value="" disabled className=''>choose... </option>
              <option value="Active">Active</option>
              <option value="Unactive">Unactive</option>
            </select>
            <p className='text-xs text-red-600'>{error.status}</p>
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

        <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' onClick={validateAll}>Update Account</button>

      </form>
    </div>
  )
}

export default AddForm