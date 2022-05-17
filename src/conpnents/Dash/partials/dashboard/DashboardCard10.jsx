
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// import Image01 from '../../images/user-36-05.jpg';
// import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
// import Image04 from '../../images/user-36-08.jpg';
// import Image05 from '../../images/user-36-09.jpg';


function DashboardCard10(props) {

  // const records = [...props.records];
  const col = [...props.columns]
  const [studentRecords, setStudentsRecords] = useState([]);
  const location = useLocation()

  // API CALL TO FETCH ALL STUDENT RECORD 
  useEffect(() => {
    fetch('http://localhost:8000/api/zn/listallstudents').then((result) => {
      result.json().then((res) => {
        setStudentsRecords(res);
        // console.log(res)


      })
    })
  }, [])

  const deleteRecord = async (userID, name) => {
    console.log(userID);
    if (window.confirm(`Are you sure ! you want to delete "${name}" related all records `)) {
      const Newrecords = studentRecords.filter((studentRecords) => { return studentRecords._id !== userID });
      setStudentsRecords(Newrecords);
      fetch(`http://localhost:8000/api/zn/delete/${userID}`, {
        method: 'DELETE'

      }).then(res => res.json()) // or res.json()
        .then(res => console.log(res))  // handle response after deleted the record 

    }

  }

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">{props.title}</h2>

      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>

                {col.map(data => {
                  return (
                    <th className="p-2 whitespace-nowrap" key={data}>
                      <div className="font-semibold text-center">{data}</div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                studentRecords.map(record => {
                  return (
                    <tr key={record._id} className='hover:bg-slate-200'>
                      <td className="p-2 whitespace-nowrap flex items-center ">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img className="rounded-full" src={Image03} width="40" height="40" alt={record.name} />
                        </div>
                        <div className="font-medium text-slate-800 text-center">{record.name}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.contactNumber}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center ">{record.age}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.gender}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.address}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.status}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.city}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.state}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="">
                          <div className="font-medium text-slate-800 text-center">{record.email}</div>
                        </div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-center space-x-3">
                          <NavLink end to={`${location.pathname}/edit/${record._id}`}>
                            <span><i className="fa-solid fa-user-pen text-blue-500 cursor-pointer"></i></span>
                          </NavLink >

                          <span ><i className="fa-solid fa-trash-can text-red-500 cursor-pointer" onClick={() => { deleteRecord(record._id, record.name) }} ></i></span>

                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
