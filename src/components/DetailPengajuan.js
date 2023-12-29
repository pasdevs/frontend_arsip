import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep, faBackwardStep, faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DetailPengajuan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //pdf viewer
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);

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
  const [status, setStatus] = useState(null);

  const [currentYear, setCurrentYear] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nomorSuratLengkap, setNomorSuratLengkap] = useState('');
  const [nomorSurat, setNomorSurat] = useState("");
  const [serahkanDokumen, setSerahkanDokumen] = useState("")
  const [pdfUrl, setPdfUrl] = useState("")

  const [isFormValid, setIsFormValid] = useState(true);

  //handle navigasi pdf viewer
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Atur batasan zoom sesuai kebutuhan
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Atur batasan zoom sesuai kebutuhan
  };

  const handleResetZoom = () => {
    setScale(1)
  };




  // getData by id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getData/${id}`);
        const { success, data } = response.data;

        if (success) {

          // Mengonversi tanggal JavaScript ke dalam format "YYYY-MM-DD"
          const tanggalDariServer = new Date(data.TANGGAL_PENGAJUAN);
          const tahun = tanggalDariServer.getFullYear();
          const bulan = (tanggalDariServer.getMonth() + 1).toString().padStart(2, '0');
          const tanggal = tanggalDariServer.getDate().toString().padStart(2, '0');
          const tanggalFormatted = `${tahun}-${bulan}-${tanggal}`;
          // console.log("tanggal formatted:", tanggalFormatted);
          setTanggalSurat(tanggalFormatted);

          setKodeDireksi(data.YANG_MENANDATANGANI_KODE);
          setPerihal(data.PERIHAL);
          setKodeSurat(data.KODE_SURAT);
          setUnitKerja(data.UNIT_KERJA);
          setYangMenandatangani(data.YANG_MEMBUBUHKAN_TTD);
          setAuthor(data.AUTHOR);
          setNoWhatsappAuthor(data.NOMOR_WA_AUTHOR);
          setEmailAuthor(data.EMAIL_AUTHOR)
          setKeterangan(data.KETERANGAN)
          setSelectedFile(data.URL_DRAFT_SURAT);
          setStatus(data.STATUS);
          setNomorSuratLengkap(data.NOMOR_SURAT_LENGKAP);
          setNomorSurat(data.NOMOR_SURAT);
          setSerahkanDokumen(data.SERAHKAN_DOKUMEN);
          setPdfUrl(data.PDF_URL)
        } else {
          console.error('Gagal mendapatkan data.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat mengambil data dari server:', error);
      }
    };

    fetchData();
  }, [id, pdfUrl]);


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

  const handleClickStatusApprove = () => {
    setStatus("Approve");
  };

  const handleClickStatusDitolak = () => {
    setStatus("Ditolak");
    setSerahkanDokumen("Belum");
  };

  const handleCheckboxChange = (event) => {
    console.log("checkbox:", event.target.checked);
    if(event.target.checked === true){
      setSerahkanDokumen("Sudah")
      setStatus("Arsip")
    }else {
      setSerahkanDokumen("Progress")
      setStatus("Approve")
    }

    // Toggle nilai ketika checkbox berubah
    // setSerahkanDokumen((nilaiSebelumnya) => (nilaiSebelumnya === "Sudah" ? "Progress" : "Sudah"));
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
    // console.log("NOMOR_SURAT:", newNumber)
    // console.log("YANG_MENANDATANGANI:", yangMenandatangani)
    // console.log("KODE_DIREKSI:", kodeDireksi)
    // console.log("KODE_DIREKSI_NAMA:", kodeDireksiNama)
    // console.log("KODE_SURAT:", kodeSurat)
    // console.log("BULAN:", monthToText(currentDate.getMonth() + 1));
    // console.log("BULAN_ROMAWI:", currentMonth)
    // console.log("TAHUN:", currentYear);
    // console.log("PERIHAL:", perihal)
    // console.log("UNIT_KERJA:", unitKerja)
    // console.log("STATUS: Reservasi")
    // console.log("NOMOR_SURAT_LENGKAP:", nomorSuratLengkap)
    // console.log("URL_DRAFT_SURAT:", selectedFile)
    // console.log("TANGGAL_PENGAJUAN:", tanggalSurat)
    // console.log("YANG_MEMBUBUHKAN_TTD:", yangMenandatangani)
    // console.log("AUTHOR:", author)
    // console.log("NOMOR_WA_AUTHOR:", noWhatsappAuthor)
    // console.log("EMAIL_AUTHOR:", emailAuthor)
    // console.log("KETERANGAN:", keterangan)

  }, [getLastNumber, newNumber, yangMenandatangani, kodeDireksi, kodeDireksiNama, kodeSurat, currentMonth, currentYear, perihal, unitKerja, selectedFile, tanggalSurat, author, noWhatsappAuthor, emailAuthor, keterangan, nomorSuratLengkap]);


  //form data
  const handleSubmitClick = async () => {
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


      const formData = new FormData();

      formData.append('NOMOR_SURAT', String(nomorSurat));
      formData.append('YANG_MENANDATANGANI', String(yangMenandatangani));
      formData.append('YANG_MENANDATANGANI_KODE', String(kodeDireksi));
      formData.append('KODE_SURAT', String(kodeSurat));
      formData.append('BULAN', monthToText(new Date().getMonth() + 1));
      formData.append('BULAN_ROMAWI', String(currentMonth));
      formData.append('TAHUN', String(currentYear));
      formData.append('PERIHAL', String(perihal));
      formData.append('UNIT_KERJA', String(unitKerja));
      formData.append('STATUS', String(status));
      formData.append('NOMOR_SURAT_LENGKAP', `${nomorSurat}/${kodeDireksi}/${kodeSurat}/${currentMonth}/${currentYear}`);
      formData.append('URL_DRAFT_SURAT', String(selectedFile));
      // formData.append('file', selectedFile.file, selectedFile.originalFileName);

      // Periksa apakah ada file yang dipilih sebelum menambahkannya ke FormData
      if (selectedFile && selectedFile.file) {
        try {
          formData.append('file', selectedFile.file, selectedFile.originalFileName);
        } catch (error) {
          console.error('Terjadi kesalahan saat menambahkan file ke FormData:', error);
        }
      }

      formData.append('TANGGAL_PENGAJUAN', String(tanggalSurat));
      formData.append('YANG_MEMBUBUHKAN_TTD', String(yangMenandatangani));
      formData.append('AUTHOR', String(author));
      formData.append('NOMOR_WA_AUTHOR', String(noWhatsappAuthor));
      formData.append('EMAIL_AUTHOR', String(emailAuthor));
      formData.append('KETERANGAN', String(keterangan));
      formData.append('SERAHKAN_DOKUMEN', String(serahkanDokumen));

      // Kirim data ke backend
      const response = await axios.put(`http://localhost:3001/updateData/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { success, message } = response.data;

      if (success) {
        alert(message);
        navigate('/arsip');
      } else {
        console.error('Gagal mengupdate data.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat mengirim permintaan ke server:', error);
    }
  };


  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      <div className='col-lg-3 col-md-10 d-flex flex-column' style={{ marginTop: "10px", overflowX: "auto" }}>
        <div className='container'>
          <div className='row'>
            <p style={{ marginTop: "10px", fontWeight: "bolder" }}>Draft surat:</p>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px", marginTop: "10px", overflowX: "auto", overflowY: "auto", maxHeight: "500px" }}>
              {/* preview pdf */}
              <p style={{ textAlign: "center", marginTop: "0px" }}>
                <FontAwesomeIcon icon={faSearchMinus} onClick={handleZoomOut} style={{ cursor: "pointer", marginRight: "10px" }} />
                <span>{(scale * 100).toFixed()}%</span>
                <FontAwesomeIcon icon={faSearchPlus} onClick={handleZoomIn} style={{ cursor: "pointer", marginLeft: "10px" }} />
                <span className="badge text-bg-secondary" style={{ cursor: "pointer", marginLeft: "10px" }} onClick={handleResetZoom}>Reset</span>
              </p>
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={currentPage} width={280 * scale} height={400 * scale} />
              </Document>
              <p style={{ textAlign: "center", marginTop: "20px" }}>
                <FontAwesomeIcon icon={faBackwardStep} onClick={handlePrevPage} style={{ cursor: "pointer", marginRight: "10px" }} />
                Page {currentPage} of {numPages}
                <FontAwesomeIcon icon={faForwardStep} onClick={handleNextPage} style={{ cursor: "pointer", marginLeft: "10px" }} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KONTEN */}
      <div className='col-lg-7 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Pengajuan Nomor Surat Baru</b></li>
                </ol>
              </nav>
            </div>

            <div className='row' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginLeft: "0px", marginRight: "0px", marginBottom: "10px", padding: "20px" }}>
              {/* baris pertama */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="tanggalSurat" className="form-label" style={{ fontSize: "small" }}>Tanggal Surat</label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="tanggalSurat"
                      placeholder="Tanggal surat"
                      value={tanggalSurat}
                      onChange={handleChangeTanggalSurat}
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label" style={{ fontSize: "small" }}>Penanggung Jawab</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="author"
                      placeholder="Nama penanggung jawab..."
                      value={author}
                      onChange={handleChangeAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris kedua */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="perihal" className="form-label" style={{ fontSize: "small" }}>Perihal</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="perihal"
                      placeholder="Perihal surat..."
                      value={perihal}
                      onChange={handleChangePerihal}
                    />
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="nomorWhatsappAuthor" className="form-label" style={{ fontSize: "small" }}>Kontak</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nomorWhatsappAuthor"
                      placeholder="Nomor whatsapp aktif..."
                      value={noWhatsappAuthor}
                      onChange={handleChangeNoWhatsappAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris ketiga */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="kodeDireksi" className="form-label" style={{ fontSize: "small" }}>Direksi Penanggung Jawab</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      id='kodeDireksi'
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
                <div className="mb-3">
                  <label htmlFor="emailAuthor" className="form-label" style={{ fontSize: "small" }}>Email</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="emailAuthor"
                      placeholder="Email aktif..."
                      value={emailAuthor}
                      onChange={handleChangeEmailAuthor}
                    />
                  </div>
                </div>
              </div>

              {/* baris keempat */}
              <div className='col-lg-6'>
                <div className="mb-3">
                  <label htmlFor="kodeSurat" className="form-label" style={{ fontSize: "small" }}>Kode Surat</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      id='kodeSurat'
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
                <div className="mb-3">
                  <label htmlFor="unitKerja" className="form-label" style={{ fontSize: "small" }}>Unit Kerja</label>
                  <div className="input-group d-flex align-items-center">
                    <select
                      id='unitKerja'
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
                <div className="mb-3">
                  <label htmlFor="namaYangMenandatangani" className="form-label" style={{ fontSize: "small" }}>Tanda Tangan</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="namaYangMenandatangani"
                      placeholder="Nama yang menandatangani..."
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

                {/* Tampilkan URL file sebelumnya */}
                {pdfUrl && (
                  <p style={{ fontSize: "9px", marginTop: "5px" }}>
                    File sebelumnya: <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Lihat file</a>
                  </p>
                )}

              </div>

              {/* baris keenam */}
              <div className='col-lg-6'>
              </div>
              <div className='col-lg-6'>
                {/* <div className="mb-3">
                  <span style={{ marginRight: "10px" }}>Status Dokumen:</span><span className="badge text-bg-dark">Progress</span>
                </div> */}
                <div className="mb-3">
                  <span style={{ marginRight: "10px", fontSize: "small" }}>Status Dokumen:</span>
                  <span className="badge text-bg-primary cursor-change"
                    onClick={handleClickStatusApprove} style={{ border: status === 'Approve' ? '3px solid blue' : 'none' }}>Approve</span>
                  <span style={{ marginLeft: "10px", marginRight: "10px", fontSize: "small" }}>Atau</span>
                  <span className="badge text-bg-danger cursor-change"
                    onClick={handleClickStatusDitolak} style={{ border: status === 'Ditolak' ? '3px solid red' : 'none' }}>Ditolak</span>
                </div>
              </div>

              {/* baris ketujuh */}
              <div className='col-lg-6'>
              </div>

              <div className='col-lg-6'>
                {
                  status === "Approve" || status === "Arsip" ?
                    <div className="mb-3">
                      <label htmlFor="author2" className="form-label">Author</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="author2"
                          placeholder="Nama Penanggung Jawab..."
                          value={`${author}/${unitKerja}`}
                          readOnly
                        />
                      </div>
                    </div>
                    :
                    <div className="mb-3">
                      <label htmlFor="keterangan" className="form-label" style={{ fontSize: "small" }}>Keterangan:</label>
                      <textarea className="form-control" id="keterangan" rows="3" value={keterangan} onChange={handleChangeKeterangan}></textarea>
                    </div>
                }

                {
                  (serahkanDokumen === "Progress" && status === "Approve") || (serahkanDokumen === "Sudah" && status === "Approve") || (serahkanDokumen === "Sudah" && status === "Arsip") || (serahkanDokumen === "Progress" && status === "Arsip") ?
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="serahkanDokumen" onChange={handleCheckboxChange} checked={serahkanDokumen === "Sudah"} />
                      <label htmlFor="serahkanDokumen" className="form-check-label">
                        Dokumen Sudah diserahkan kepada ADMIN
                      </label>
                    </div>
                    :
                    ""
                }


                {/* <div className="mb-3">
                  <label htmlFor="inputKeterangan" className="form-label">Keterangan:</label>
                  <textarea className="form-control" id="keterangan" rows="3" value={keterangan} onChange={handleChangeKeterangan}></textarea>
                </div> */}
              </div>

              {/* baris nomor surat */}
              <div className='col-lg-6'>
              </div>

              <div className='col-lg-6'>
                <div className="mb-3" style={{ display: "none" }}>
                  <label htmlFor="nomorSuratLengkap" className="form-label">NOMOR SURAT</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="nomorSuratLengkap"
                      value={nomorSurat && kodeDireksi && kodeSurat ? `${nomorSurat}/${kodeDireksi}/${kodeSurat}/${currentMonth}/${currentYear}` : nomorSuratLengkap}
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
                <div className="mb-3">
                  <button type="button" className="btn btn-success" onClick={handleSubmitClick} style={{ marginRight: "20px" }}>Submit</button>
                  <Link to="/arsip"><button type="button" className="btn btn-secondary">Batal</button></Link>
                </div>
              </div>




            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailPengajuan