import React, { useEffect } from 'react'


// redux 
import { useSelector, useDispatch } from 'react-redux';
import { listAllStudents } from '../../../../state/features/studentSlice';
import { getToken } from '../../../../state/LocalStorageService';
import StudentTable from './StudentTable';

const ListAllStudents = () => {
  // redux dispatch 
  const dispatch = useDispatch()
  const studentsRe = useSelector((state) => state.student.students);
  const token = getToken()


  const col = [
    "name",
    "contactnumber",
    "age",
    "gender",
    "address",
    "city",
    "state",
    "email",
    "Admission Date",
    "Passout Date",
    "Endrolled_courses",
    "Edit/Delete"

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
    <div className='grid grid-cols-12 '>
      <div className='col-span-full'>

        <StudentTable columns={col} records={studentsRe} title="Students" />
      </div>

    </div>
  )
}

export default ListAllStudents