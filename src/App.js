
import './App.css';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import './conpnents/Dash/css/style.scss'
import './conpnents/Dash/charts/ChartjsConfig.jsx'

// public components
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage'
import PageNotFound from './conpnents/pages/PageNotFound'

// private components 
import AdminDashboard from './conpnents/Dash/pages/Users-Dashboards/Admin-Dashboard/AdminDashboard';




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
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={auth ? <Navigate to="/dashboard" /> : <SigninPage />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/ContactUs" element={} /> */}
        <Route path="/Course/:c_id" element={<CoursePage />} />
        <Route />
        {/* ---------------------------------------------------------------------------------- */}
        {/* <Route path="/dashboard" element={!auth ? <Navigate to="/signin" /> : <Dashboard />} >

          <Route exact path="/dashboard" element={<DashHome />} />
          <Route exact path="/dashboard/addstudent" element={<AddStudents />} />
          <Route exact path="/dashboard/listallstudents" element={<ListAllStudents />} />
          <Route exact path="/dashboard/listallstudents/edit/:_id" element={<EditStudent />} />
        </Route> */}
        {/* ------------------------------------------------------------------------- */}
        {/* These all empty routes is created to ingnore the "Page Not found showing other routes collection like  AdminDasboard Routees colllection" */}
        <Route exact path="/dashboard" />
        <Route exact path="/dashboard/addstudent" />
        <Route exact path="/dashboard/listallstudents" />
        <Route exact path="/dashboard/listallstudents/edit/:_id" />

        {/* 404 page not found page route  */}
        <Route path='*' element={<PageNotFound />} />
      </Routes >

      {/* Admin Dashboard Routes  */}
      <AdminDashboard auth={auth} />



    </>
  );
}

export default App;
