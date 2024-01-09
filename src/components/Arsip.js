import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from './Sidebar';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { checkLoginStatus } from '../auth/CheckLogin';

const Arsip = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);


  // useEffect(() => {
  //   const checkStatus = async () => {
  //     try {
  //       const isLoggedIn = await checkLoginStatus();
  //       if (isLoggedIn) {
  //         setLoggedIn(true);
  //       } else {
  //         setLoggedIn(false);
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   };

  //   checkStatus();
  // }, []);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetchData();

    // if (!loggedIn) {
    //   window.location.href = 'http://localhost:3000/login';
    // }

  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getAllData');
      const result = response.data;

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

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/deleteData/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = response.data;

      if (result.success) {
        console.log('Data berhasil dihapus');
        fetchData();
        Swal.fire({
          icon: 'success',
          title: 'Berhasil menghapus data!',
          confirmButtonColor: '#198754'
        });
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const handleDelete = (row) => {
    Swal.fire({
      title: 'Apakah anda yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(row.ID);
      }
    });
  };

  const columns = [
    { name: 'ID', selector: (row) => row.ID, sortable: true },
    {
      name: 'Nomor Surat/Perihal',
      cell: (row) => (
        <span>
          <strong>{row.NOMOR_SURAT_LENGKAP}</strong><br />{row.PERIHAL}
        </span>
      ),
      sortable: true
    },
    { name: 'Author', selector: (row) => row.AUTHOR, sortable: true },
    {
      name: 'Status',
      selector: (row) => row.STATUS,
      sortable: true,
      cell: (row) => (
        <span className={`badge ${getStatusBadgeVariant(row.STATUS)}`}>
          {row.STATUS}
        </span>
      ),
    },
    {
      name: 'Tanggal Pengajuan',
      selector: (row) => row.TANGGAL_PENGAJUAN,
      sortable: true,
      cell: row => {
        const isoDateString = row.TANGGAL_PENGAJUAN;
        const dateObject = new Date(isoDateString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('id-ID', options);

        return formattedDate;
      },
    },
    {
      name: 'Tanggal Arsip',
      selector: (row) => row.TANGGAL_PENGAJUAN,
      sortable: true,
      cell: row => {
        const isoDateString = row.TANGGAL_PENGAJUAN;
        const dateObject = new Date(isoDateString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('id-ID', options);

        return formattedDate;
      },
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <Link to={`/detailPengajuan/${row.ID}`}>
            <FontAwesomeIcon icon={faLayerGroup} data-toggle="tooltip" title="Detail" data-placement="top" style={{ marginRight: "10px" }} />
          </Link>
          <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(row)} style={{ cursor: 'pointer', color: "red" }} data-toggle="tooltip" title="Hapus" data-placement="top" />
        </div>
      ),
      allowoverflow: true,
    },
  ];

  //pencarian
  useEffect(() => {
    const filteredData = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  }, [searchTerm, data]);

  return (
    <div>
        <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
          <Sidebar />

          {/* KONTEN */}
          <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
                  <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Arsip</b></li>
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
                              <>
                                <input type='text' className='form-control w-25'
                                  placeholder='Search...'
                                  value={searchTerm}
                                  onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {/* <button type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrashCan} />Hapus Data</button> */}
                              </>
                            }
                            subHeaderAlign='left'
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
    </div>
  )
}

export default Arsip