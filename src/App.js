
import './App.css';
import Navbar from './conpnents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage';
import DashBoard from './conpnents/dashBoards/DashBoard';
import PageNotFound from './conpnents/pages/PageNotFound'

// student dasjboard componets 
import CreateNewStudent from './conpnents/dashBoards/studentComponents/CreateNewStudent'
import ListAllStudents from './conpnents/dashBoards/studentComponents/ListAllStudents'
import DashboardHomePage from './conpnents/dashBoards/dashboardHomePage/DashboardHomePage';



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/ContactUs" element={} /> */}
        <Route path="/Course/:c_id" element={<CoursePage />} />
        <Route />

        {/* Student Dashboard setup  */}
        <Route path="/dashboard" element={<DashBoard />}>
          <Route exact path='/dashboard/' element={<DashboardHomePage />} />
          <Route exact path='/dashboard/createnewstudent' element={<CreateNewStudent />} />
          <Route exact path='/dashboard/listallstudents' element={<ListAllStudents />} />

        </Route>
        {/*  */}


        {/* 404 page not found page route  */}
        <Route path='*' element={<PageNotFound />} />


      </Routes>







    </>
  );
}

export default App;
