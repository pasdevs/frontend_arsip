import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faFile, faGear, faArrowRightFromBracket, faChevronDown, faCircleInfo, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "../App.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <div className='col-lg-2 col-md-2 d-flex flex-column' style={{ backgroundColor: "#3F6260", marginTop: "10px", marginBottom: "10px", borderRadius: "15px", color: "black" }}>

      <div className='row' style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className='col-lg-12' style={{ backgroundColor: "#94A5A4", width: "90%", height: "100px", marginLeft: "12px", borderRadius: "15px" }}>
          <div className='row' style={{ marginTop: "10px" }}>
            <div className='col-lg-12' style={{ textAlign: "center" }}>
              <img src='avatar.png' alt='' style={{ width: "50px", height: "50px" }} />
              <FontAwesomeIcon className='cursor-change' data-bs-toggle="dropdown" aria-expanded="false" icon={faChevronDown} style={{}} />
              <ul class="dropdown-menu" style={{ textAlign: "left" }}>
                <li style={{ marginTop: "-5px", marginBottom: "-15px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}><FontAwesomeIcon className='cursor-change' icon={faUserCircle} style={{ marginRight: "5px" }} />Profile</a></li>
                <hr />
                <li style={{ marginTop: "-15px", marginBottom: "-5px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}><FontAwesomeIcon className='cursor-change' icon={faCircleInfo} style={{ marginRight: "5px" }} />Info App</a></li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12' style={{ textAlign: "center" }}>
              <b><p style={{ fontSize: "10px" }}>Hello, Darth Vader!</p></b>
              <p style={{ fontSize: "10px", marginTop: "-15px" }}>Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <Link to="/dashboard"><button type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%", textAlign: "left" }}><FontAwesomeIcon icon={faHome} style={{ marginRight: "5px" }} />Dashboard</button></Link>
        </div>
      </div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <Link to="/arsip"><button type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%", textAlign: "left" }}><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />Arsip</button></Link>
        </div>
      </div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <div class="btn-group" role="group" style={{ width: "100%" }}>
            <Link to="/pengajuan" type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", textAlign: "left" }}><FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />Pengajuan</Link>
            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{ textAlign: "right" }}>
            </button>
            <ul class="dropdown-menu" style={{ textAlign: "left" }}>
              <li style={{ marginTop: "-5px", marginBottom: "-15px" }}><Link class="dropdown-item" to="/pengajuanNomorSuratBaru" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>Pengajuan Nomor Surat Baru</Link></li>
              <hr />
              <li style={{ marginTop: "-15px", marginBottom: "-5px" }}><Link class="dropdown-item" to="/pengajuanNomorSuratLama" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>Pengajuan Nomor Surat Lama</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <Link to="/laporan"><button type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%", textAlign: "left" }}><FontAwesomeIcon icon={faFile} style={{ marginRight: "5px" }} />Laporan</button></Link>
        </div>
      </div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <div class="btn-group" role="group" style={{ width: "100%" }}>
            <Link to="/pengaturan" type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", textAlign: "left" }}><FontAwesomeIcon icon={faGear} style={{ marginRight: "5px" }} />Pengaturan</Link>
            <button type="button" class="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{ textAlign: "right" }}>
            </button>
            <ul class="dropdown-menu" style={{ textAlign: "left" }}>
              <li style={{ marginTop: "-5px", marginBottom: "-15px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>Export</a></li>
              <hr />
              <li style={{ marginTop: "-15px", marginBottom: "-15px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>Import</a></li>
              <hr />
              <li style={{ marginTop: "-15px", marginBottom: "-15px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>Backup</a></li>
              <hr />
              <li style={{ marginTop: "-15px", marginBottom: "-5px" }}><a class="dropdown-item" href="!#" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%" }}>User Role</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer untuk memisahkan menu dengan Logout */}
      <div className='flex-grow-1'></div>

      <div className='row' style={{ marginBottom: "10px" }}>
        <div className='col-lg-12'>
          <button onClick={handleLogout} type="button" class="btn btn-light" style={{ fontWeight: 'bold', fontSize: "12px", width: "100%", textAlign: "left" }}><FontAwesomeIcon onClick={handleLogout} icon={faArrowRightFromBracket} style={{ marginRight: "5px" }} />Logout</button>
        </div >
      </div>

    </div>
  )
}

export default Sidebar