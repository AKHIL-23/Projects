
import './App.css';
import Navbar from './conpnents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';
import CoursePage from './conpnents/CoursePageComponents/CoursePage';


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
      </Routes>






    </>
  );
}

export default App;
