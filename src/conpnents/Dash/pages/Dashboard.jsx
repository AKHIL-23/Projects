import React, { useState, useLocation, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../css/style.scss';
// import '../charts/ChartjsConfig';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import { Link, Outlet } from 'react-router-dom';


import { getToken, removeToken } from '../../../state/LocalStorageService'
import { clearAuthToken } from '../../../state/features/AuthTokenSlice';


// REDUX STORE USER SLICE 
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRecord, setSidebar } from './../../../state/features/UserSlice'
import { clearSidebar } from './../../../state/features/UserSlice';
// import { GetLogedUser } from '../../../state/servicesApi/UserAuthApi';
import {GetLogedUser} from '../../../state/servicesApi/userAuthApi'
const Dashboard = () => {

  const token = getToken()
  const dispatch = useDispatch()
  let navigate = useNavigate()

  // const LogeUser = useSelector((state) => state.user.user);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [isloading, setisloading] = useState(true)

  useEffect(() => {

    const response = GetLogedUser(token)
    response.then((result) => {

      if (result.status) {
        dispatch(fetchUserRecord({ ...result.payload, ...result.payload.user_id, ...result.payload.role }))
        dispatch(setSidebar(result.sidebar))

      }
      else {
        alert(result.message)
        removeToken('authToken')
        dispatch(clearAuthToken())
        navigate("/")

      }
    })
    return () => {
      dispatch(clearSidebar())
    };
  }, [dispatch])


  return (


    <>
      {/* {
        isloading ?


          <Link to='/dashboard' onClick={setisloading(false)}>GO TO Dashboard</Link> :  */}
      <div className="flex h-screen overflow-hidden">


        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>

            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full  max-w-9xl mx-auto font-inter antialiased bg-slate-100 text-slate-600 relative z-10 ">

              {/* All Home content paste here by defult  */}
              <Outlet />


            </div>
          </main>

          <Banner />

        </div>
      </div>
      {/* } */}

    </>
  );
}

export default Dashboard;