
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Edit_Module from './Edit_Module';

//Redus store module slice
import { setSingleModule } from '../../../../state/features/ModuleSlice';
import { useDispatch } from 'react-redux/es/exports';
function ModuleTable(props) {

  const dispatch = useDispatch()

  const col = [...props.columns]

  const location = useLocation();
  const records = props.records;

  const [editmodule, seteditmodule] = useState(false)

  const closeEditModelhandler = (data) => {
    seteditmodule(data)

  }

  //DO NOT REMOVE THIS CODE 

  // const deleteRecord = async (userID, name) => {

  //   // delete record in front end
  //   if (window.confirm(`Are you sure ! you want to delete "${name}" related all records `)) {
  //     const Newrecords = records.filter((records) => { return records._id !== userID });
  //     dispatch(listAllStudents(Newrecords))
  //     // delete record at backend 
  //     fetch(`http://localhost:8000/api/zn/delete/${userID}`, {
  //       method: 'DELETE'

  //     }).then(res => res.json()) // or res.json()
  //       .then(res => console.log(res))  // handle response after deleted the record 

  //   }

  // }

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 h-screen ">
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
                    <tr key={record._id} className='hover:bg-slate-200'>

                      <td className="p-2 whitespace-nowrap flex items-center ">
                        {/* <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <img className="rounded-full" src={Image03} width="40" height="40" alt={record.name} />
                        </div> */}
                        <div className="font-medium text-slate-800 text-center">{record.module_name}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.component_path}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">{record.controller_path}</div>
                      </td>

                      <td className="p-2 whitespace-nowrap">
                        <div className="font-medium text-slate-800 text-center">
                          <select name="moduleusedBy" id="moduleUseBy" >
                            {
                              record.used_by.map(user => {
                                return (<option key={user._id} value="">{user.username}</option>)

                              })
                            }

                          </select>
                        </div>
                      </td>




                      <td className="p-2 whitespace-nowrap">
                        <div className="text-md text-center space-x-3">

                          <span><i className="fa-solid fa-user-pen text-blue-500 cursor-pointer" onClick={() => {
                            seteditmodule(!editmodule)
                            dispatch(setSingleModule(record))
                          }}></i></span>


                          {/* <span ><i className="fa-solid fa-trash-can text-red-500 cursor-pointer" onClick={() => { deleteRecord(record._id, record.name) }} ></i></span> */}

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

      {
        editmodule ? <Edit_Module collapseData={editmodule} closeEditModelhandler={closeEditModelhandler} /> : ''
      }


    </div>
  );
}

export default ModuleTable;
