import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLayerGroup, faArrowsRotate, faMinus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Footer from './Footer';

const Pengajuan = () => {

  const [statusGetData, setStatusGetData] = useState(true);
  const [totalData, setTotalData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
      const resultCsrf = getCsrf.data.csrfToken;

      const response = await axios.get('http://localhost:3001/pengajuan', {
        headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
        withCredentials: true,
        params: {
          page: currentPage + 1,
          limit: itemsPerPage,
          search: searchTerm
        }
      });

      const result = response.data;
      if (result.status) {
        setTotalData(result.total);
        setFilteredData(result.data);
        setTotalPages(result.totalPages);
        setStatusGetData(true)

      } else {
        console.error(result.status);
        setStatusGetData(false)
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      setStatusGetData(false)
    }
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //pencarian
  // useEffect(() => {
  //   const filteredData = data.filter(item =>
  //     Object.values(item).some(value =>
  //       value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   setFilteredData(filteredData);
  // }, [searchTerm, data]);

  //delete data
  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/pengajuan/${id}`, {
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

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apakah anda yakin ingin menghapus data ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
      }
    });
  };

  const getStatusBadgeVariant = (status) => {
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

  const handleDetail = (id) => {
    navigate(`/detailPengajuan/${id}`)
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(Math.min(selected, totalPages - 1));
  };

  const handleChangeItemsPerPage = (event) => {
    const newItemsPerPage = parseInt(event.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(0);
  };

  const handleRefreshData = () => {
    fetchData()
  }

  return (
    <div className='row' style={{ marginLeft: "10px", marginRight: "10px", minHeight: "100vh", position: "relative" }}>
      <Sidebar />

      {/* KONTEN */}
      <div className='col-lg-10 col-md-10 d-flex flex-column'>
        <div className='d-flex flex-column' style={{ position: "relative", minHeight: "100vh", marginLeft: "20px", marginRight: "20px", paddingTop: "20px" }}>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Pengajuan</b></li>
                </ol>
              </nav>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <ul className="nav nav-underline" style={{ fontSize: "12px" }}>
                <li className="nav-item">
                  <a className="nav-link active" id="tab1-tab" data-bs-toggle="pill" href="#tab1" role="tab" style={{ color: "black" }}>
                    Pengajuan Arsip Keluar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="tab2-tab" data-bs-toggle="pill" href="#tab2" role="tab" style={{ color: "black" }}>
                    Pengajuan Arsip Masuk
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                  <div className='row'>
                    <div className='col-lg-12' style={{ marginTop: "20px" }}>
                      <div className='row'>
                        <div className='col col-lg-4' style={{ display: "flex", alignItems: "center" }}>
                          <input type='text' className='form-control form-control-sm'
                            placeholder='Cari...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        <div className='col' style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                          <Link to="/pengajuanNomorSuratBaru"><button type="button" className="btn btn-success btn-sm">Tambah Pengajuan</button></Link>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-12' style={{ marginTop: "20px", marginBottom: "10px" }}>
                      <div className="card">
                        <div className="card-header">
                          <div className='row'>
                            <div className='col' style={{ display: "flex", alignItems: "center" }}>
                              <b style={{ fontSize: "14px" }}>Daftar Pengajuan Arsip Keluar</b>
                            </div>
                            <div className='col' style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                              <button type="button" className="btn btn-success btn-sm" onClick={handleRefreshData} style={{ marginRight: "10px" }} data-toggle="tooltip" title="Refresh" data-placement="top"><FontAwesomeIcon icon={faArrowsRotate} /></button>
                              <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample" data-toggle="tooltip" title="Minimize" data-placement="top"><FontAwesomeIcon icon={faMinus} /></button>
                            </div>
                          </div>
                        </div>
                        <div className="card-body table-responsive p-0 collapse show" id="collapseExample">
                          <table className="table table-bordered table-hover text-nowrap table-sm" style={{ marginBottom: "0px", fontSize: "14px" }}>
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Nomor Surat</th>
                                <th>Perihal</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Tanggal Pengajuan</th>
                                <th>Tanggal Arsip</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filteredData.map((item, index) => (
                                <tr key={item.ID}>
                                  <td>{index + 1}</td>
                                  <td>{item.NOMOR_SURAT_LENGKAP}</td>
                                  <td>{item.PERIHAL}</td>
                                  <td>{item.AUTHOR}</td>
                                  <td><span className={`badge ${getStatusBadgeVariant(item.STATUS)}`}>{item.STATUS}</span></td>
                                  <td>{formatDate(item.TANGGAL_PENGAJUAN)}</td>
                                  <td>{item.TANGGAL_ARSIP ? formatDate(item.TANGGAL_ARSIP) : ""}</td>
                                  <td>
                                    <div>
                                      <FontAwesomeIcon icon={faLayerGroup} onClick={() => handleDetail(item.RoleID)} data-toggle="tooltip" title="Detail" data-placement="top" style={{ marginRight: "10px", cursor: 'pointer', color: "black" }} />
                                      <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(item.ID)} style={{ cursor: 'pointer', color: "red" }} data-toggle="tooltip" title="Hapus" data-placement="top" />
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {loading && <p>Loading...</p>}
                          {statusGetData === false ? <p style={{ textAlign: "center", marginTop: "10px" }}>Tidak ada data untuk ditampilkan</p> : ""}
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-12'>
                      <div className='row'>
                        <div className='col-lg-3' style={{ marginTop: "10px" }}>
                          <p style={{ fontSize: "14px" }}>Hal {currentPage + 1}/{totalPages ? totalPages : totalPages + 1} <span style={{ marginLeft: "10px" }}>({totalData ? totalData : 0} data)</span></p>
                        </div>
                        <div className='col-lg-2' style={{ marginTop: "10px" }}>
                          <select
                            id='itemsPerPage'
                            className="form-select form-select-sm"
                            aria-label="Default select example"
                            value={itemsPerPage}
                            onChange={handleChangeItemsPerPage}
                          >
                            <option value="10">10 baris</option>
                            <option value="25">25 baris</option>
                            <option value="50">50 baris</option>
                            <option value="100">100 baris</option>
                          </select>
                        </div>


                        <div className='col' style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: "10px" }}>
                          {/* pagination */}
                          <ReactPaginate
                            forcePage={Math.min(currentPage, totalPages - 1)}
                            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                            nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                            breakLabel={'...'}
                            pageCount={totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={'pagination justify-content-center'} // Bootstrap class
                            activeClassName={'active'}
                            pageClassName={'page-item'} // Bootstrap class
                            previousClassName={'page-item'} // Bootstrap class
                            nextClassName={'page-item'} // Bootstrap class
                            pageLinkClassName={'page-link'} // Bootstrap class
                            previousLinkClassName={'page-link'} // Bootstrap class
                            nextLinkClassName={'page-link'} // Bootstrap class
                          />
                        </div>

                      </div>

                    </div>
                  </div> {/* end row */}
                </div> {/* end tab pane 1 */}

                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <h3>Arsip Masuk</h3>
                </div> {/* end tab pane 2 */}

              </div> {/* end tab content */}

            </div>
          </div>

          <div className='flex-grow-1'></div>
          <div className='row' style={{ marginTop: "10px", marginBottom: "10px" }}>
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pengajuan