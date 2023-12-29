import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faPlus, faSquarePlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Footer from './Footer';
import accessibility from 'highcharts/modules/accessibility';

// Aktifkan modul aksesibilitas
accessibility(Highcharts);

const DashboardArsipKeluar = () => {

  // Highcharts Rekapitulasi
  const persentaseArsipkeluarDoughnut = {
    accessibility: {
      enabled: false,
    },
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
    <div className='container' style={{position: "relative", minHeight: "95vh"}}>
      <div className='row'>
        <div className='col-lg-12'>
          <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page"><b style={{color: "black"}}>Dashboard</b></li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <ul className="nav nav-underline" style={{ fontSize: "12px" }}>
            <li className="nav-item">
              <a className="nav-link active" id="tab1-tab" data-bs-toggle="pill" href="#tab1" role="tab" style={{ color: "black" }}>
                Arsip Keluar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab2-tab" data-bs-toggle="pill" href="#tab2" role="tab" style={{ color: "black" }}>
                Arsip Masuk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
          <div className='row'>
            {/* baris pertama */}
            <div className='col-lg-8' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginRight: "15px", marginBottom: "10px" }}>
              <div className='row' style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>11</span><span style={{ fontSize: "12px" }}>Kode: ST<br />Surat Tugas</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>28</span><span style={{ fontSize: "12px" }}>Kode: SK<br />Surat Keputusan</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>8</span><span style={{ fontSize: "12px" }}>Kode: U<br />Undangan</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>19</span><span style={{ fontSize: "12px" }}>Kode: Q<br />Permohonan</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>211</span><span style={{ fontSize: "12px" }}>Kode: G.1<br />Kerjasama/MoU/MoA</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>77</span><span style={{ fontSize: "12px" }}>Kode: I<br />Istimewa</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>74</span><span style={{ fontSize: "12px" }}>Kode: R<br />Perizinan/Peminjaman</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>11</span><span style={{ fontSize: "12px" }}>Kode: C<br />Kepegawaian</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontWeight: "bolder", fontSize: "35px", marginRight: "5px", width: "55px", textAlign: "right" }}>15</span><span style={{ fontSize: "12px" }}>Kode: B<br />Keuangan</span>
                </div>
                <div className='col-lg-3' style={{ display: "flex", alignItems: "center", color: "#818081" }}>
                  <span className='cursor-change'><FontAwesomeIcon icon={faPlus} style={{ fontSize: "20px", width: "55px", textAlign: "right" }} />Kode Surat..</span>
                </div>
              </div>
            </div>

            <div className='col' style={{ backgroundColor: "#F5F5F7", borderRadius: "5px", marginBottom: "10px", maxHeight: "220px", overflowY: "auto" }}>
              <div className='row' style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "#4FD1C5", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-32</b><br />diajukan oleh: Keuangan</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
                </div>
              </div>
              <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "red", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-33</b><br />diajukan oleh: IT</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
                </div>
              </div>
              <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-34</b><br />diajukan oleh: Akademik</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
                </div>
              </div>
              <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-35</b><br />diajukan oleh: Akademik</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
                </div>
              </div>
              <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-36</b><br />diajukan oleh: Akademik</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
                </div>
              </div>
              <div className='row' style={{ marginTop: "10px", backgroundColor: "#CFCFCF", marginLeft: "0px", marginRight: "0px", padding: "5px", borderRadius: "5px" }}>
                <div className='col-2' style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginLeft: "-5px", backgroundColor: "white", padding: "5px", borderRadius: "5px" }}>
                    <span style={{ backgroundColor: "blue", padding: "2px 5px", borderRadius: "5px" }}><FontAwesomeIcon icon={faWallet} style={{ color: "white" }} /></span>
                  </span>
                </div>
                <div className='col' style={{ fontSize: "12px" }}>
                  <p style={{ marginBottom: "0px" }}><b>B-37</b><br />diajukan oleh: Akademik</p>
                </div>
                <div className='col-4' style={{ display: "flex", alignItems: "center" }}>
                  <button type="button" className="btn" style={{ backgroundColor: "black", color: "white", border: "inherit", fontSize: "12px" }}>Disetujui</button>
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
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Reservasi Surat Baru</b><span className="badge text-bg-success">Reservasi</span></span>
                </div>
                <div className='col-lg-12'>
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pengisian Form</b><span className="badge text-bg-success">Reservasi</span></span>
                </div>
                <div className='col-lg-12'>
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Upload Dokumen Draft (Approval 1)</b><span className="badge text-bg-warning">Progress</span></span>
                </div>
                <div className='col-lg-12'>
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pemeriksaan dokumen oleh Admin TU (Approval 2)</b><span className="badge text-bg-warning">Progress</span></span>
                </div>
                <div className='col-lg-12'>
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Dokumen diterima, Nomor Surat diberikan</b><span className="badge text-bg-primary">Approve</span></span>
                </div>
                <div className='col-lg-12'>
                  <FontAwesomeIcon icon={faSquarePlus} style={{ color: "black", marginRight: "10px" }} /><span style={{ fontSize: "10px" }}><b style={{ marginRight: "5px" }}>Pelampiran Dokumen Fisik ke Bagian Tata Usaha</b><span className="badge text-bg-danger">Arsip</span></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="tab-pane fade" id="tab2" role="tabpanel">
          <h3>Arsip Masuk</h3>
        </div>
      </div>

      <div className='row footer' style={{marginTop: "10px", marginBottom: "10px"}}>
        <Footer />
      </div>

    </div>
  )
}

export default DashboardArsipKeluar