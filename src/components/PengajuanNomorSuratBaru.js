import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Impor SweetAlert
import "../App.css"
import Sidebar from './Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PengajuanNomorSuratBaru = () => {
  const [tanggalSurat, setTanggalSurat] = useState("");
  const [kodeDireksi, setKodeDireksi] = useState('');
  const [kodeDireksiNama, setKodeDireksiNama] = useState('');
  const [perihal, setPerihal] = useState('');
  const [kodeSurat, setKodeSurat] = useState('');
  const [unitKerja, setUnitKerja] = useState('');
  const [yangMenandatangani, setYangMenandatangani] = useState('');
  const [author, setAuthor] = useState('');
  const [noWhatsappAuthor, setNoWhatsappAuthor] = useState('');
  const [emailAuthor, setEmailAuthor] = useState('');
  const [keterangan, setKeterangan] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const [currentYear, setCurrentYear] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nomorSuratLengkap, setNomorSuratLengkap] = useState('');

  const [isFormValid, setIsFormValid] = useState(true);

  // Fungsi untuk menangani perubahan pada input file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Dapatkan nama asli berkas
    const originalFileName = file.name;
    // Simpan objek File dan nama asli berkas ke dalam state
    setSelectedFile({ file, originalFileName });
    console.log("file:", file);
    console.log("originalFileName:", originalFileName);
  };

  const handleChangeTanggalSurat = (event) => {
    setTanggalSurat(event.target.value);
    console.log(event.target.value)
  };

  const handleChangeKodeDireksi = (event) => {
    setKodeDireksi(event.target.value);
    console.log(event.target.value)
    if (event.target.value === "Unpas.R") {
      setKodeDireksiNama("Rektor");
    }
    if (event.target.value === "Unpas.RI") {
      setKodeDireksiNama("Wakil Rektor Bidang Belmawabud");
    }
    if (event.target.value === "Unpas.RII") {
      setKodeDireksiNama("Wakil Rektor Bidang Keuangan");
    }
    if (event.target.value === "Unpas.RIII") {
      setKodeDireksiNama("Wakil Rektor Bidang Inovasi");
    }
    if (event.target.value === "Unpas.RV") {
      setKodeDireksiNama("Kepala Biro");
    }
    if (event.target.value === "Unpas.RVII") {
      setKodeDireksiNama("Kepala Lembaga");
    }
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


  // Fungsi untuk mendapatkan nomor surat terakhir berdasarkan filter kode surat
  const getLastNumber = useCallback(async () => {
    if (kodeSurat) {
      try {
        const response = await axios.get(`http://localhost:3001/getLastNumber/${kodeSurat}`);
        const { success, lastNumber } = response.data;

        if (success) {
          setLastNumber(parseInt(lastNumber, 10));
          setNewNumber(parseInt(lastNumber, 10) + 1);
        } else {
          console.error('Gagal mendapatkan nomor surat terakhir.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data dari server:', error);
      }
    }
  }, [kodeSurat]);


  const monthToRoman = (month) => {
    const romanMonths = [
      'I', 'II', 'III', 'IV', 'V', 'VI',
      'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
    ];
    return romanMonths[month - 1] || '';
  };

  const monthToText = (month) => {
    const namaBulan = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return namaBulan[month - 1] || '';
  };

  // useEffect untuk memantau perubahan pada state
  useEffect(() => {

    getLastNumber();

    // Validasi inputan
    if (tanggalSurat && kodeDireksi && perihal && kodeSurat && unitKerja && yangMenandatangani && author && noWhatsappAuthor && emailAuthor && selectedFile) {
      setIsFormValid(true);
      return;
    }

    // mendapatkan nomor surat lengkap
    setNomorSuratLengkap(`${newNumber}/${kodeDireksi}/${kodeSurat}/${currentMonth}/${currentYear}`)

    // Mendapatkan waktu saat ini
    const currentDate = new Date();
    setCurrentYear(currentDate.getFullYear());
    setCurrentMonth(monthToRoman(currentDate.getMonth() + 1)); // Perhatikan bahwa getMonth() mengembalikan indeks bulan (0-11)

    // cek log data
    console.log("NOMOR_SURAT:", newNumber)
    console.log("YANG_MENANDATANGANI:", yangMenandatangani)
    console.log("KODE_DIREKSI:", kodeDireksi)
    console.log("KODE_DIREKSI_NAMA:", kodeDireksiNama)
    console.log("KODE_SURAT:", kodeSurat)
    console.log("BULAN:", monthToText(currentDate.getMonth() + 1));
    console.log("BULAN_ROMAWI:", currentMonth)
    console.log("TAHUN:", currentYear);
    console.log("PERIHAL:", perihal)
    console.log("UNIT_KERJA:", unitKerja)
    console.log("STATUS: Reservasi")
    console.log("NOMOR_SURAT_LENGKAP:", nomorSuratLengkap)
    console.log("URL_DRAFT_SURAT:", selectedFile)
    console.log("TANGGAL_PENGAJUAN:", tanggalSurat)
    console.log("YANG_MEMBUBUHKAN_TTD:", yangMenandatangani)
    console.log("AUTHOR:", author)
    console.log("NOMOR_WA_AUTHOR:", noWhatsappAuthor)
    console.log("EMAIL_AUTHOR:", emailAuthor)
    console.log("KETERANGAN:", keterangan)


  }, [getLastNumber, newNumber, yangMenandatangani, kodeDireksi, kodeDireksiNama, kodeSurat, currentMonth, currentYear, perihal, unitKerja, selectedFile, tanggalSurat, author, noWhatsappAuthor, emailAuthor, keterangan, nomorSuratLengkap]);


  const handleAjukanClick = async () => {
    try {
      // Validasi inputan
      if (!tanggalSurat || !kodeDireksi || !perihal || !kodeSurat || !unitKerja || !yangMenandatangani || !author || !noWhatsappAuthor || !emailAuthor || !selectedFile) {
        setIsFormValid(false);
        Swal.fire({
          icon: 'error',
          title: 'Silakan isi semua input sebelum mengajukan nomor surat!',
          confirmButtonColor: '#198754'
        });
        return;
      }

      // Jika form valid, lanjutkan penyimpanan
      setIsFormValid(true);

      // Buat objek FormData
      const formData = new FormData();

      formData.append('ID', `${currentYear}_${kodeSurat}_${newNumber}`);
      formData.append('NOMOR_SURAT', newNumber);
      formData.append('YANG_MENANDATANGANI', yangMenandatangani);
      formData.append('YANG_MENANDATANGANI_KODE', kodeDireksi);
      formData.append('KODE_SURAT', kodeSurat);
      formData.append('BULAN', monthToText(new Date().getMonth() + 1));
      formData.append('BULAN_ROMAWI', currentMonth);
      formData.append('TAHUN', currentYear);
      formData.append('PERIHAL', perihal);
      formData.append('UNIT_KERJA', unitKerja);
      formData.append('STATUS', 'Reservasi');
      formData.append('NOMOR_SURAT_LENGKAP', `${newNumber}/${kodeDireksi}/${kodeSurat}/${currentMonth}/${currentYear}`);
      formData.append('file', selectedFile.file, selectedFile.originalFileName);
      formData.append('TANGGAL_PENGAJUAN', tanggalSurat);
      formData.append('YANG_MEMBUBUHKAN_TTD', yangMenandatangani);
      formData.append('AUTHOR', author);
      formData.append('NOMOR_WA_AUTHOR', noWhatsappAuthor);
      formData.append('EMAIL_AUTHOR', emailAuthor);
      formData.append('KETERANGAN', keterangan);
      formData.append('SERAHKAN_DOKUMEN', 'Belum');

      // Kirim data ke backend
      const response = await axios.post('http://localhost:3001/addData', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Penting untuk mengatur tipe konten menjadi form-data
        },
      });

      const { success, message } = response.data;

      if (success) {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil mengajukan nomor surat!',
          confirmButtonColor: '#198754'
        });
        console.log(message);
        // Reset nilai state atau lakukan operasi lainnya setelah berhasil menyimpan nomor surat
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengajukan nomor surat!',
          confirmButtonColor: '#198754'
        });
        console.error('Gagal mengajukan nomor surat!');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Terjadi kesalahan saat mengajukan nomor surat!',
        confirmButtonColor: '#198754'
      });
      console.error('Terjadi kesalahan saat mengajukan nomor surat!', error);
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
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page"><b style={{color: "black"}}>Pengajuan Nomor Surat Baru</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "20px" }}>
              {/* baris pertama */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputTanggalSurat" className="form-label" style={{fontSize: "small"}}>Tanggal Surat</label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="tanggalSurat"
                      placeholder="Tanggal Surat"
                      value={tanggalSurat}
                      onChange={handleChangeTanggalSurat}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputAuthor" className="form-label" style={{fontSize: "small"}}>Penanggung Jawab</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="author"
                      placeholder="Nama Penanggung Jawab..."
                      value={author}
                      onChange={handleChangeAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris kedua */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputPerihal" className="form-label" style={{fontSize: "small"}}>Perihal</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="perihal"
                      placeholder="Perihal Surat..."
                      value={perihal}
                      onChange={handleChangePerihal}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputNomorWhatsapp" className="form-label" style={{fontSize: "small"}}>Kontak</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nomorWhatsappAuthor"
                      placeholder="Nomor Whatsapp Aktif..."
                      value={noWhatsappAuthor}
                      onChange={handleChangeNoWhatsappAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label" style={{fontSize: "small"}}>Direksi Penanggung Jawab</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select form-select-sm"
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
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputEmailAuthor" className="form-label" style={{fontSize: "small"}}>Email</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="emailAuthor"
                      placeholder="Email Aktif..."
                      value={emailAuthor}
                      onChange={handleChangeEmailAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label" style={{fontSize: "small"}}>Kode Surat</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select form-select-sm"
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
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputKodeDireksi" className="form-label" style={{fontSize: "small"}}>Unit Kerja</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      className="form-select form-select-sm"
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
                  </div>
                </div>
              </div>

              {/* baris kelima */}
              <div className='col-lg-6'>
                <div class="mb-3">
                  <label htmlFor="inputPerihal" className="form-label" style={{fontSize: "small"}}>Tanda Tangan</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="namaYangMenandatangani"
                      placeholder="Nama Lengkap Yang Menandatangani..."
                      value={yangMenandatangani}
                      onChange={handleChangeYangMenandatangani}
                    />
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
                    accept='.pdf'
                    id="formFile"
                    onChange={handleFileChange}
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                  />
                </div>

              </div>

              {/* baris keenam */}
              <div className='col-lg-6'>
              </div>
              <div className='col-lg-6'>
                <div class="mb-3">
                  <span style={{ marginRight: "10px", fontSize: "small" }}>Status Dokumen:</span><span class="badge text-bg-dark">Progress</span>
                </div>
              </div>

              {/* baris ketujuh */}
              <div className='col-lg-6'>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="inputKeterangan" class="form-label" style={{fontSize: "small"}}>Keterangan:</label>
                  <textarea className="form-control" id="keterangan" rows="3" value={keterangan} onChange={handleChangeKeterangan} placeholder='(opsional)'></textarea>
                </div>
              </div>

              {/* baris nomor surat */}
              <div className='col-lg-6'>
              </div>

              <div className='col-lg-6'>
                <div class="mb-3" style={{ display: "none" }}>
                  <label htmlFor="inputAuthor" className="form-label">NOMOR SURAT</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="nomorSuratLengkap"
                      value={nomorSuratLengkap}
                      disabled
                      readOnly
                      style={{ fontWeight: "bolder", fontSize: "22px" }}
                    />
                  </div>
                </div>
              </div>

              {/* alert jika belum terisi semua */}
              <div className='col-lg-6'>
                <p style={{ display: "none" }}>Nomor terakhir untuk kode surat {kodeSurat} : {lastNumber}</p>
              </div>
              <div className='col-lg-6'>
                <div className='mb-3'>
                  {
                    !isFormValid && <p style={{ color: 'red' }}>Silakan isi semua input sebelum mengajukan nomor surat!</p>
                  }
                </div>
              </div>

              {/* baris kedelapan */}
              <div className='col-lg-12' style={{ textAlign: "right" }}>
                <div class="mb-3">
                  <button type="button" class="btn btn-success" onClick={handleAjukanClick} style={{ marginRight: "20px" }}>Ajukan</button>
                  <Link to="/dashboard"><button type="button" class="btn btn-secondary">Batal</button></Link>
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