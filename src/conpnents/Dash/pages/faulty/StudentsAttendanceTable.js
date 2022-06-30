import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Image03 from '../../images/user-36-07.jpg'
// Redux
import { useSelector, useDispatch } from 'react-redux';


import { listAllStudents } from '../../../../state/features/studentSlice';
const StudentsAttendanceTable = (props) => {
    const dispatch = useDispatch()

    const col = [...props.columns]
    const location = useLocation()
    const records = props.records;

    let attendanceRecords = []
    // const [presentStudents, setPresentStudent] = useState({})





    //Today date 
    const date = new Date().toISOString()

    const tempfun = (studentID, status) => {
        // console.log(`${data}=${status}`)
        let doc = { student_id: studentID, attendanceStatus: status }

        // attendanceRecords.push(doc)
        let singleRecord = attendanceRecords.filter(record => record.student_id == studentID);
        if (!singleRecord.length == 0) {
            console.log("availabel record updated....")
            // const updateddata = { ...singleRecord };

            if (singleRecord[0].attendanceStatus == 'present') {
                singleRecord[0].attendanceStatus = 'absent'
            }
            else {
                singleRecord[0].attendanceStatus = 'present'

            }
            console.log(singleRecord[0].attendanceStatus);
        }
        else {
            attendanceRecords.push(doc)
            console.log('new record')
        }
        console.log('all attendance', attendanceRecords)
        // console.log(singleRecord);

    }


    const submitHandler = (event) => {
        event.preventDefault()

        let values = { date: date, studentson: attendanceRecords }
        console.log('final sheet of attendance ', values);
        // console.log('final sheet of attendance ', values.studentson[0].student_id);

        // console.log(document.getElementsByName('attendance[]'))
        // console.log("submittin....")
        // const data = new FormData(event.target);
        // console.log(data);
        // console.log(data.get('atten[]'));
        fetch('http://localhost:8000/api/zn/attendance/markattendance', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then((result) => {
            result.json().then((res) => {
                console.log(res)
                alert(res.message)


            })
        })
        attendanceRecords = []
        values = {}
        event.target.reset();

    }

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
            <header className="px-5 py-4 border-b flex justify-evenly items-center border-slate-100">
                <h2 className="font-semibold text-slate-800">{props.title}</h2>
                <h2 className="font-semibold text-slate-800">{date}</h2>


            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <form action="" onSubmit={submitHandler}>
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
                                    records.map(record => {
                                        // console.log(record)



                                        return (
                                            <tr key={record._id} className='hover:bg-slate-200'>
                                                <td className="p-2 whitespace-nowrap flex items-center ">
                                                    <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full" src={Image03} width="40" height="40" alt={record.name} />
                                                    </div>
                                                    <div className="font-medium text-slate-800 text-center">{record.user_id.username}</div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-slate-800 text-center">{record.user_id.contactNumber}</div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-slate-800 text-center">{record.user_id.gender}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-slate-800 text-center">{record.address}</div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="font-medium text-slate-800 text-center">{record.city}</div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="">
                                                        <div className="font-medium text-slate-800 text-center">{record.user_id.email}</div>
                                                    </div>
                                                </td>

                                                <td className="p-2 whitespace-nowrap ">
                                                    <div className=" ">

                                                        <select name="moduleusedBy" id="moduleUseBy" className=" w-full" >
                                                            {
                                                                record.endrolled_courses.map(course => {
                                                                    return (<option key={course._id} value="volvo">{course.name}</option>)

                                                                })
                                                            }

                                                        </select>
                                                    </div>
                                                </td>


                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-md text-center space-x-3">
                                                        <div >
                                                            {
                                                                // {`atten['${record._id}']`}
                                                                <div className='p-2 flex justify-evenly '>
                                                                    <label htmlFor={`${record._id}present`}> <span>Present </span></label>
                                                                    <input type="radio" id={`${record._id}present`} name={`atten["${record._id}"]`} value='present' onClick={() => { tempfun(record._id, 'present') }} />

                                                                    <label htmlFor={`${record._id}absent`}><span>Absent </span></label>
                                                                    <input type="radio" id={`${record._id}absent`} name={`atten["${record._id}"]`} value='absent' onClick={() => { tempfun(record._id, 'absent') }} />
                                                                </div>

                                                            }

                                                        </div >


                                                    </div>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                        <button type='submit'>Submit</button>
                    </form>



                </div>


            </div >
        </div >
    )
}

export default StudentsAttendanceTable