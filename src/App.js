
import './App.css';
import Navbar from './conpnents/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './conpnents/pages/Home';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Banner />} /> */}

      </Routes>




    </>
  );
}

export default App;
