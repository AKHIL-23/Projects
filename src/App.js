
import './App.css';
import Navbar from './conpnents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage';
let courseDummydata = [
  {
    courseName: "JavaScript",
    coursePrice: "$",
    courseImg: "/assets/img/AllCourseListPage/javaScript-1.png"

  },
  {
    courseName: "Android",
    coursePrice: "$",
    courseImg: "/assets/img/AllCourseListPage/android1.png"

  },
  {
    courseName: "React",
    coursePrice: "$",
    courseImg: "/assets/img/AllCourseListPage/react1.png"

  }
]


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<CoursePage courseData={courseDummydata} />} />
      </Routes>






    </>
  );
}

export default App;
