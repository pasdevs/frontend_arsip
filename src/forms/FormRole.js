import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import Joi from 'joi';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.js';
import $ from 'jquery';
import Footer from '../components/Footer';

const FormRole = () => {

  const [userToken, setUserToken] = useState(localStorage.getItem("_aa") || "");
  const [role, setRole] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [roleError, setRoleError] = useState("");
  const [keteranganError, setKeteranganError] = useState("");

  useEffect(() => {
    setUserToken(localStorage.getItem("_aa"));
    // console.log("userToken:", userToken)
  }, [userToken]);


  useEffect(() => {
    $('#yourSelectElement').select2();
  }, []);


  const handleChangeRole = (event) => {
    setRole(event.target.value);
    setRoleError("");
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    setKeteranganError("");
  };

  const validateForm = () => {
    const sqlInjectionPattern = /(\b(?:SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|AND|OR|UNION|JOIN|INNER JOIN|OUTER JOIN|LEFT JOIN|RIGHT JOIN|`|%27%27|%22%22)\b)|('|"|--|#|\/\*|\*\/|\\\*|\\\/)/i;

    const schema = Joi.object({
      role: Joi.string().min(3).max(30).pattern(/^[^_\s]*(_[^_\s]*)*$/).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Role harus diisi.',
        'string.pattern.base': 'Role tidak boleh mengandung spasi dan hanya boleh menggunakan underscore.',
        'string.pattern.invert.base': 'Input tidak valid',
        'string.min': 'Role harus memiliki panjang setidaknya {#limit} karakter.',
        'string.max': 'Role harus memiliki panjang maksimal {#limit} karakter.',
      }),
      keterangan: Joi.string().min(3).max(100).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Keterangan harus diisi.',
        'string.pattern.invert.base': 'Input tidak valid',
        'string.min': 'Keterangan harus memiliki panjang setidaknya {#limit} karakter.',
        'string.max': 'Keterangan harus memiliki panjang maksimal {#limit} karakter.',
      }),
    });

    const { error } = schema.validate({ role, keterangan }, { abortEarly: false });

    if (error) {
      error.details.forEach((err) => {
        const fieldName = err.path[0];
        const errorMessage = err.message;

        if (fieldName === 'role') {
          setRoleError(errorMessage);
        } else if (fieldName === 'keterangan') {
          setKeteranganError(errorMessage);
        }
      });
      return false;
    }
    return true;
  };

  const handleSimpanClickk = async () => {
    try {
      if (validateForm()) {
        // Mengambil CSRF token
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        // create data
        const response = await axios.post("http://localhost:3001/role",
          {
            Role: role,
            Keterangan: keterangan,
            Token: userToken,
          },
          {
            headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
            withCredentials: true,
          },

        );

        if (response) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil menambahkan role!',
            confirmButtonColor: '#198754'
          });
          window.location.href = 'http://localhost:3000/role';

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal menambahkan role!',
            confirmButtonColor: '#198754'
          });
          console.error('Gagal menambahkan role!');
        }
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error.response.data.message,
        confirmButtonColor: '#198754'
      });
      console.error(error.response.data.message);
    }
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
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Form Role</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "10px" }}>
              {/* baris pertama */}
              <div className='col-lg-12'>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label" style={{ fontSize: "small" }}>Role</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className={`form-control form-control-sm ${roleError && 'is-invalid'}`}
                      id="role"
                      placeholder="Role User"
                      value={role}
                      onChange={handleChangeRole}
                    />
                    {roleError && <div className="invalid-feedback">{roleError}</div>}
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

              <div className="col-12 col-sm-12" style={{ marginBottom: "20px" }}>
                <select id="yourSelectElement" className="form-select form-select-sm" aria-label="Select an option">
                  <option value="">Kode Direksi</option>
                  <option value="Unpas.R">Rektor</option>
                  <option value="Unpas.R1">Wakil Rektor Belmawabud</option>
                  <option value="Unpas.R2">Wakil Rektor Keuangan</option>
                  <option value="Unpas.R3">Wakil Rektor Inovasi</option>
                  <option value="Unpas.R5">Kepala Biro</option>
                  <option value="Unpas.R7">Kepala Lembaga</option>
                </select>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleSimpanClickk} style={{ marginRight: "20px" }}>Simpan</button>
                  <Link to="/role"><button type="button" className="btn btn-secondary">Batal</button></Link>
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

export default FormRole