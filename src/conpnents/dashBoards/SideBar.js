import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SideBar.css'


const SideBar = (props) => {
    const [open, setOpen] = useState(false);
    const [stdMenu, setStdMenu] = useState(false);
    const [tecMenu, setTecMenu] = useState(false);

    // absolute  ${open ? "left-0" : "-left-20 "}


    return (
        <section className={`flex flex-col  h-screen bg-blue-500  ${open ? "w-80" : "w-20"}  fixed transition-all duration  `} >
            <div className=' p-4 flex items-center space-x-5' >
                <div className='w-10 h-10 overflow-hidden rounded-full bg-red-300'><img src="/assets/img/studentTestimonial/student_2.png" alt="" /></div>
                <span className={`${!open && "hidden"} text-xl text-white `}> <h1>Admin</h1> </span>

            </div>
            {/* checked={`${open ? false : true}`} */}
            <input type="checkbox" id='sidebarCollpsedBtn' className=' hidden' checked={open ? false : true} />

            <div className=' flex-1 menu-Wrapper '>
                <ul >
                    <li>
                        <div className='flex items-center pl-4' onClick={() => { setOpen(!open) }}  >
                            <i class="fa-solid fa-house"></i>
                            <span >
                                <Link to="/dashboard/"  >Dashboard</Link>
                            </span>

                        </div>
                    </li>
                    <li>
                        <div className='flex items-center pl-4' >
                            <i className="fa-solid fa-graduation-cap text-xl "></i>

                            <Link to="#" onClick={() => { setStdMenu(!stdMenu) }}>  Students  <span><i class="fa-solid fa-angle-down"></i></span></Link>
                        </div>

                        <ul className={`${stdMenu ? 'block' : 'hidden'}`}>
                            <li><Link to="/dashboard/createnewstudent" onClick={() => { setOpen(!open) }} >Create</Link></li>
                            <li><Link to="/dashboard/listallstudents" onClick={() => { setOpen(!open) }} >Read</Link></li>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Update</Link></li>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Delete</Link></li>
                        </ul>
                    </li>

                    <li>
                        <div className='flex items-center pl-4'>
                            <i className="fas fa-chalkboard-teacher text-xl"></i>
                            <Link to="#" onClick={() => { setTecMenu(!tecMenu) }}> Teachers <span><i class="fa-solid fa-angle-down"></i></span></Link>
                        </div>


                        <ul className={`${tecMenu ? 'block' : 'hidden'}`}>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Create</Link></li>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Read</Link></li>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Update</Link></li>
                            <li><Link to="" onClick={() => { setOpen(!open) }}>Delete</Link></li>
                        </ul>
                    </li>

                </ul>

            </div>

            <div className='flex items-center pl-4 text-white' onClick={() => { setOpen(!open) }}>

                <i class="fa-solid fa-arrow-right-from-bracket text-xl p-5 cursor-pointer"></i>
                <Link to="" className={`${open ? "block" : "hidden"}`}> <h1>Logout</h1> </Link>


            </div>

            <div className=' absolute  top-2 right-0 rounded-full text-white ' onClick={() => setOpen(!open)}>
                <label htmlFor="sidebarCollpsedBtn">
                    <i className={`fa-solid fa-circle-right text-2xl cursor-pointer ${open ? "rotate-180" : "rotate-0"}`}></i>
                </label>
            </div>


        </section >
    )

}

export default SideBar

