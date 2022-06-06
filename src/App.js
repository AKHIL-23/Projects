
import './App.css';
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import './conpnents/Dash/css/style.scss'
import './conpnents/Dash/charts/ChartjsConfig.jsx'
// public components
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage'
import PageNotFound from './conpnents/pages/PageNotFound'

// student dasjboard componets 
// import DashBoard from './conpnents/dashBoards/DashBoard';
// import CreateNewStudent from './conpnents/dashBoards/studentComponents/CreateNewStudent'
// import ListAllStudents from './conpnents/dashBoards/studentComponents/ListAllStudents'
// import DashboardHomePage from './conpnents/dashBoards/dashboardHomePage/DashboardHomePage';

// private components 
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from './conpnents/Dash/pages/Dashboard';
import DashHome from './conpnents/Dash/pages/DashHome'
import AddStudents from './conpnents/Dash/pages/students/AddStudents'
import ListAllStudents from './conpnents/Dash/pages/students/ListAllStudents';
import EditStudent from './conpnents/Dash/pages/students/EditStudent';
import { getToken } from './state/LocalStorageService';
import { setAuthToken } from './state/features/AuthTokenSlice'
import { fetchUserRecord } from './state/features/UserSlice';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authtoken.token)
  const logetUser = useSelector(state => state.user.user)

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change
  // let token
  let token = getToken()

  // useEffect(() => {
  //   dispatch(setAuthToken(token))
  // }, [])
  useEffect(() => {

    fetch("http://localhost:8000/api/zn/user/logeduser", {
      method: 'GET',
      headers: {
        'authorization': `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(data => {
        // console.log("fetch user detail in app component", data)
        dispatch(setAuthToken(token))
        dispatch(fetchUserRecord(data.payload))

      });



  }, [dispatch])




  // useEffect(() => {
  //   console.log("from app ", token)
  //   dispatch(setAuthToken({ token: token }))
  //   // navigate("/dashboard");
  //   // clearForm(e)

  // }, [token, dispatch])

  // const token = useSelector(state => state.authtoken)

  useEffect(() => {
    // console.log("app token ", auth);

  }, [])




  return (
    <>
      {/* <Navbar /> */}


      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Navigate to="/about" /> */}
        {/* Authtoken ? <Navigate to="/dashboard" /> : <SigninPage /> */}
        <Route path="/signin" element={auth ? <Navigate to="/dashboard" /> : <SigninPage />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/ContactUs" element={} /> */}
        <Route path="/Course/:c_id" element={<CoursePage />} />
        <Route />

        {/* Student Dashboard setup  */}
        {/* <Route path="/dashboard" element={<DashBoard />}>
          <Route exact path='/dashboard/' element={<DashboardHomePage />} />
          <Route exact path='/dashboard/createnewstudent' element={<CreateNewStudent />} />
          <Route exact path='/dashboard/listallstudents' element={<ListAllStudents />} />

        </Route> */}
        {/*Admin Dashboard features  */}
        {/* <Route path="/dashboard" element={Authtoken ? <Navigate to="/signin" /> : <Dashboard />} > */}
        <Route path="/dashboard" element={!auth ? <Navigate to="/signin" /> : <Dashboard />} >

          <Route exact path="/dashboard" element={<DashHome />} />
          <Route exact path="/dashboard/addstudent" element={<AddStudents />} />
          <Route exact path="/dashboard/listallstudents" element={<ListAllStudents />} />
          <Route exact path="/dashboard/listallstudents/edit/:_id" element={<EditStudent />} />

        </Route>

        {/* 404 page not found page route  */}
        <Route path='*' element={<PageNotFound />} />
      </Routes >


    </>
  );
}

export default App;
