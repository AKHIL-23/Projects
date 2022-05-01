import React, { useState ,useLocation,useEffect } from 'react';

import '../css/style.scss';
import '../charts/ChartjsConfig';


import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  // const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change


  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full  max-w-9xl mx-auto font-inter antialiased bg-slate-100 text-slate-600">

            {/* All Home content paste here by defult  */}
            <Outlet/>


          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;