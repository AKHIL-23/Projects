import React from 'react'
import { useEffect } from 'react'
import { fetchAllStudentsAttendance } from '../../../../state/servicesApi/StudentApi.js'
import { useDispatch, useSelector } from 'react-redux'
//Redux store "from Student slice"
import { getAllStudentsAttendance } from '../../../../state/features/studentSlice.js'

// Attendance Table 
import AttendanceTable from './AttendanceTable.js'

const DatewiseStudentsAttendance = () => {
    //Redux store
    const dispatch = useDispatch()
    const attendaceData = useSelector((state) => state.student.viewAllStudentsAttendance)
    const col = [
        "Student Name",
        "Contact Number",
        "Gender",
        // "Address",
        // "City",
        "email",
        "Attendance Status"
    ]

    useEffect(() => {
        const attendanceRedord = fetchAllStudentsAttendance()
        attendanceRedord.then((result) => {
            dispatch(getAllStudentsAttendance(result))

        })
    }, [])

    return (
        <>
            <AttendanceTable columns={col} records={attendaceData} title="Attendance Table" />


        </>

    )
}

export default DatewiseStudentsAttendance