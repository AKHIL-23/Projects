import React, { useState, useLocation, useEffect } from 'react';
// import '../css/style.scss';
// import '../charts/ChartjsConfig';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import { Link, Outlet } from 'react-router-dom';


import { GetLogedUser } from '../../../state/servicesApi/userAuthApi'
import { getToken } from '../../../state/LocalStorageService'


// REDUX STORE USER SLICE 
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRecord } from './../../../state/features/UserSlice'

const Dashboard = () => {

  const token = getToken()
  const dispatch = useDispatch()
  // const LogeUser = useSelector((state) => state.user.user);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const [isloading, setisloading] = useState(true)
  useEffect(() => {

    fetch("http://localhost:8000/api/zn/user/logeduser", {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(data => {
        // console.log("using dashboard fetch", data.payload)
        dispatch(fetchUserRecord(data.payload))
      });



  }, [dispatch])
  // const [data, setData] = useState({
  //   _id: "",
  //   user_id: {
  //     _id: "",
  //     username: "test",
  //     email: "",
  //     contactNumber: 0,
  //     role: "",
  //     gender: ""
  //   },
  //   city: ""
  // })
  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change



  // console.log(`dashboard data ${data}`)

  // // USER REDUX DATA 
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchUserRecord(data))
  // }, [])
  // const userRecord = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   setValues(userRecord)
  // }, [userRecord])


  return (


    <>
      {
        isloading ?

          // <Link to='/dashboard' onClick={setisloading(false)}>GO TO Dashboard</Link>
          <h1 onClick={() => { setisloading(false) }}>GO To Dashbard</h1>
          :
          <div className="flex h-screen overflow-hidden">


            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

              {/*  Site header */}
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

              <main>

                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full  max-w-9xl mx-auto font-inter antialiased bg-slate-100 text-slate-600">

                  {/* All Home content paste here by defult  */}
                  <Outlet />


                </div>
              </main>

              <Banner />

            </div>
          </div>
      }

    </>
  );
}

export default Dashboard;