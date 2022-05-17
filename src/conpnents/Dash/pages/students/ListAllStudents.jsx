import React, { useEffect, useState } from 'react'
import DashboardCard10 from '../../partials/dashboard/DashboardCard10';



const ListAllStudents = () => {
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

  const [studentRecords, setStudentsRecords] = useState([]);


  //NOTE : if  you are using get fetch request directlly without useEffect it will go into infinite loop
  useEffect(() => {
    fetch('http://localhost:8000/api/zn/listallstudents').then((result) => {
      result.json().then((res) => {
        setStudentsRecords(res);
        // console.log(res)


      })
    })
  }, [])


  return (
    <div className=' '>
      <DashboardCard10 columns={col} records={studentRecords} title="Students" />
    </div>
  )
}

export default ListAllStudents