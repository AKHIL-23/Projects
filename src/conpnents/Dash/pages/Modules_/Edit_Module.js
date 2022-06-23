import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import './Edit_Module.css'
import { EditModuleApi } from '../../../../state/servicesApi/ModuleAuthApi'
import { useNavigate } from 'react-router-dom'
const Edit_Module = (props) => {
    const [value, setvalue] = useState({})
    const navigate = useNavigate()
    const edit_data = useSelector((state) => state.module.module)
    useEffect(() => {
        setvalue(edit_data)
    }, [])

    const onChanger = (event) => {
        setvalue({ ...value, [event.target.name]: event.target.value });
        // console.log(value);

    }

    const submitHandler = (event) => {
        event.preventDefault()

        let moduleRes = EditModuleApi(value)
        moduleRes.then((result) => {

            alert(result.message)
            navigate('/dashboard')

        })
    }

    // const [closebtn, setclosebtn] = useState(props.collapseData)
    // console.log(closebtn);
    return (
        <>
            <section className=' absolute top-0 left-0 z-20 w-full h-screen flex justify-center items-center edit_tranparent_before '>
                <div className="w-1/2  bg-white rounded-md p-5 relative">


                    <i className="fa-solid fa-xmark text-red-600 absolute top-3 right-5 cursor-pointer text-xl" onClick={() => {

                        props.closeEditModelhandler(!props.collapseData)
                    }}></i>

                    <div className='col-span-6  space-y-2'>
                        <label htmlFor="" className='text-sm text-slate-500'>Module Name</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='module_name' value={value.module_name} onChange={onChanger} />
                        <label htmlFor="" className='text-sm text-slate-500'>Component path</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='component_path' value={value.component_path} onChange={onChanger} />
                        <label htmlFor="" className='text-sm text-slate-500'>Controller path</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='controller_path' value={value.controller_path} onChange={onChanger} />
                        <label htmlFor="" className='text-sm text-slate-500'>Icon Class Name</label>
                        <input type="text" className='w-full border-2  p-2 rounded-md' name='icon_path' value={value.icon_path} onChange={onChanger} />
                        <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-10' type='submit' onClick={submitHandler} >Update Module</button>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Edit_Module