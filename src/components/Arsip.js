import React, { useEffect, useState } from 'react'
import "../App.css"
import Sidebar from './Sidebar';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Arsip = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [userLogin, setUserLogin] = useState("");

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();

    const userRole = localStorage.getItem('userRole');
    setUserLogin(userRole);

  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/getAllData');
      const result = await response.json();

      if (result.success) {
        setData(result.data);
      } else {
        console.error(result.error);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const getStatusBadgeVariant = (status) => {
    // Define colors for different status values
    switch (status) {
      case 'Reservasi':
        return 'text-bg-success';
      case 'Arsip':
        return 'text-bg-info';
      case 'Batal':
        return 'text-bg-secondary';
      case 'Progress':
        return 'text-bg-warning';
      case 'Approve':
        return 'text-bg-primary';
      case 'Ditolak':
        return 'text-bg-danger';
      default:
        return 'text-bg-secondary';
    }
  };

  const handleDetail = (row) => {
    console.log('Detail for ID:', row.ID);
    // Implementasi logika detail sesuai kebutuhan
  };

  const handleDelete = (row) => {
    console.log('Delete for ID:', row.ID);
    // Implementasi logika delete sesuai kebutuhan
  };

  const columns = [
    { name: 'ID', selector: 'ID', sortable: true },
    {
      name: 'Nomor Surat/Perihal',
      cell: (row) => (
        <span>
          <strong>{row.NOMOR_SURAT_LENGKAP}</strong><br />{row.PERIHAL}
        </span>
      ),
      sortable: true
    },
    { name: 'Author', selector: 'YANG_MENANDATANGANI', sortable: true },
    {
      name: 'Status',
      selector: 'STATUS',
      sortable: true,
      cell: (row) => (
        <span className={`badge ${getStatusBadgeVariant(row.STATUS)}`}>
          {row.STATUS}
        </span>
      ),
    },
    { name: 'Tanggal Pengajuan', selector: 'TAHUN', sortable: true },
    { name: 'Tanggal Arsip', selector: 'TAHUN', sortable: true },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <FontAwesomeIcon icon={faLayerGroup} onClick={() => handleDetail(row)} style={{ cursor: 'pointer', marginRight: '5px' }} data-toggle="tooltip" title="Detail" data-placement="top"/>
          {userLogin === "admin" ? <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(row)} style={{cursor: 'pointer', color: "red"}} data-toggle="tooltip" title="Hapus" data-placement="top"/> : "" }
        </div>
      ),
      allowOverflow: true,
      button: true,
    },


  ];

  //pencarian
  useEffect(() => {
    const filteredData = data.filter(item =>
      // Sesuaikan dengan kolom atau properti yang ingin Anda cari
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  }, [searchTerm, data]);

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
                  <li class="breadcrumb-item active" aria-current="page"><b>Arsip</b></li>
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

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                  <div className='row'>
                    <div className='col-lg-12'>
                      {/* Data Table */}
                      <DataTable
                        title={<p style={{ fontSize: '12px', fontWeight: "bolder", marginBottom: "0px" }}>Daftar Pengajuan Arsip Keluar</p>}
                        columns={columns}
                        data={filteredData}
                        progressPending={loading}
                        pagination
                        selectableRows
                        fixedHeader
                        selectableRowsHighlight
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                          <input type='text' className='form-control'
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <h3>Arsip Masuk</h3>
                </div>
              </div>

            </div>
          </div>




        </div>

      </div>
    </div>
  )
}

export default Arsip