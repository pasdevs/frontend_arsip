import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const DetailJabatan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userToken, setUserToken] = useState(localStorage.getItem("_aa") || "");
  const [jabatan, setJabatan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [jabatanError, setJabatanError] = useState("");
  const [keteranganError, setKeteranganError] = useState("");

  useEffect(() => {
    setUserToken(localStorage.getItem("_aa") || "");
  }, [userToken]);

  const handleChangeJabatan = (event) => {
    setJabatan(event.target.value);
    if (event.target.value !== "") {
      setJabatanError("");
    }
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    if (event.target.value !== "") {
      setKeteranganError("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil CSRF token
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        const response = await axios.get(`http://localhost:3001/jabatan/${id}`, {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true,
          params: {
            userToken: userToken
          }
        });

        if (response.data.status) {
          setJabatan(response.data.message.Jabatan);
          setKeterangan(response.data.message.Keterangan);

        } else {
          console.error(response.data.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id, userToken]);

  const handleUpdateClickk = async () => {
    try {
      if (!jabatan) {
        setJabatanError("Jabatan harus diisi.");
      }
      if (!keterangan) {
        setKeteranganError("Keterangan harus diisi.")
      }

      // Mengambil CSRF token
      const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
      const resultCsrf = getCsrf.data.csrfToken;

      // update role
      const response = await axios.patch(`http://localhost:3001/jabatan/${id}`,
        {
          Jabatan: jabatan,
          Keterangan: keterangan,
          Token: userToken,
        },
        {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (response) {
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
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        confirmButtonColor: '#198754'
      });
    }
  };

  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column'>
        <div className='d-flex flex-column' style={{ position: "relative", minHeight: "100vh", marginLeft: "20px", marginRight: "20px", paddingTop: "20px" }}>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Detail Jabatan</b></li>
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
                      className={`form-control form-control-sm ${jabatanError && 'is-invalid'}`}
                      id="jabatan"
                      placeholder="Jabatan"
                      value={jabatan}
                      onChange={handleChangeJabatan}
                    />
                    {jabatanError && <div className="invalid-feedback">{jabatanError}</div>}
                  </div>
                </div>
              </div>
              {/* baris kedua */}
              <div className='col-lg-12'>
                <div className="mb-3">
                  <label htmlFor="keterangan" className="form-label" style={{ fontSize: "small" }}>Keterangan:</label>
                  <textarea
                    className={`form-control form-control-sm ${keteranganError && 'is-invalid'}`}
                    id="keterangan"
                    rows="3"
                    value={keterangan}
                    onChange={handleChangeKeterangan}
                    placeholder='Tambahan...'>
                  </textarea>
                  {keteranganError && <div className="invalid-feedback">{keteranganError}</div>}
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleUpdateClickk} style={{ marginRight: "20px" }}>Update</button>
                  <Link to="/dataJabatan"><button type="button" className="btn btn-secondary">Batal</button></Link>
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

export default DetailJabatan