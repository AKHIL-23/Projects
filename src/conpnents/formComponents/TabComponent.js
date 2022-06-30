import React, { useState } from 'react'
import "./TabComponent.css"
import SignComponent from './SiginComponent';
import SignupComponent from './SignupComponent';
import RegisterUser from './RegisterUser';
import Login from './Login';


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");


    };
    const handleTab2 = () => {
        setActiveTab("tab2");

    };



    return (
        <div className="Tabs  w-full">
            {/* Tab nav */}
            <ul className="nav  flex justify-around items-start p-4">
                <li className={activeTab === "tab1" ? "active border-b-4 border-blue-500  text-md" : " text-md "} onClick={handleTab1}>Sign in</li>
                <li className={activeTab === "tab2" ? "active border-b-4 border-blue-500   text-md" : " text-md "} onClick={handleTab2}>Sign up</li>
            </ul>
            <div className="outlet bg-white flex justify-center items-center ">
                {activeTab === "tab1" ? <SignComponent /> : <SignupComponent />}
                {/* {activeTab === "tab1" ? <Login /> : <RegisterUser />} */}


            </div>





        </div >

    )
}

export default TabComponent