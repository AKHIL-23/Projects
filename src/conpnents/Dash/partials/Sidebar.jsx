import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import SidebarLinkGroup from './SidebarLinkGroup';
import Image03 from './../images/user-36-07.jpg'

function Sidebar({
  sidebarOpen,
  setSidebarOpen,

}) {


  const sidebarOptions = useSelector((state) => state.user.sideBar);

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);



  return (
    <div className='' >
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64  2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2 ">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="block ">
            <h1 className='text-blue-500 text-xl mt-5 ml-5'>ZnInfotech</h1>

          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-black font-semibold pl-3">
              <span className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
            </h3>
            <ul className="mt-3">
              {/* Profile  */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  hover:border-l-8 border-l-blue-500 hover:bg-slate-100 transition-all  ${pathname.includes('calendar') && 'bg-slate-900'}`}>
                <NavLink end to="/dashboard/profile" className={`block text-black hover:text-blue-500 truncate transition duration-150 ${pathname.includes('calendar') && 'hover:text-black'}`}>
                  <div className="flex items-center">
                    <div className="w-8 h-8 shrink-0 ">
                      <img className="rounded-full" src={Image03} width="40" height="40" alt="profile" />
                    </div>
                    <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
                  </div>
                </NavLink>
              </li>
              {/* Dashboard */}
              <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  hover:border-l-8 border-l-blue-500 hover:bg-slate-100 transition-all ${pathname === '/dashboard' && 'bg-white'}`}>
                <NavLink end to="/dashboard" className={`block text-black hover:text-blue-500 truncate transition duration-150 ${pathname === '/dashboard' && 'hover:text-blue-500'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-blue-400 ${pathname === '/dashboard' && '!text-blue-500'}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path className={`fill-current text-white-600 ${pathname === '/dashboard' && 'text-blue-600'}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path className={`fill-current text-blue-400 ${pathname === '/dashboard' && 'text-blue-200'}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                </NavLink>
              </li>

              {/* Students */}
              {/* <SidebarLinkGroup activecondition={pathname.includes('ecommerce')} >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a href="#0" className={` hover:border-l-8 border-l-blue-500 hover:bg-slate-100 transition-all px-3 py-2  block text-black hover:text-blue-500 truncate   duration-150 ${pathname.includes('ecommerce') && 'hover:text-blue-500'}`} onClick={(e) => { e.preventDefault(); sidebarExpanded ? handleClick() : setSidebarExpanded(true) }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                              <path className={`fill-current text-blue-400 ${pathname.includes('ecommerce') && 'text-blue-300'}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                              <path className={`fill-current text-blue-700 ${pathname.includes('ecommerce') && '!text-blue-600'}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                              <path className={`fill-current text-blue-600 ${pathname.includes('ecommerce') && 'text-blue-500'}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                            </svg>
                            <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Students</span>
                          </div>
                          
                          <div className="flex shrink-0 ml-2">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-blue-400 ${open && 'transform rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className=" lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/dashboard/addstudent" className="block text-slate-400 hover:text-black transition duration-150 truncate">
                              <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Admission</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/dashboard/listallstudents" className="block text-slate-400 hover:text-black transition duration-150 truncate">
                              <span className="text-sm font-medium   lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">List All Students</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/" className="block text-slate-400 hover:text-black transition duration-150 truncate">
                              <span className="text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink end to="/" className="block text-slate-400 hover:text-black transition duration-150 truncate">
                              <span className="text-sm font-medium   lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">other</span>
                            </NavLink>
                          </li>

                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}

              {/* Calendar */}
              {/* <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0  hover:border-l-8 border-l-blue-500 hover:bg-slate-100 transition-all  ${pathname.includes('calendar') && 'bg-slate-900'}`}>
                <NavLink end to="/" className={`block text-black hover:text-blue-500 truncate transition duration-150 ${pathname.includes('calendar') && 'hover:text-black'}`}>
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path className={`fill-current text-slate-600 ${pathname.includes('calendar') && 'text-indigo-500'}`} d="M1 3h22v20H1z" />
                      <path className={`fill-current text-slate-400 ${pathname.includes('calendar') && 'text-indigo-300'}`} d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
                    </svg>
                    <span className="text-sm font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                  </div>
                </NavLink>
              </li> */}





              {
                sidebarOptions.map(Sideoption => {
                  return (

                    <li key={Sideoption.module_name} className={`px-3 py-2 mt-5 rounded-sm mb-0.5 last:mb-0  hover:border-l-8 border-l-blue-500 hover:bg-slate-100 transition-all ${pathname === '/dashboard' && 'bg-white'}`}>
                      <NavLink end to={`${Sideoption.component_path}`} className={`block text-black hover:text-blue-500 truncate transition duration-150 ${pathname === '/dashboard' && 'hover:text-blue-500'}`}>
                        <div className="flex items-center">

                          <i className={`${Sideoption.icon_path} text-xl text-blue-500`}></i>
                          <span className="text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">{Sideoption.module_name}</span>
                        </div>
                      </NavLink>
                    </li>
                  )

                })


              }
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => {
              setSidebarExpanded(!sidebarExpanded)
            }}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-blue-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-blue-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;