import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';
import Joi from 'joi';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.js';
import $ from 'jquery';

const FormDataPegawai = () => {

  const [userToken, setUserToken] = useState(localStorage.getItem("_aa") || "");
  const [nipy, setNipy] = useState("");
  const [nipyError, setNipyError] = useState("");
  const [namaPegawai, setNamaPegawai] = useState("");
  const [namaPegawaiError, setNamaPegawaiError] = useState("");
  const [jabatanPegawai, setJabatanPegawai] = useState("");
  const [jabatanPegawaiError, setJabatanPegawaiError] = useState("");
  const [unitKerjaPegawai, setUnitKerjaPegawai] = useState("");
  const [unitKerjaPegawaiError, setUnitKerjaPegawaiError] = useState("");
  const [lokasiKerjaPegawai, setLokasiKerjaPegawai] = useState("");
  const [lokasiKerjaPegawaiError, setLokasiKerjaPegawaiError] = useState("");
  const [noTeleponPegawai, setNoTeleponPegawai] = useState("");
  const [noTeleponPegawaiError, setNoTeleponPegawaiError] = useState("");
  const [emailPegawai, setEmailPegawai] = useState("");
  const [emailPegawaiError, setEmailPegawaiError] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [keteranganError, setKeteranganError] = useState("");

  const [listJabatan, setListJabatan] = useState([]);
  const [listUnitKerja, setListUnitKerja] = useState([]);
  const [listLokasiKerja, setListLokasiKerja] = useState([]);

  useEffect(() => {
    setUserToken(localStorage.getItem("_aa"));
    // console.log("userToken:", userToken)
  }, [userToken]);

  const handleChangeNipy = (event) => {
    setNipy(event.target.value);
    setNipyError("");
  };

  const handleChangeNamaPegawai = (event) => {
    setNamaPegawai(event.target.value);
    setNamaPegawaiError("");
  };

  const handleChangeJabatanPegawai = useCallback((event) => {
    const selectedValue = event.target.value;
    console.log("value jabatan:", selectedValue);
    setJabatanPegawai(selectedValue);
    setJabatanPegawaiError("");
  }, []);

  const handleChangeUnitkerjaPegawai = useCallback((event) => {
    const selectedValue = event.target.value;
    console.log("value unit kerja:", selectedValue);
    setUnitKerjaPegawai(selectedValue);
    setUnitKerjaPegawaiError("");
  }, []);

  const handleChangeLokasiKerjaPegawai = useCallback((event) => {
    const selectedValue = event.target.value;
    console.log("value lokasi kerja:", selectedValue);
    setLokasiKerjaPegawai(selectedValue);
    setLokasiKerjaPegawaiError("");
  }, []);

  const handleChangeNoTeleponPegawai = (event) => {
    setNoTeleponPegawai(event.target.value);
    setNoTeleponPegawaiError("");
  };

  const handleChangeEmailPegawai = (event) => {
    setEmailPegawai(event.target.value);
    setEmailPegawaiError("");
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    setKeteranganError("");
  };

  useEffect(() => {
    $('#jabatanPegawai').select2();
    $('#jabatanPegawai').on('change', handleChangeJabatanPegawai);
    $('#unitKerjaPegawai').select2();
    $('#unitKerjaPegawai').on('change', handleChangeUnitkerjaPegawai);
    $('#lokasiKerjaPegawai').select2();
    $('#lokasiKerjaPegawai').on('change', handleChangeLokasiKerjaPegawai);

    // Membersihkan event handler saat komponen di-unmount
    return () => {
      $('#jabatanPegawai').off('change', handleChangeJabatanPegawai);
      $('#unitKerjaPegawai').off('change', handleChangeUnitkerjaPegawai);
      $('#lokasiKerjaPegawai').off('change', handleChangeLokasiKerjaPegawai);
    };
  }, [handleChangeJabatanPegawai, handleChangeUnitkerjaPegawai, handleChangeLokasiKerjaPegawai]);

  useEffect(() => {
    const fetchJabatanData = async () => {
      try {
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        const response = await axios.get('http://localhost:3001/jabatan', {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true,
          params: {
            userToken: userToken
          }
        });
        // console.log("response get jabatan:", response.data.data);
        setListJabatan(response.data.data);


      } catch (error) {
        console.error("Error fetching jabatan:", error);
      }
    };

    const fetchUnitKerjaData = async () => {
      try {
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        const response = await axios.get('http://localhost:3001/unitkerja', {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true,
          params: {
            userToken: userToken
          }
        });
        setListUnitKerja(response.data.data);


      } catch (error) {
        console.error("Error fetching unit kerja:", error);
      }
    };

    const fetchLokasiKerjaData = async () => {
      try {
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        const response = await axios.get('http://localhost:3001/lokasiKerja', {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true,
          params: {
            userToken: userToken
          }
        });
        setListLokasiKerja(response.data.data);


      } catch (error) {
        console.error("Error fetching lokasi kerja:", error);
      }
    };

    fetchJabatanData();
    fetchUnitKerjaData();
    fetchLokasiKerjaData();
  }, [userToken]);

  const validateForm = () => {
    const sqlInjectionPattern = /(\b(?:SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|AND|OR|UNION|JOIN|INNER JOIN|OUTER JOIN|LEFT JOIN|RIGHT JOIN|`|%27%27|%22%22)\b)|('|"|--|#|\/\*|\*\/|\\\*|\\\/)/i;

    const schema = Joi.object({
      nipy: Joi.string().min(20).max(20).pattern(/^\d{2}\.\d{6}\.\d{4}\.\d{1,2}\.\d{3}$/).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'NIPY harus diisi.',
        'string.pattern.base': 'NIPY harus memiliki format yang valid.',
        'string.pattern.invert.base': 'Input tidak valid',
        'string.min': 'NIPY harus memiliki panjang {#limit} karakter.',
        'string.max': 'NIPY harus memiliki panjang {#limit} karakter.',
      }),
      namaPegawai: Joi.string().min(1).max(100).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Nama Pegawai harus diisi.',
        'string.pattern.invert.base': 'Input tidak valid',
        'string.min': 'Nama Pegawai harus memiliki panjang setidaknya {#limit} karakter.',
        'string.max': 'Nama Pegawai harus memiliki panjang maksimal {#limit} karakter.',
      }),
      jabatanPegawai: Joi.string().required().messages({
        'string.empty': 'Jabatan Pegawai harus diisi.',
      }),
      unitKerjaPegawai: Joi.string().required().messages({
        'string.empty': 'Unit Kerja Pegawai harus diisi.',
      }),
      lokasiKerjaPegawai: Joi.string().required().messages({
        'string.empty': 'Lokasi Kerja Pegawai harus diisi.',
      }),
      noTeleponPegawai: Joi.string().required().messages({
        'string.empty': 'Nomor Telepon Pegawai harus diisi.',
      }),
      emailPegawai: Joi.string().email({ tlds: { allow: false } }).required().messages({
        'string.empty': 'Alamat Email Pegawai harus diisi.',
        'string.email': 'Format Email Pegawai tidak valid.',
      }),
      keterangan: Joi.string().min(3).max(100).pattern(sqlInjectionPattern, { invert: true }).required().messages({
        'string.empty': 'Keterangan harus diisi.',
        'string.pattern.invert.base': 'Input tidak valid',
        'string.min': 'Keterangan harus memiliki panjang setidaknya {#limit} karakter.',
        'string.max': 'Keterangan harus memiliki panjang maksimal {#limit} karakter.',
      }),
    });

    const { error } = schema.validate({ nipy, namaPegawai, jabatanPegawai, unitKerjaPegawai, lokasiKerjaPegawai, noTeleponPegawai, emailPegawai, keterangan }, { abortEarly: false });

    if (error) {
      error.details.forEach((err) => {
        const fieldName = err.path[0];
        const errorMessage = err.message;

        if (fieldName === 'nipy') {
          setNipyError(errorMessage);
        } else if (fieldName === 'namaPegawai') {
          setNamaPegawaiError(errorMessage);
        } else if (fieldName === 'jabatanPegawai') {
          setJabatanPegawaiError(errorMessage);
        } else if (fieldName === 'unitKerjaPegawai') {
          setUnitKerjaPegawaiError(errorMessage);
        } else if (fieldName === 'lokasiKerjaPegawai') {
          setLokasiKerjaPegawaiError(errorMessage);
        } else if (fieldName === 'noTeleponPegawai') {
          setNoTeleponPegawaiError(errorMessage);
        } else if (fieldName === 'emailPegawai') {
          setEmailPegawaiError(errorMessage);
        } else if (fieldName === 'keterangan') {
          setKeteranganError(errorMessage);
        }
      });
      return false;
    }
    return true;
  };

  const handleSimpanClickk = async (event) => {
    try {
      if (validateForm()) {
        // Mengambil CSRF token
        const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
        const resultCsrf = getCsrf.data.csrfToken;

        // create data
        const response = await axios.post("http://localhost:3001/pegawai",
          {
            NIPY: nipy,
            NamaPegawai: namaPegawai,
            JabatanID: jabatanPegawai,
            UnitKerjaID: unitKerjaPegawai,
            LokasiKerjaID: lokasiKerjaPegawai,
            NoTelepon: noTeleponPegawai,
            Email: emailPegawai,
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
            title: 'Berhasil menambahkan pegawai!',
            confirmButtonColor: '#198754'
          });
          window.location.href = 'http://localhost:3000/pegawai';

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Gagal menambahkan pegawai!',
            confirmButtonColor: '#198754'
          });
          console.error('Gagal menambahkan pegawai!');
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
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Form Data Pegawai</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "10px" }}>
              {/* baris pertama */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="nipy" className="form-label" style={{ fontSize: "small" }}>NIPY</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className={`form-control form-control-sm ${nipyError && 'is-invalid'}`}
                      id="nipy"
                      placeholder="Nomor Induk Pegawai Yayasan"
                      value={nipy}
                      onChange={handleChangeNipy}
                    />
                    {nipyError && <div className="invalid-feedback">{nipyError}</div>}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="namaPegawai" className="form-label" style={{ fontSize: "small" }}>Nama Pegawai</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className={`form-control form-control-sm ${namaPegawaiError && 'is-invalid'}`}
                      id="namaPegawai"
                      placeholder="Nama Lengkap Pegawai"
                      value={namaPegawai}
                      onChange={handleChangeNamaPegawai}
                    />
                    {namaPegawaiError && <div className="invalid-feedback">{namaPegawaiError}</div>}
                  </div>
                </div>
              </div>

              {/* baris kedua */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="jabatanPegawai" className="form-label" style={{ fontSize: "small" }}>Jabatan</label>
                  <div className="input-group">
                    <select
                      className={`form-select form-select-sm`}
                      id="jabatanPegawai"
                      value={jabatanPegawai}
                      onChange={handleChangeJabatanPegawai}
                    >
                      <option value="">-- Pilih Jabatan --</option>
                      {listJabatan.map((item) => (
                        <option key={item.JabatanID} value={item.JabatanID}>{item.Jabatan}</option>
                      ))}
                    </select>
                    {jabatanPegawaiError && <div className="invalid-feedback">{jabatanPegawaiError}</div>}
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="unitKerjaPegawai" className="form-label" style={{ fontSize: "small" }}>Unit Kerja</label>
                  <div className="input-group">
                    <select
                      className={`form-select form-select-sm ${unitKerjaPegawaiError && 'is-invalid'}`}
                      id="unitKerjaPegawai"
                      value={unitKerjaPegawai}
                      onChange={handleChangeUnitkerjaPegawai}
                    >
                      <option value="">-- Pilih Unit Kerja --</option>
                      {listUnitKerja.map((item) => (
                        <option key={item.UnitKerjaID} value={item.UnitKerjaID}>{item.UnitKerja}</option>
                      ))}
                    </select>
                    {unitKerjaPegawaiError && <div className="invalid-feedback">{unitKerjaPegawaiError}</div>}
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="lokasiKerjaPegawai" className="form-label" style={{ fontSize: "small" }}>Lokasi Kerja</label>
                  <div className="input-group">
                    <select
                      className={`form-select form-select-sm ${lokasiKerjaPegawaiError && 'is-invalid'}`}
                      id="lokasiKerjaPegawai"
                      value={lokasiKerjaPegawai}
                      onChange={handleChangeLokasiKerjaPegawai}
                    >
                      <option value="">-- Pilih Lokasi Kerja --</option>
                      {listLokasiKerja.map((item) => (
                        <option key={item.LokasiKerjaID} value={item.LokasiKerjaID}>{item.LokasiKerja}</option>
                      ))}
                    </select>
                    {lokasiKerjaPegawaiError && <div className="invalid-feedback">{lokasiKerjaPegawaiError}</div>}
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="noTeleponPegawai" className="form-label" style={{ fontSize: "small" }}>Nomor Telepon Pegawai <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green" }} /></label>
                  <div className="input-group">
                    <input
                      type="number"
                      className={`form-control form-control-sm ${noTeleponPegawaiError && 'is-invalid'}`}
                      id="noTeleponPegawai"
                      placeholder="Nomor Whatsapp Aktif"
                      value={noTeleponPegawai}
                      onChange={handleChangeNoTeleponPegawai}
                    />
                    {noTeleponPegawaiError && <div className="invalid-feedback">{noTeleponPegawaiError}</div>}
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="emailPegawai" className="form-label" style={{ fontSize: "small" }}>Email Pegawai</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className={`form-control form-control-sm ${emailPegawaiError && 'is-invalid'}`}
                      id="emailPegawai"
                      placeholder="Email Aktif Pegawai"
                      value={emailPegawai}
                      onChange={handleChangeEmailPegawai}
                    />
                    {emailPegawaiError && <div className="invalid-feedback">{emailPegawaiError}</div>}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
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
                  <Link to="/dataPegawai"><button type="button" className="btn btn-secondary">Batal</button></Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default FormDataPegawai