import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPlus, faSquarePlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const DashboardArsipKeluar = () => {
  const [activeButton, setActiveButton] = useState('arsipKeluar');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  // Highcharts Rekapitulasi
  const persentaseArsipkeluarDoughnut = {
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      height: 150
    },
    title: {
      text: null
    },
    plotOptions: {
      pie: {
        innerSize: '50%', // Menentukan ukuran hole pada doughnut
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    legend: { // Menambahkan legenda di sebelah kanan
      enabled: true,
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },
    series: [{
      name: 'Jumlah Arsip Keluar',
      colorByPoint: true,
      data: [{
        name: 'G.1',
        y: 20
      }, {
        name: 'ST',
        y: 40
      }, {
        name: 'U',
        y: 312
      }, {
        name: 'SK',
        y: 200
      }, {
        name: 'B',
        y: 5
      }, {
        name: 'C',
        y: 8
      }]
    }]
  };


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginRight: "15px", marginBottom: "10px" }}>
          <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
            <ol class="breadcrumb">
              <li class="breadcrumb-item active" aria-current="page"><b>Dashboard</b></li>
            </ol>
          </nav>
          <div className='row'>
            <div className='col-lg-3'>
              <button
                className={`btn ${activeButton === 'arsipKeluar' ? 'custom-bg-color ' : 'bg-light'}`}
                onClick={() => handleButtonClick('arsipKeluar')} style={{ marginRight: "10px", fontSize: "12px", borderRadius: "20px" }}
              >
                <b>Arsip Keluar</b>
              </button>
            </div>
            <div className='col-lg-3'>
              <button
                className={`btn ${activeButton === 'arsipMasuk' ? 'custom-bg-color ' : 'bg-light'}`}
                onClick={() => handleButtonClick('arsipMasuk')} style={{ fontSize: "12px", borderRadius: "20px" }}
              >
                <b>Arsip Masuk</b>
              </button>
            </div>
          </div>

          <div className='row' style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>11</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: ST<br />Surat Tugas</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>28</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: SK<br />Surat Keputusan</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>8</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: U<br />Undangan</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>19</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: Q<br />Permohonan</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>211</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: G.1<br />Kerjasama/MoU/MoA</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>77</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: I<br />Istimewa</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>74</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: R<br />Perizinan/Peminjaman</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>11</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: C<br />Kepegawaian</div>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='row'>
                <div className='col-lg-5' style={{ textAlign: "right", marginRight: "-10px" }}><h1 style={{ fontWeight: "bolder" }}>15</h1></div>
                <div className='col-lg-7' style={{ display: "flex", alignItems: "center", fontSize: "12px" }}>Kode: B<br />Keuangan</div>
              </div>
            </div>
            <div className='col-lg-3' style={{ display: "flex", alignItems: "center", color: "#818081", marginLeft: "15px" }}>
              <span><FontAwesomeIcon icon={faPlus} style={{ marginRight: "5px", fontSize: "20px" }} />Kode Surat..</span>
            </div>
          </div>
        </div>

        <div className='col' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginBottom: "10px", maxHeight: "300px", overflowY: "auto" }}>
          <div className='row' style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "#4FD1C5", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-32</b><br />diajukan oleh: Keuangan</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>
          <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "red", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-33</b><br />diajukan oleh: IT</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>
          <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-34</b><br />diajukan oleh: Akademik</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>
          <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-35</b><br />diajukan oleh: Akademik</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>
          <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-36</b><br />diajukan oleh: Akademik</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>
          <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
            <div className='col-2' style={{display: "flex", alignItems: "center"}}>
              <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
              </span>
            </div>
            <div className='col' style={{fontSize: "12px"}}>
              <p style={{marginBottom: "0px"}}><b>B-37</b><br />diajukan oleh: Akademik</p>
            </div>
            <div className='col-4' style={{display: "flex", alignItems: "center"}}>
              <button type="button" class="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
            </div>
          </div>

        </div>

        {/* baris kedua */}
        <div className='col-lg-8' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginRight: "15px", marginBottom: "10px" }}>
          <div className='row'>
            <div className='col-lg-6' style={{ marginTop: "5px", marginBottom: "5px" }}>
              <span style={{ fontSize: "14px", textDecoration: "underline" }}><b>Persentase Arsip Keluar</b></span><FontAwesomeIcon icon={faCircleInfo} style={{ marginLeft: "5px" }} />
              <HighchartsReact highcharts={Highcharts} options={persentaseArsipkeluarDoughnut} />
            </div>
            <div className='col-lg-6' style={{ marginTop: "5px", marginBottom: "5px" }}>
              <span style={{ fontSize: "14px", textDecoration: "underline" }}><b>Persentase Unit Pengaju</b></span><FontAwesomeIcon icon={faCircleInfo} style={{ marginLeft: "5px" }} />
              <HighchartsReact highcharts={Highcharts} options={persentaseArsipkeluarDoughnut} />
            </div>
            <div className='col-lg-6' style={{ marginTop: "5px", marginBottom: "5px" }}>
              <span style={{ fontSize: "14px", textDecoration: "underline" }}><b>Persentase Proses Arsip</b></span><FontAwesomeIcon icon={faCircleInfo} style={{ marginLeft: "5px" }} />
              <HighchartsReact highcharts={Highcharts} options={persentaseArsipkeluarDoughnut} />
            </div>
            <div className='col-lg-6' style={{ marginTop: "5px", marginBottom: "5px" }}>
              <span style={{ fontSize: "14px", textDecoration: "underline" }}><b>Persentase Author Pengaju</b></span><FontAwesomeIcon icon={faCircleInfo} style={{ marginLeft: "5px" }} />
              <HighchartsReact highcharts={Highcharts} options={persentaseArsipkeluarDoughnut} />
            </div>
          </div>
        </div>

        <div className='col' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginBottom: "10px" }}>
          <p style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "#48BB78", fontSize: "14px" }}><b>Tahapan Pengajuan No Surat</b></p>
          <div className='row'>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Reservasi Surat Baru</b><span class="badge text-bg-success">Reservasi</span></span>
            </div>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pengisian Form</b><span class="badge text-bg-success">Reservasi</span></span>
            </div>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Upload Dokumen Draft (Approval 1)</b><span class="badge text-bg-warning">Progress</span></span>
            </div>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pemeriksaan dokumen oleh Admin TU (Approval 2)</b><span class="badge text-bg-warning">Progress</span></span>
            </div>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Dokumen diterima, Nomor Surat diberikan</b><span class="badge text-bg-primary">Approve</span></span>
            </div>
            <div className='col-lg-12'>
              <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pelampiran Dokumen Fisik ke Bagian Tata Usaha</b><span class="badge text-bg-danger">Arsip</span></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardArsipKeluar