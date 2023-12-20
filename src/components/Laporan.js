import React from 'react'
import "../App.css"
import Sidebar from './Sidebar';

const Laporan = () => {
  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        Konten Laporan

      </div>

    </div>
  )
}

export default Laporan