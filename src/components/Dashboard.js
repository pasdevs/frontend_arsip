import React, { } from 'react';
import "../App.css"
// import FormSurat from './FormSurat';
import Sidebar from './Sidebar';
import DashboardArsipKeluar from './DashboardArsipKeluar';

const Dashboard = () => {
  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{marginTop: "10px"}}>
        {/* <FormSurat /> */}
        <DashboardArsipKeluar />

      </div>

    </div>
  );
};

export default Dashboard;
