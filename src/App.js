
import './App.css';
import Navbar from './conpnents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './conpnents/pages/Home';
import SigninPage from './conpnents/formComponents/SigninPage';
import About from './conpnents/pages/About';




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/About" element={<About />} />
      </Routes>






    </>
  );
}

export default App;
