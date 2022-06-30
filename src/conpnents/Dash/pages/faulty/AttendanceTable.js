import React from 'react'
import Image03 from '../../images/user-36-07.jpg'

const AttendanceTable = (props) => {
    const col = [...props.columns]
    const records = props.records;
    console.log(records);
    return (
        <div className='grid grid-cols-12 mt-5'>
            <div className='col-span-full'>
                {
                    records.map(record => {
                        return (<div key={record.date} className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 my-5">
                            <header className="px-5 py-4 border-b flex justify-evenly items-center border-slate-100 ">

                                <h2 className="font-semibold text-slate-800">{`${props.title}  on ${record.date.slice(0, 10)}`}</h2>
                                {/* <h2 className="font-semibold text-slate-800">{date}</h2> */}


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
                                                record.studenton.map(studentsRecord => {

                                                    return (
                                                        <tr key={record.date} className='hover:bg-slate-200'>
                                                            <td className="p-2 whitespace-nowrap flex items-center ">
                                                                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                                                                    <img className="rounded-full" src={Image03} width="40" height="40" alt={studentsRecord.username} />
                                                                </div>
                                                                <div className="font-medium text-slate-800 text-center">{studentsRecord.username}</div>
                                                            </td>

                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="font-medium text-slate-800 text-center">{studentsRecord.contactNumber}</div>
                                                            </td>

                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="font-medium text-slate-800 text-center">{studentsRecord.gender}</div>
                                                            </td>

                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="">
                                                                    <div className="font-medium text-slate-800 text-center">{studentsRecord.email}</div>
                                                                </div>
                                                            </td>
                                                            <td className="p-2 whitespace-nowrap">
                                                                <div className="text-md text-center space-x-3">
                                                                    <div >

                                                                        <span className={`font-medium text-white text-center p-2 rounded-md ${studentsRecord.attendanceStatus == "present" ? "bg-green-500" : "bg-red-500"}`}>{studentsRecord.attendanceStatus}</span>
                                                                    </div >


                                                                </div>
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>





                                </div>


                            </div >
                        </div >)
                    })
                }


            </div>

        </div>
    )
}

export default AttendanceTable