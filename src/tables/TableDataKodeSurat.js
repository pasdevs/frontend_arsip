import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import "../App.css"
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLayerGroup, faArrowsRotate, faMinus, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const TableDataKodeSurat = () => {

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

      const response = await axios.get('http://localhost:3001/kodeSurat', {
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
      // Mengambil CSRF token
      const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
      const resultCsrf = getCsrf.data.csrfToken;

      const response = await axios.delete(`http://localhost:3001/kodeSurat/${id}`, {
        headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
        withCredentials: true
      });

      const result = response.data;

      if (result) {
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

  const handleDetail = (id) => {
    navigate(`/dataKodeSurat/${id}`)
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(Math.min(selected, totalPages - 1));
  };;

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
      <div className='col-lg-10 col-md-10 d-flex flex-column' style={{ marginTop: "10px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12' style={{ backgroundColor: "white", borderRadius: "5px", marginRight: "15px" }}>
              <nav aria-label="breadcrumb" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page"><b style={{ color: "black" }}>Data Kode Surat</b></li>
                </ol>
              </nav>
            </div>
          </div>

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
                  <Link to="/formDataKodeSurat"><button type="button" className="btn btn-success btn-sm">Tambah Kode Surat</button></Link>
                </div>
              </div>
            </div>

            <div className='col-lg-12' style={{ marginTop: "20px", marginBottom: "10px" }}>
              <div className="card">
                <div className="card-header">
                  <div className='row'>
                    <div className='col' style={{ display: "flex", alignItems: "center" }}>
                      <b style={{ fontSize: "14px" }}>Data Kode Surat</b>
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
                        <th>Kode Surat</th>
                        <th>Keterangan</th>
                        <th>Tanggal Buat</th>
                        <th>Tanggal Update</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={item.KodeDireksiID}>
                          <td>{index + 1}</td>
                          <td>{item.KodeDireksi}</td>
                          <td>{item.Keterangan}</td>
                          <td>{formatDate(item.TanggalBuat)}</td>
                          <td>{formatDate(item.TanggalUpdate)}</td>
                          <td>
                            <div>
                              <FontAwesomeIcon icon={faLayerGroup} onClick={() => handleDetail(item.KodeDireksiID)} data-toggle="tooltip" title="Detail" data-placement="top" style={{ marginRight: "10px", cursor: 'pointer', color: "black" }} />
                              <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete(item.KodeDireksiID)} style={{ cursor: 'pointer', color: "red" }} data-toggle="tooltip" title="Hapus" data-placement="top" />
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
          </div>


        </div>
      </div>
    </div>
  )
}

export default TableDataKodeSurat