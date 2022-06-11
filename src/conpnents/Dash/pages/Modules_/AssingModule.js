import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../../../state/LocalStorageService.js'
import { GetAllModuleList, AssingModuleApi } from '../../../../state/servicesApi/ModuleAuthApi.js';
import { ListAllUsers } from '../../../../state/servicesApi/UserAuthApi.js';
import { fetchUsersRecords } from '../../../../state/features/UserSlice.js';
import { AssinModuleListTORedux } from '../../../../state/features/ModuleSlice.js';

const AssingModule = () => {
    const authtoken = getToken();
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)
    const modules = useSelector((state) => state.module.modules)


    useEffect(() => {
        // Handle all users list fetch user api response 
        let usersData = ListAllUsers(authtoken)
        usersData.then((result) => {
            dispatch(fetchUsersRecords(result))

        })
        // handle all modules list fetch module api response 
        let modules = GetAllModuleList(authtoken)
        modules.then((result) => {
            dispatch(AssinModuleListTORedux(result))
        })
    }, [])


    // FORM SUBMIT HANDLER 
    const submitHandler = async (e) => {
        e.preventDefault();


        const userID = document.getElementById("user_selected_option").value
        console.log(userID, " user id");

        const moduleID = document.getElementById("moudule_selected_option").value
        console.log(moduleID, "module id");

        // let userobj = users.find(data => data._id === userID);
        // let moduleobj = modules.find(data => data._id === moduleID);

        // if (userobj && moduleobj) {

        const data = {
            user_obj: userID,
            module_obj: moduleID
        }
        console.log(data)
        let res = AssingModuleApi(data)
        res.then((result) => {
            // dispatch(AssinModuleListTORedux(result))
            console.log(result)
        })


        // }

        // else {

        //     console.log("something is wrong")

        // }




    }

    return (
        <>
            <div className='bg-white rounded-md h-full shadow-xl  mt-4'>
                <div className='py-3 px-4'>
                    <h1 className='text-lg text-slate-400'>Assing Module</h1>

                </div>
                <hr />
                <form action="" className=' shadow-none py-3 px-4 ' onSubmit={submitHandler} >
                    {/* Name  & Email */}
                    <div className='grid grid-cols-12 gap-3 mt-3'>
                        <div className='col-span-5  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>Module List</label>
                            <select name="" id="moudule_selected_option" className='w-full border-2  p-2 rounded-md'>
                                {
                                    modules.map(module => {
                                        return (<option key={module._id} value={module._id}>{module.module_name}</option>)

                                    })
                                }

                            </select>

                        </div>
                        <div className='col-span-5  space-y-2'>
                            <label htmlFor="" className='text-sm text-slate-500'>User List</label>
                            <select name="" id="user_selected_option" className='w-full border-2  p-2 rounded-md'  >
                                {
                                    users.map(user => {
                                        return (<option key={user._id} value={user._id}>{user.username}</option>)

                                    })
                                }
                            </select>

                        </div>

                        <div className='col-span-2  space-y-2'>
                            <button className='bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded-md mt-8' type='submit' >Assing Module</button>


                        </div>


                    </div>
                    {/* Server Response */}
                    {/* <h1 className={` ${serverres.status ? 'text-green-600' : 'text-red-600'}`} >{serverres.message}</h1> */}


                </form>
            </div>


        </>
    )
}

export default AssingModule