import React from 'react'
import { useState } from 'react'
import ListAllModules from './ListAllModules'
const AddNewModule = () => {
    const [modules, setModule] = useState(
        {
            module_name: "",
            component_path: "",
            controller_path: "",
            icon_path: ""
        });

    const onChange = (event) => {

        setModule({ ...modules, [event.target.name]: event.target.value });
    }

    //server response usestate variable 
    const [serverres, setServerres] = useState({});

    const submitHandler = async (e) => {
        e.preventDefault();


        const response = await fetch("http://localhost:8000/api/zn/module/createNewMoudule", {
            method: 'POST',
            body: JSON.stringify(modules),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json()
        setServerres(json)

        //Code to clear module form 
        if (json.status) {
            e.target.reset();
            alert(json.message)
            await setModule({
                module_name: "",
                component_path: "",
                controller_path: "",
                icon_path: ""
            })
            await setServerres({})
        }
    }

    return (
        <>

            {/* add new module code  */}
            <div className='bg-white rounded-md h-full shadow-xl  mt-4'>
                <div className='py-3 px-4'>
                    <h1 className='text-lg text-slate-400'> Add Module</h1>

                </div>
                <hr />
                <form action="" className=' shadow-none py-3 px-4 ' onSubmit={submitHandler} >
                    {/* Name  & Email */}
                    <div className='grid grid-cols-12 gap-3 mt-3'>



                        <div className='col-span-6  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Module Name</label>
                            <input type="text" className='w-full border-2  p-2 rounded-md' name='module_name' value={modules.module_name} onChange={onChange} />

                        </div>
                        <div className='col-span-6  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Module Component Path</label>
                            <input type="text" className='w-full border-2  p-2 rounded-md' name='component_path' value={modules.component_path} onChange={onChange} />

                        </div>
                        <div className='col-span-6  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Module controller Path</label>
                            <input type="text" className='w-full border-2  p-2 rounded-md' name='controller_path' value={modules.controller_path} onChange={onChange} />

                        </div>
                        <div className='col-span-6  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Svg icon Path</label>
                            <input type="text" className='w-full border-2  p-2 rounded-md' name='icon_path' value={modules.icon_path} onChange={onChange} />

                        </div>


                    </div>
                    <h1 className={` ${serverres.status ? 'text-green-600' : 'text-red-600'}`} >{serverres.message}</h1>  {/* Server Response */}

                    <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-5' type='submit' >Create Module</button>

                </form>
            </div>

            {/* list all module  */}
            <div className='bg-white rounded-md h-screen shadow-xl mt-5 p-5' >
                <ListAllModules />
            </div>



        </>
    )
}

export default AddNewModule