import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Joi from 'joi';

const FormRole = () => {

  const [userToken, setUserToken] = useState(localStorage.getItem("_aa") || "");
  const [role, setRole] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [roleError, setRoleError] = useState("");
  const [keteranganError, setKeteranganError] = useState("");

  useEffect(() => {
    setUserToken(localStorage.getItem("_aa"));
    console.log("userToken:", userToken)
  }, [userToken]);


  const handleChangeRole = (event) => {
    setRole(event.target.value);
    setRoleError("");
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    setKeteranganError("");
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {

    // cek log data
    console.log("Role:", role)
    console.log("Keterangan:", keterangan)

  }, [role, keterangan]);

  const validateForm = () => {
    const sqlInjectionPattern = /(\b(?:SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|AND|OR|UNION|JOIN|INNER JOIN|OUTER JOIN|LEFT JOIN|RIGHT JOIN|`|%27%27|%22%22)\b)|('|"|--|#|\/\*|\*\/|\\\*|\\\/)/i;

    const schema = Joi.object({
      role: Joi.string().alphanum().min(3).max(30).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Role harus diisi.',
        'string.alphanum': 'Input harus berupa alfanumerik',
        'string.pattern.invert.base': 'JANGAN GITU OM...',
        'string.min': 'Role harus memiliki panjang setidaknya {#limit} karakter.',
        'string.max': 'Keterangan harus memiliki panjang maksimal {#limit} karakter.',
      }),
      keterangan: Joi.string().min(3).max(100).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Keterangan harus diisi.',
        'string.pattern.invert.base': 'JANGAN GITU OM...',
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
      // if (!role || !keterangan) {
      //   setIsFormValid(false);
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Silakan isi role dan keterangan!',
      //     confirmButtonColor: '#198754'
      //   });
      //   return;
      // }
      // setIsFormValid(true);

      if (validateForm()) {
        // Mengambil CSRF token
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        // create data
        const addRole = await axios.post("http://localhost:3001/role",
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

        if (addRole) {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil menambahkan role!',
            confirmButtonColor: '#198754'
          });
          window.location.href = 'http://localhost:3000/role';
          // console.log('Data dari server:', addRole.data);

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
        // title: 'Terjadi kesalahan saat menambahkan role!',
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
        <div className='container'>
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

              {/* baris kelima */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleSimpanClickk} style={{ marginRight: "20px" }}>Simpan</button>
                  <Link to="/role"><button type="button" className="btn btn-secondary">Batal</button></Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default FormRole