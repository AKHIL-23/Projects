import React from 'react';
import { NavLink } from 'react-router-dom';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10(props) {

  const records = [...props.records];
  const col = [...props.columns]



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
                records.map(record => {
                  return (
                    <tr key={record.email} className='hover:bg-slate-200'>
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
                      {/* <td className="p-2 whitespace-nowrap flex justify-center items-start">
                        <div className={`${customer.status === 'Paid' ? 'text-green-500' : 'text-red-500'}  text-center w-20 rounded-lg p-1 `}>
                          <i className="fa-solid fa-coins"></i><span className={`${customer.status === 'Paid' ? 'text-green-600' : 'text-red-600'} pl-2`}>{customer.status}</span>
                        </div>
                      </td> */}
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-center space-x-3">
                          <NavLink end to="/">
                            <span><i className="fa-solid fa-user-pen text-blue-500 cursor-pointer"></i></span>
                          </NavLink>
                          <span><i className="fa-solid fa-trash-can text-red-500 cursor-pointer"></i></span>
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
