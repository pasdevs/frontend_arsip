import React from 'react'
import "../App.css"
import Sidebar from './Sidebar';

const Arsip = () => {
  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        Konten Arsip

      </div>

    </div>
  )
}

export default Arsip