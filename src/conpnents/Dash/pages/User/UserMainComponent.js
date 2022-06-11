import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ListAllRoles } from '../../../../state/servicesApi/UserAuthApi'
// redux store 
import { setRolesList } from '../../../../state/features/UserSlice'
const UserMainComponent = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        const roles = ListAllRoles()
        roles.then((result) => {
            dispatch(setRolesList(result))

        })

    }, [])
    return (

        <>
            <section>
                <div>
                    <NavLink end to="/dashboard/user/register">Register</NavLink>
                    <NavLink end to="/dashboard/user/createrole">Create Role</NavLink>

                </div>
                <div>
                    <Outlet />
                </div>
            </section>

        </>
    )
}

export default UserMainComponent