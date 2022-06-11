
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
import ListAllStudents from './conpnents/Dash/pages/Users-Dashboards/Admin-Dashboard/ListAllStudents'
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

import { useSelector, useDispatch } from 'react-redux';
import { getToken } from './state/LocalStorageService';
import { setAuthToken } from './state/features/AuthTokenSlice'
import { fetchUserRecord } from './state/features/UserSlice';





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



  return (
    <>

      <Routes>


        <Route path="/" element={<Layout />}>
          {/* public Route */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={auth ? <Navigate to="/dashboard" /> : <SigninPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Course/:c_id" element={<CoursePage />} />

        </Route>

        {/* private route  */}
        <Route path="/dashboard" element={!auth ? <Navigate to="/signin" /> : <Dashboard />} >
          {/* Student related Private Route  */}

          <Route exact path="/dashboard" element={<DashHome />} />
          <Route exact path="/dashboard/addstudent" element={<AddStudents />} />
          <Route exact path="/dashboard/listallstudents" element={<ListAllStudents />} />
          <Route exact path="/dashboard/listallstudents/edit/:_id" element={<EditStudent />} />

          {/* Module related private route  */}

          <Route exact path="/dashboard/modules" element={<ModuleMainComponent />}>

            <Route path="addmodule" element={<AddNewModule />} />
            <Route path="allmodules" element={<ListAllModules />} />
            <Route path="assingmodule" element={<AssingModule />} />

          </Route>


          <Route exact path="/dashboard/user" element={<UserMainComponent />}>
            <Route path="register" element={<RegisterUser />} />
            <Route path="createrole" element={<CreateRole />} />



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
