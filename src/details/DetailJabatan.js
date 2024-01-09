import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DetailJabatan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jabatan, setJabatan] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [isFormValid, setIsFormValid] = useState(true);


  const handleChangeJabatan = (event) => {
    setJabatan(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    console.log(event.target.value)
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {

    // cek log data
    console.log("Jabatan:", jabatan)
    console.log("Keterangan:", keterangan)

  }, [jabatan, keterangan]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil CSRF token
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        const response = await axios.get(`http://localhost:3001/jabatan/${id}`, {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true
        });
        const result = response.data;
        console.log("result jabatan:", result.Jabatan)
        console.log("result keterangan:",  result.Keterangan)

        if (result) {
          setJabatan(result.Jabatan);
          setKeterangan(result.Keterangan);

        } else {
          console.error(result.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateClickk = async () => {
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

      // update jabatan
      const updateRole = await axios.put(`http://localhost:3001/jabatan/${id}`,
        {
          Jabatan: jabatan,
          Keterangan: keterangan
        },
        {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (updateRole) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil mengupdate jabatan!',
          confirmButtonColor: '#198754'
        });
        navigate('/dataJabatan');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengupdate jabatan!',
          confirmButtonColor: '#198754'
        });
        console.error('Gagal mengupdate jabatan!');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Terjadi kesalahan saat mengupdate jabatan!',
        confirmButtonColor: '#198754'
      });
      console.error('Terjadi kesalahan saat mengupdate jabatan!', error);
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
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Detail Role</b></li>
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
                      placeholder="Jabatan"
                      value={jabatan}
                      onChange={handleChangeJabatan}
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
                  <button type="button" className="btn btn-success" onClick={handleUpdateClickk} style={{ marginRight: "20px" }}>Update</button>
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

export default DetailJabatan