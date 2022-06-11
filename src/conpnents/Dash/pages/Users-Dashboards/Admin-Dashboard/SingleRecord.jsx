import React from 'react'
import { useSelector } from 'react-redux'
const SingleRecord = () => {

    const studentsRecords = useSelector((state) => state.student.students);
    console.log(studentsRecords)


    return (
        <>
            <td className="p-2 whitespace-nowrap flex items-center ">
                <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                    {/* <img className="rounded-full" src={Image03} width="40" height="40" alt="img" /> */}
                </div>
                <div className="font-medium text-slate-800 text-center">1</div>
            </td>

            <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-slate-800 text-center">2</div>
            </td>

        </>
    )
}

export default SingleRecord