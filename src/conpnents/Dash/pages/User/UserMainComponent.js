import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import { ListAllRoles } from '../../../../state/servicesApi/UserAuthApi'
import { ListAllRoles } from '../../../../state/servicesApi/userAuthApi'
// redux store 
import { setRolesList } from '../../../../state/features/UserSlice'
import { getToken } from '../../../../state/LocalStorageService'
const UserMainComponent = () => {

    const token = getToken()
    const dispatch = useDispatch()
    useEffect(() => {
        const roles = ListAllRoles(token)
        roles.then((result) => {
            dispatch(setRolesList(result))

        })

    }, [])
    return (

        <>
            <section>
                <div>
                    <NavLink end to="/dashboard/user/register" className="bg-blue-500 p-2 text-white rounded-md mr-3">Register</NavLink>
                    <NavLink end to="/dashboard/user/createrole" className="bg-blue-500 p-2 text-white rounded-md mr-3">Create Role</NavLink>

                </div>
                <div>
                    <Outlet />
                </div>
            </section>

        </>
    )
}

export default UserMainComponent