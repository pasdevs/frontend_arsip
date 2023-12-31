import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FormDataJabatan = () => {
  const [jabatan, setJabatanPegawai] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [isFormValid, setIsFormValid] = useState(true);


  const handleChangeJabatanPegawai = (event) => {
    setJabatanPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    console.log(event.target.value)
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {

    // cek log data
    console.log("Jabatan Pegawai:", jabatan)
    console.log("Keterangan:", keterangan)

  }, [jabatan, keterangan]);

  const handleSimpanClickk = async (event) => {
    // alert("Button Simpan Clicked");

    try {
      if (!jabatan || !keterangan) {
        setIsFormValid(false);
        Swal.fire({
          icon: 'error',
          title: 'Silakan isi jabatan dan keterangan!',
          confirmButtonColor: '#198754'
        });
        return;
      }
      setIsFormValid(true);

      // Mengambil CSRF token
      const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
      const resultCsrf = getCsrf.data.csrfToken;
      
      // create data
      const addJabatan = await axios.post("http://localhost:3001/jabatan",
        {
          Jabatan: jabatan,
          Keterangan: keterangan
        },
        {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
  
      if (addJabatan) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil menambahkan jabatan!',
          confirmButtonColor: '#198754'
        });
        window.location.href = 'http://localhost:3000/dataJabatan';
        // console.log('Data dari server:', addRole.data);

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal menambahkan role!',
          confirmButtonColor: '#198754'
        });
        console.error('Gagal menambahkan jabatan!');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Terjadi kesalahan saat menambahkan jabatan!',
        confirmButtonColor: '#198754'
      });
      console.error('Terjadi kesalahan saat menambahkan jabatan!', error);
    }
  };

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
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Form Data Jabatan</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "10px" }}>
              {/* baris pertama */}
              <div className='col-lg-12'>
                <div className="mb-3">
                  <label htmlFor="jabatan" className="form-label" style={{ fontSize: "small" }}>Jabatan</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="jabatan"
                      placeholder="Jabatan Pegawai"
                      value={jabatan}
                      onChange={handleChangeJabatanPegawai}
                    />
                  </div>
                </div>
              </div>
              {/* baris kedua */}
              <div className='col-lg-12'>
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
                <div className='mb-3'>
                  {
                    !isFormValid && <p style={{ color: 'red' }}>Silakan isi semua input!</p>
                  }
                </div>
              </div>

              {/* baris kelima */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleSimpanClickk} style={{ marginRight: "20px" }}>Simpan</button>
                  <Link to="/dataJabatan"><button type="button" className="btn btn-secondary">Batal</button></Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default FormDataJabatan