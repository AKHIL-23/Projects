import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../Dashboard'
import DashHome from '../../DashHome'
import AddStudents from '../../students/AddStudents'
import ListAllStudents from './ListAllStudents'
import EditStudent from '../../students/EditStudent'
import ModuleMainComponent from '../../Modules_/ModuleMainComponent'
import ListAllModules from '../../Modules_/ListAllModules'



const AdminDashboard = (props) => {
    return (
        <>
            <Routes>
                <Route path="ak/dashbaord" element={!props.auth ? <Navigate to=" /signin" /> : <Dashboard />} >

                    <Route exact path="ak/dashbaord/hm" element={<DashHome />} />
                    <Route exact path="ak/dashbaord/add" element={<AddStudents />} />     {/* <Route exact path="/dashboardhome" element={<AdminDashboard />} /> */}
                    {/* <Route exact path="/dashboard/listallstudents/edit/:_id" element={<EditStudent />} /> */}     {/* <Route exact path="/dashboard/module" element={<ModuleMainComponent />} /> */}
                    {/* <Route exact path="/dashboard/module/listallmodule" element={<ListAllModules />} /> */}
                </Route>

            </Routes>
        </>







    )
}

export default AdminDashboard