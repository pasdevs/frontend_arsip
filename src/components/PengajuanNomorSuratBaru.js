import React, { useState } from 'react';
import "../App.css"
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const PengajuanNomorSuratBaru = () => {
  const [tanggalSurat, setTanggalSurat] = useState("");
  const [kodeDireksi, setKodeDireksi] = useState('');
  const [perihal, setPerihal] = useState('');
  const [kodeSurat, setKodeSurat] = useState('');
  const [unitKerja, setUnitKerja] = useState('');
  const [yangMenandatangani, setYangMenandatangani] = useState('');
  const [author, setAuthor] = useState('');
  const [noWhatsappAuthor, setNoWhatsappAuthor] = useState('');
  const [emailAuthor, setEmailAuthor] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  // Fungsi untuk menangani perubahan pada input file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("file:", file)
  };

  const handleChangeTanggalSurat = (event) => {
    setTanggalSurat(event.target.value);
  };

  const handleChangeKodeDireksi = (event) => {
    setKodeDireksi(event.target.value);
    console.log(event.target.value)
  };

  const handleChangePerihal = (event) => {
    setPerihal(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKodeSurat = (event) => {
    setKodeSurat(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeUnitKerja = (event) => {
    setUnitKerja(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeYangMenandatangani = (event) => {
    setYangMenandatangani(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeNoWhatsappAuthor = (event) => {
    setNoWhatsappAuthor(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeEmailAuthor = (event) => {
    setEmailAuthor(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
    console.log(event.target.value)
  };


  // Fungsi untuk mengirim data, termasuk file, melalui endpoint
  const handleAjukanClick = () => {
    // Buat objek FormData untuk menyertakan file dalam pengiriman data
    const formData = new FormData();
    formData.append('tanggalSurat', tanggalSurat);
    // ... tambahkan data lain ke formData ...

    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    // Kirim formData ke endpoint menggunakan fetch atau library HTTP request lainnya
    // fetch('url-endpoint', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle respons dari server
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
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
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><b>Pengajuan Nomor Surat Baru</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "20px" }}>
              {/* baris pertama */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputTanggalSurat" className="form-label">Tanggal Surat</label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control"
                      id="tanggalSurat"
                      placeholder="Tanggal Surat"
                      value={tanggalSurat}
                      onChange={handleChangeTanggalSurat}
                    />
                    {tanggalSurat && (
                      <div className="input-group-append" style={{ display: "flex" }}>
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputAuthor" className="form-label">Author</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      placeholder="Nama Penanggung Jawab..."
                      value={author}
                      onChange={handleChangeAuthor}
                    />
                    {author && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* baris kedua */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label">Direksi Penanggung Jawab</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={kodeDireksi}
                      onChange={handleChangeKodeDireksi}
                    >
                      <option value="">Kode Direksi</option>
                      <option value="Unpas.R">Rektor</option>
                      <option value="Unpas.R1">Wakil Rektor Belmawabud</option>
                      <option value="Unpas.R2">Wakil Rektor Keuangan</option>
                      <option value="Unpas.R3">Wakil Rektor Inovasi</option>
                      <option value="Unpas.R5">Kepala Biro</option>
                      <option value="Unpas.R7">Kepala Lembaga</option>
                    </select>
                    {kodeDireksi && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputNomorWhatsapp" className="form-label">Nomor Whatsapp Author</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="nomorWhatsappAuthor"
                      placeholder="+62..."
                      value={noWhatsappAuthor}
                      onChange={handleChangeNoWhatsappAuthor}
                    />
                    {noWhatsappAuthor && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputPerihal" className="form-label">Perihal</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="perihal"
                      placeholder="Perihal Surat..."
                      value={perihal}
                      onChange={handleChangePerihal}
                    />
                    {perihal && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputEmailAuthor" className="form-label">Email Author</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="emailAuthor"
                      placeholder="admin@unpas.ac.id"
                      value={emailAuthor}
                      onChange={handleChangeEmailAuthor}
                    />
                    {emailAuthor && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label">Kode Surat</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={kodeSurat}
                      onChange={handleChangeKodeSurat}
                    >
                      <option value=''>Kode Surat</option>
                      <option value="ST">ST - Surat Tugas</option>
                      <option value="SK">SK - Surat Keputusan</option>
                      <option value="U">U - Undangan</option>
                      <option value="Q">Q - Permohonan</option>
                      <option value="G.1">G.1 - Kerjasama/MoU/MoA</option>
                      <option value="I">I - Istimewa</option>
                      <option value="R">R - Perizinan/Peminjaman</option>
                      <option value="C">C - Kepegawaian</option>
                      <option value="B">B - Keuangan</option>
                    </select>
                    {kodeSurat && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputPerihal" className="form-label">Yang Membubuhkan Tanda Tangan</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="namaYangMenandatangani"
                      placeholder="Nama yang Menandatangani..."
                      value={yangMenandatangani}
                      onChange={handleChangeYangMenandatangani}
                    />
                    {yangMenandatangani && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* baris kelima */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label">Unit Kerja</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={unitKerja}
                      onChange={handleChangeUnitKerja}
                    >
                      <option value=''>Unit Kerja</option>
                      <option value="Akademik">Akademik</option>
                      <option value="Kepegawaian">Kepegawaian</option>
                      <option value="Keuangan">Keuangan</option>
                      <option value="IT">IT</option>
                      <option value="Rumah Tangga">Rumah Tangga</option>
                    </select>
                    {unitKerja && (
                      <div className="input-group-append">
                        <span className="input-group-text" style={{ border: "none" }}>
                          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <p style={{ marginBottom: "0px" }}>Silahkan Upload Draft Surat:</p>
                <p style={{ marginBottom: "0px", fontSize: "9px" }}>1. Mohon diperiksa dan dipastikan seluruh ejaan dan informasi dalam surat</p>
                <p style={{ marginBottom: "0px", fontSize: "9px" }}>2. Mohon diperiksa dan dipastikan kembali surat *<b>Sudah di Tanda Tangan</b> agar mempercepat proses validasi</p>
                <p style={{ marginBottom: "0px", fontSize: "9px" }}>3. Maksimal ukuran file <b>2 MB</b> dengan format file <b>PDF</b></p>

                <div className="input-group">
                  <input
                    type="file"
                    className="form-control form-control-sm"
                    id="formFile"
                    onChange={handleFileChange}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  />
                  {selectedFile && (
                    <div className="input-group-append" style={{display: "flex"}}>
                      <span className="input-group-text" style={{ border: "none" }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
                      </span>
                    </div>
                  )}
                </div>

              </div>

              {/* baris keenam */}
              <div className='col-lg-6'>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <span style={{ marginRight: "10px" }}>Status Dokumen:</span><span class="badge text-bg-primary">Progress</span>
                </div>
              </div>

              {/* baris ketujuh */}
              <div className='col-lg-6'>
              </div>

              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKeterangan" class="form-label">Keterangan:</label>
                  <textarea className="form-control" id="keterangan" rows="1" value={keterangan} onChange={handleChangeKeterangan}></textarea>
                </div>
              </div>

              {/* baris kedelapan */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div class="mb-3">
                  <button type="button" class="btn btn-secondary" style={{ marginRight: "20px" }}>Batal</button>
                  <button type="button" class="btn btn-success" onClick={handleAjukanClick}>Ajukan</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default PengajuanNomorSuratBaru