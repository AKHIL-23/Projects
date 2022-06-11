import React, { useEffect } from 'react'
import DashboardCard10 from './DashboardCard10';

// redux 
import { useSelector, useDispatch } from 'react-redux';
import { listAllStudents } from '../../../../../state/features/studentSlice';

const ListAllStudents = () => {
  // redux dispatch 
  const dispatch = useDispatch()
  const studentsRe = useSelector((state) => state.student.students);


  const col = [
    "name",
    "contactnumber",
    "age",
    "gender",
    "address",
    "status",
    "city",
    "state",
    "email",
    "Edit/Delete"

  ]

  // const [studentRecords, setStudentsRecords] = useState([]);


  //NOTE : if  you are using get fetch request directlly without useEffect it will go into infinite loop
  useEffect(() => {
    fetch('http://localhost:8000/api/zn/listallstudents').then((result) => {
      result.json().then((res) => {
        // setStudentsRecords(res);
        dispatch(listAllStudents(res))
        // console.log(res)


      })
    })
  }, [])


  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-full'>
        <DashboardCard10 columns={col} records={studentsRe} title="Students" />
      </div>

    </div>
  )
}

export default ListAllStudents