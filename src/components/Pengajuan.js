import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from './Sidebar';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Pengajuan = () => {
  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Pengajuan</b></li>
                </ol>
              </nav>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <ul className="nav nav-underline" style={{ fontSize: "12px" }}>
                <li className="nav-item">
                  <a className="nav-link active" id="tab1-tab" data-bs-toggle="pill" href="#tab1" role="tab" style={{ color: "black" }}>
                    Pengajuan Arsip Keluar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="tab2-tab" data-bs-toggle="pill" href="#tab2" role="tab" style={{ color: "black" }}>
                    Pengajuan Arsip Masuk
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                  <div className='row'>
                    <div className='col-lg-12'>
                      {/* Data Table */}
                      
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <h3>Arsip Masuk</h3>
                </div>
              </div>

            </div>
          </div>






        </div>
      </div>
    </div>
  )
}

export default Pengajuan