
import './App.css';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import './conpnents/Dash/css/style.scss'
import './conpnents/Dash/charts/ChartjsConfig.jsx'

// main layouts
import Layout from './Layout';
import Dashboard from './conpnents/Dash/pages/Dashboard';
// public components
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage'
import PageNotFound from './conpnents/pages/PageNotFound'

// private components 
import DashHome from './conpnents/Dash/pages/DashHome';
import AddStudents from './conpnents/Dash/pages/students/AddStudents';
import ListAllStudents from './conpnents/Dash/pages/students/ListAllStudents' //done
import EditStudent from './conpnents/Dash/pages/students/EditStudent'
// Modules components  start
import ModuleMainComponent from './conpnents/Dash/pages/Modules_/ModuleMainComponent';
import ListAllModules from './conpnents/Dash/pages/Modules_/ListAllModules';
import AddNewModule from './conpnents/Dash/pages/Modules_/AddNewModule';
import AssingModule from './conpnents/Dash/pages/Modules_/AssingModule';
//User components start
import UserMainComponent from './conpnents/Dash/pages/User/UserMainComponent';
import RegisterUser from './conpnents/Dash/pages/User/Registration';
import CreateRole from './conpnents/Dash/pages/User/CreateRole';
//Faculty component start 
import MainFacultyComponent from './conpnents/Dash/pages/faulty/MainFacultyComponent';
import MarkStudentsAttendance from './conpnents/Dash/pages/faulty/MarkStudentsAttendance';
import DatewiseStudentsAttendance from './conpnents/Dash/pages/faulty/DatewiseStudentsAttendance';

import { useSelector, useDispatch } from 'react-redux';
import { getToken } from './state/LocalStorageService';
import { setAuthToken } from './state/features/AuthTokenSlice'
import { fetchUserRecord } from './state/features/UserSlice';

//Autherization for frontend components
import componentAuthorization from './Auth/FrontendAutherization.js';
// users profiles 
// student 
import Profile from './conpnents/Dash/pages/students/Profile';
import LoginPage from './conpnents/formComponents/LoginPage';
// admin



function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authtoken.token)
  // API CALL TO GET THE LOGED USER DATA 
  let token = getToken()
  // const logetUser = useSelector(state => state.user.user)

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    dispatch(setAuthToken(token))
  }, [location.pathname, token]);





  // useEffect(() => {

  //   fetch("http://localhost:8000/api/zn/user/logeduser", {
  //     method: 'GET',
  //     headers: {
  //       'authorization': `Bearer ${auth}`
  //     }
  //   }).then(response => response.json())
  //     .then(data => {
  //       // console.log("fetch user detail in app component", data)

  //       dispatch(fetchUserRecord(data.payload))

  //     });
  // }, [dispatch])

  componentAuthorization.authorizationMethod("data")

  return (
    <>

      <Routes>


        <Route path="/" element={<Layout />}>
          {/* public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={auth ? <Navigate to="/dashboard" /> : <SigninPage />} />
          {/* <Route path="/signin" element={auth ? <Navigate to="/dashboard" /> : <LoginPage />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Course/:c_id" element={<CoursePage />} />

        </Route>

        {/* private route  */}
        <Route path="/dashboard" element={!auth ? <Navigate to="/signin" /> : <Dashboard />} >

          {/* Profile compoment route  */}
          <Route exact path="/dashboard/profile" element={componentAuthorization.profileAuthorization() ? <Profile /> : <Navigate to="/dashboard" />} />



          {/* Student related Private Route  */}

          <Route exact path="/dashboard" element={<DashHome />} />
          <Route exact path="/dashboard/addstudent" element={<AddStudents />} />
          <Route exact path="/dashboard/listallstudents" element={componentAuthorization.authorizationMethod("/dashboard/listallstudents") ? <ListAllStudents /> : <Navigate to="/dashboard" />} />
          <Route exact path="/dashboard/listallstudents/edit/:_id" element={componentAuthorization.authorizationMethod("/dashboard/listallstudents") ? <EditStudent /> : <Navigate to="/dashboard" />} />


          {/* Module related private route  */}

          <Route exact path="/dashboard/modules" element={<ModuleMainComponent />}>

            <Route path="addmodule" element={componentAuthorization.authorizationMethod("/dashboard/modules/addmodule") ? <AddNewModule /> : <Navigate to="/dashboard" />} />
            <Route path="allmodules" element={componentAuthorization.authorizationMethod("/dashboard/modules/allmodules") ? <ListAllModules /> : <Navigate to="/dashboard" />} />
            <Route path="assingmodule" element={componentAuthorization.authorizationMethod("/dashboard/modules/assingmodule") ? <AssingModule /> : <Navigate to="/dashboard" />} />


          </Route>

          {/* User related private route  */}
          <Route exact path="/dashboard/user" element={<UserMainComponent />}>
            <Route path="register" element={componentAuthorization.authorizationMethod("/dashboard/user/register") ? <RegisterUser /> : <Navigate to="/dashboard" />} />
            <Route path="createrole" element={<CreateRole />} />

          </Route>

          {/* faculty related private route  */}
          <Route exact path="/dashboard/faculty" element={<MainFacultyComponent />}>
            <Route path="markAttendance" element={componentAuthorization.authorizationMethod("/dashboard/faculty/markAttendance") ? <MarkStudentsAttendance /> : <Navigate to="/dashboard" />} />
            <Route path="datewiseattendance" element={componentAuthorization.authorizationMethod("/dashboard/faculty/datewiseattendance") ? <DatewiseStudentsAttendance /> : <Navigate to="/dashboard" />} />


          </Route>

          {/* Dashboard outlet area end here */}
        </Route>


        <Route path='*' element={<PageNotFound />} />

      </Routes>


      {/* Admin Dashboard Routes  */}
      {/* <AdminDashboard auth={auth} /> */}



    </>
  );
}

export default App;
