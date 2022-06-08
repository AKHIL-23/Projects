import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../../Dashboard'
import DashHome from '../../DashHome'
import AddStudents from '../../students/AddStudents'
import ListAllStudents from './ListAllStudents'
import EditStudent from '../../students/EditStudent'



const AdminDashboard = (props) => {
    return (
        <Routes>

            <Route path="/dashboard" element={!props.auth ? <Navigate to="/signin" /> : <Dashboard />} >

                <Route exact path="/dashboard" element={<DashHome />} />
                <Route exact path="/dashboard/addstudent" element={<AddStudents />} />
                <Route exact path="/dashboard/listallstudents" element={<ListAllStudents />} />
                <Route exact path="/dashboard/listallstudents/edit/:_id" element={<EditStudent />} />

            </Route>
        </Routes>


    )
}

export default AdminDashboard