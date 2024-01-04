import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';

const FormDataPegawai = () => {
  const [nipy, setNipy] = useState("");
  const [namaPegawai, setNamaPegawai] = useState("");
  const [jabatanPegawai, setJabatanPegawai] = useState("");
  const [unitKerjaPegawai, setUnitKerjaPegawai] = useState("");
  const [lokasiKerjaPegawai, setLokasiKerjaPegawai] = useState("");
  const [noTeleponPegawai, setNoTeleponPegawai] = useState("");
  const [emailPegawai, setEmailPegawai] = useState("");
  const [keterangan, setKeterangan] = useState("");

  // const [isFormValid, setIsFormValid] = useState(true);


  const handleChangeNipy = (event) => {
    setNipy(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeNamaPegawai = (event) => {
    setNamaPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeJabatanPegawai = (event) => {
    setJabatanPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeUnitkerjaPegawai = (event) => {
    setUnitKerjaPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeLokasiKerjaPegawai = (event) => {
    setLokasiKerjaPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeNoTeleponPegawai = (event) => {
    setNoTeleponPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeEmailPegawai = (event) => {
    setEmailPegawai(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    console.log(event.target.value)
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {


    // cek log data
    console.log("NIPY:", nipy)
    console.log("Nama Pegawai:", namaPegawai)
    console.log("Jabatan Pegawai:", jabatanPegawai)
    console.log("Unit Kerja Pegawai:", unitKerjaPegawai)
    console.log("Lokasi Kerja Pegawai:", lokasiKerjaPegawai)
    console.log("Nomor Telepon Pegawai:", noTeleponPegawai)
    console.log("Email Pegawai:", emailPegawai)
    console.log("Keterangan:", keterangan)

  }, [nipy, namaPegawai, jabatanPegawai, unitKerjaPegawai, lokasiKerjaPegawai, noTeleponPegawai, emailPegawai, keterangan]);


  // const handleAjukanClick = async () => {
  //   try {
  //     // Validasi inputan
  //     if (!tanggalSurat || !kodeDireksi || !perihal || !kodeSurat || !unitKerja || !yangMenandatangani || !author || !noWhatsappAuthor || !emailAuthor || !selectedFile) {
  //       setIsFormValid(false);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Silakan isi semua input sebelum mengajukan nomor surat!',
  //         confirmButtonColor: '#198754'
  //       });
  //       return;
  //     }

  //     // Jika form valid, lanjutkan penyimpanan
  //     setIsFormValid(true);

  //     // Buat objek FormData
  //     const formData = new FormData();

  //     formData.append('ID', `${currentYear}_${kodeSurat}_${newNumber}`);
  //     formData.append('NOMOR_SURAT', newNumber);
  //     formData.append('YANG_MENANDATANGANI', yangMenandatangani);
  //     formData.append('YANG_MENANDATANGANI_KODE', kodeDireksi);
  //     formData.append('KODE_SURAT', kodeSurat);
  //     formData.append('BULAN', monthToText(new Date().getMonth() + 1));
  //     formData.append('BULAN_ROMAWI', currentMonth);
  //     formData.append('TAHUN', currentYear);
  //     formData.append('PERIHAL', perihal);
  //     formData.append('UNIT_KERJA', unitKerja);
  //     formData.append('STATUS', 'Reservasi');
  //     formData.append('NOMOR_SURAT_LENGKAP', `${newNumber}/${kodeDireksi}/${kodeSurat}/${currentMonth}/${currentYear}`);
  //     formData.append('file', selectedFile.file, selectedFile.originalFileName);
  //     formData.append('TANGGAL_PENGAJUAN', tanggalSurat);
  //     formData.append('YANG_MEMBUBUHKAN_TTD', yangMenandatangani);
  //     formData.append('AUTHOR', author);
  //     formData.append('NOMOR_WA_AUTHOR', noWhatsappAuthor);
  //     formData.append('EMAIL_AUTHOR', emailAuthor);
  //     formData.append('KETERANGAN', keterangan);
  //     formData.append('SERAHKAN_DOKUMEN', 'Belum');

  //     // Kirim data ke backend
  //     const response = await axios.post('http://localhost:3001/addData', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data', // Penting untuk mengatur tipe konten menjadi form-data
  //       },
  //     });

  //     const { success, message } = response.data;

  //     if (success) {
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Berhasil mengajukan nomor surat!',
  //         confirmButtonColor: '#198754'
  //       });
  //       console.log(message);
  //       // Reset nilai state atau lakukan operasi lainnya setelah berhasil menyimpan nomor surat
  //     } else {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Gagal mengajukan nomor surat!',
  //         confirmButtonColor: '#198754'
  //       });
  //       console.error('Gagal mengajukan nomor surat!');
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Terjadi kesalahan saat mengajukan nomor surat!',
  //       confirmButtonColor: '#198754'
  //     });
  //     console.error('Terjadi kesalahan saat mengajukan nomor surat!', error);
  //   }
  // };

  const handleSimpanClickk = (event) => {
    alert("Button Simpan Clicked");
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
                      className="form-control form-control-sm"
                      id="nipy"
                      placeholder="Nomor Induk Pegawai Yayasan"
                      value={nipy}
                      onChange={handleChangeNipy}
                    />
                  </div>
                </div>
              </div>
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

              {/* baris kedua */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="jabatanPegawai" className="form-label" style={{ fontSize: "small" }}>Jabatan</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="jabatanPegawai"
                      placeholder="Jabatan Pegawai"
                      value={jabatanPegawai}
                      onChange={handleChangeJabatanPegawai}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="unitKerjaPegawai" className="form-label" style={{ fontSize: "small" }}>Unit Kerja</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="unitKerjaPegawai"
                      placeholder="Unit kerja Pegawai"
                      value={unitKerjaPegawai}
                      onChange={handleChangeUnitkerjaPegawai}
                    />
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="lokasiKerjaPegawai" className="form-label" style={{ fontSize: "small" }}>Lokasi Kerja</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="lokasiKerjaPegawai"
                      placeholder="Lokasi Kerja Pegawai"
                      value={lokasiKerjaPegawai}
                      onChange={handleChangeLokasiKerjaPegawai}
                    />
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="noTeleponPegawai" className="form-label" style={{ fontSize: "small" }}>Nomor Telepon Pegawai <FontAwesomeIcon icon={faWhatsapp} style={{ color: "green" }} /></label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="noTeleponPegawai"
                      placeholder="Nomor Whatsapp Aktif"
                      value={noTeleponPegawai}
                      onChange={handleChangeNoTeleponPegawai}
                    />
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="emailPegawai" className="form-label" style={{ fontSize: "small" }}>Email Pegawai</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="emailPegawai"
                      placeholder="Email Aktif Pegawai"
                      value={emailPegawai}
                      onChange={handleChangeEmailPegawai}
                    />
                  </div>
                </div>
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
        </div>
      </div>

    </div>
  )
}

export default FormDataPegawai