import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainFacultyComponent = () => {
    return (
        <>
            <section>
                <div>
                    <NavLink end to="/dashboard/faculty/markAttendance" className="bg-blue-500 p-2 text-white rounded-md mr-3">Mark Students Attendance</NavLink>
                    <NavLink end to="/dashboard/faculty/datewiseattendance" className="bg-blue-500 p-2 text-white rounded-md mr-3">View Students Attendance</NavLink>

                </div>
                <div>
                    <Outlet />
                </div>
            </section>

        </>
    )
}

export default MainFacultyComponent