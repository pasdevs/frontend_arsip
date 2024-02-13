import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const FormPengguna = () => {
  const [namaPegawai, setNamaPegawai] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDefault, setPasswordDefault] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [keterangan, setKeterangan] = useState("");

  // const [isFormValid, setIsFormValid] = useState(true);

  const handleChangeNamaPegawai = (event) => {
    setNamaPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value)
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value)
  };

  const handleChangePasswordDefault = (event) => {
    setPasswordDefault(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    console.log(event.target.value)
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {

    // cek log data
    console.log("Nama Pegawai:", namaPegawai)
    console.log("Username:", username)
    console.log("Password:", password)
    console.log("Password Default:", passwordDefault)
    console.log("Role:", role)
    console.log("Status:", status)
    console.log("Keterangan:", keterangan)

  }, [namaPegawai, username, password, passwordDefault, role, status, keterangan]);

  const handleSimpanClickk = (event) => {
    alert("Button Simpan Clicked");
  };

  const handleClickStatusAktif = () => {
    setStatus("Aktif");
  };

  const handleClickStatusNonAktif = () => {
    setStatus("Non Aktif");
  };

  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        <div className='d-flex flex-column' style={{ position: "relative", minHeight: "100vh", marginLeft: "20px", marginRight: "20px", paddingTop: "20px" }}>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Form Pengguna</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "10px" }}>
              {/* baris pertama */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="namaPegawai" className="form-label" style={{ fontSize: "small" }}>Nama Pegawai</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="namaPegawai"
                      placeholder="Nama Lengkap Pegawai"
                      value={namaPegawai}
                      onChange={handleChangeNamaPegawai}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{ fontSize: "small" }}>Username</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="username"
                      placeholder="username"
                      value={username}
                      onChange={handleChangeUsername}
                    />
                  </div>
                </div>
              </div>


              {/* baris kedua */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{ fontSize: "small" }}>Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="passwordDefault" className="form-label" style={{ fontSize: "small" }}>Password Default</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      id="passwordDefault"
                      placeholder="Password Default"
                      value={passwordDefault}
                      onChange={handleChangePasswordDefault}
                    />
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label" style={{ fontSize: "small" }}>Role</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="role"
                      placeholder="Role User"
                      value={role}
                      onChange={handleChangeRole}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label" style={{ fontSize: "small" }}>Status</label>
                  <div className="form-control form-control-sm">
                    <span className="badge text-bg-info cursor-change"
                      onClick={handleClickStatusAktif} style={{ border: status === 'Aktif' ? '3px solid blue' : 'none', marginRight: "10px" }}>Aktif
                    </span>
                    <span className="badge text-bg-danger cursor-change"
                      onClick={handleClickStatusNonAktif} style={{ border: status === 'Non Aktif' ? '3px solid red' : 'none' }}>Non Aktif
                    </span>
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>

              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="keterangan" className="form-label" style={{ fontSize: "small" }}>Keterangan:</label>
                  <textarea className="form-control form-control-sm" id="keterangan" rows="3" value={keterangan} onChange={handleChangeKeterangan} placeholder='Tambahan...'></textarea>
                </div>
              </div>


              {/* alert jika belum terisi semua */}
              <div className='col-lg-6'>
                {/* <p style={{ display: "none" }}>Nomor terakhir untuk kode surat {kodeSurat} : {lastNumber}</p> */}
              </div>
              <div className='col-lg-6'>
                {/* <div className='mb-3'>
                  {
                    !isFormValid && <p style={{ color: 'red' }}>Silakan isi semua input sebelum mengajukan nomor surat!</p>
                  }
                </div> */}
              </div>

              {/* baris kelima */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleSimpanClickk} style={{ marginRight: "20px" }}>Simpan</button>
                  <Link to="/dashboard"><button type="button" className="btn btn-secondary">Batal</button></Link>
                </div>
              </div>

            </div>

          </div>

          <div className='flex-grow-1'></div>
          <div className='row' style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
}

export default FormPengguna