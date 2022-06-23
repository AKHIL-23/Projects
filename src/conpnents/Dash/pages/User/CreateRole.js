import React from 'react'
import { useState } from 'react'

const CreateRole = () => {

    const [rolename, setrolename] = useState('')
    const [err, seterr] = useState('')


    const onChangeHandler = (e) => {
        setrolename(e.target.value)
        // console.log(rolename)

    }
    const submitHandler = (e) => {
        e.preventDefault()
        let result = rolename.trim()
        if (!result) {
            seterr('role  field required to fill')

        }
        else if (result.length <= 2) {
            seterr('length should be greater than 2 ')

        }
        else {
            seterr('')
        }
    }
    return (
        <div className='bg-white rounded-md h-full shadow-xl w-5/6 mt-4'>
            <div className='py-3 px-4'>
                <h1 className='text-lg text-slate-400'>Create New Role</h1>

            </div>
            <hr />
            <form action="" className=' shadow-none py-3 px-4 ' onSubmit={submitHandler} >
                <div className='col-span-6  space-y-2'>
                    <label htmlFor="" className='text-sm text-slate-500'>Role Name</label>
                    <input type="text" className='w-full border-2  p-2 rounded-md' value={rolename} name='rolename' onChange={onChangeHandler} />
                    <p className='text-red-600'>{err}</p>

                </div>


                {/* <h1>{temp.message}</h1>  Server Response */}

                <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' >Create Role</button>


            </form>
        </div>
    )
}

export default CreateRole