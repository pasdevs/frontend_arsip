import React, { useEffect } from 'react';
import "../App.css"
import Sidebar from './Sidebar';
import DashboardArsipKeluar from './DashboardArsipKeluar';
// import { checkLoginStatus } from '../auth/CheckLogin';
import Cookies from 'js-cookie';

const Dashboard = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Mendapatkan nilai cookie
    const cookieValue = Cookies.get('connect.sid');
    console.log('Nilai dari cookie:', cookieValue);
    console.log('Nilai dari cookie:', document.cookie);

    console.log("dari local storage:", localStorage.getItem('_aa'))
    
  }, []);

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
        <div className='col-lg-10 col-md-10 d-flex flex-column'>
          <DashboardArsipKeluar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
