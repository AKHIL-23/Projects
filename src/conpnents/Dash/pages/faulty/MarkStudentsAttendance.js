import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../../../state/LocalStorageService';
import { listAllStudents } from '../../../../state/features/studentSlice';
import StudentsAttendanceTable from './StudentsAttendanceTable';

const MarkStudentsAttendance = () => {
    // redux dispatch 
    const dispatch = useDispatch()
    const studentsRe = useSelector((state) => state.student.students);
    const token = getToken()


    const col = [
        "name",
        "contactnumber",
        "gender",
        "address",
        "city",
        "email",
        "Endrolled_courses",
        "Attendance Status"

    ]



    //NOTE : if  you are using get fetch request directlly without useEffect it will go into infinite loop
    useEffect(() => {
        fetch('http://localhost:8000/api/zn/listallstudents', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((result) => {
            result.json().then((res) => {

                dispatch(listAllStudents(res))

            })
        })
    }, [])


    return (
        <div className='grid grid-cols-12 mt-5'>
            <div className='col-span-full'>

                <StudentsAttendanceTable columns={col} records={studentsRe} title="Students Attendance" />

            </div>

        </div>
    )

}

export default MarkStudentsAttendance