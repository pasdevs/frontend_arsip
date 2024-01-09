import React, { useState, useEffect } from 'react';
import "../App.css"
import Sidebar from './Sidebar';
import DashboardArsipKeluar from './DashboardArsipKeluar';
import { checkLoginStatus } from '../auth/CheckLogin';

const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkStatus = async () => {
  //     try {
  //       const isLoggedIn = await checkLoginStatus();
  //       if (isLoggedIn) {
  //         setLoggedIn(true);
  //       } else {
  //         setLoggedIn(false);
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   };

  //   checkStatus();
  // }, [loggedIn]);


  // useEffect(() => {
  //   if (!loggedIn) {
  //     window.location.href = 'http://localhost:3000/login';
  //   }
  // }, [loggedIn]);

  return (
    <div>
      
        <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
          <Sidebar />
          {/* KONTEN */}
          <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
            <DashboardArsipKeluar />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
