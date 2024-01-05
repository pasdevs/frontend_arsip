import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Arsip from './components/Arsip';
import Laporan from './components/Laporan';
import PengajuanNomorSuratBaru from './components/PengajuanNomorSuratBaru';
import Pengajuan from './components/Pengajuan';
import Pengaturan from './components/Pengaturan';
import DetailPengajuan from './components/DetailPengajuan';
import MasterData from './components/MasterData';
// import Pengguna from './components/Pengguna';
import Navbar from './components/Navbar';
import FormDataPegawai from './forms/FormDataPegawai';
import FormDataJabatan from './forms/FormDataJabatan';
import FormDataUnitKerja from './forms/FormDataUnitKerja';
import FormDataLokasiKerja from './forms/FormDataLokasiKerja';
import FormDataKodeDireksi from './forms/FormDataKodeDireksi';
import FormDataKodeSurat from './forms/FormDataKodeSurat';
import FormPengguna from './forms/FormPengguna';
import FormRole from './forms/FormRole';
import TableDataPegawai from './tables/TableDataPegawai';
import TableDataJabatan from './tables/TableDataJabatan';
import TableDataUnitKerja from './tables/TableDataUnitKerja';
import TableDataLokasiKerja from './tables/TableDataLokasiKerja';
import TableDataKodeDireksi from './tables/TableDataKodeDireksi';
import TableDataKodeSurat from './tables/TableDataKodeSurat';
import TablePengguna from './tables/TablePengguna';
import TableRole from './tables/TableRole';
import TestPage from './components/TestPage';
import BaseUrl from './api/BaseUrl';
import DetailRole from './details/DetailRole';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/pengajuan" element={<Pengajuan />} />
        <Route path="/pengajuanNomorSuratbaru" element={<PengajuanNomorSuratBaru />} />
        <Route path="/detailPengajuan/:id" element={<DetailPengajuan />} />
        <Route path="/pengaturan" element={<Pengaturan />} />
        <Route path="/masterData" element={<MasterData />} />
        {/* <Route path="/pengguna" element={<Pengguna />} /> */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/formDataPegawai" element={<FormDataPegawai />} />
        <Route path="/formDataJabatan" element={<FormDataJabatan />} />
        <Route path="/formDataUnitKerja" element={<FormDataUnitKerja />} />
        <Route path="/formDataLokasiKerja" element={<FormDataLokasiKerja />} />
        <Route path="/formDataKodeDireksi" element={<FormDataKodeDireksi />} />
        <Route path="/formDataKodeSurat" element={<FormDataKodeSurat />} />
        <Route path="/formPengguna" element={<FormPengguna/>} />
        <Route path="/formRole" element={<FormRole />} />
        <Route path="/dataPegawai" element={<TableDataPegawai />} />
        <Route path="/dataJabatan" element={<TableDataJabatan />} />
        <Route path="/dataUnitKerja" element={<TableDataUnitKerja />} />
        <Route path="/dataLokasiKerja" element={<TableDataLokasiKerja />} />
        <Route path="/dataKodeDireksi" element={<TableDataKodeDireksi />} />
        <Route path="/dataKodeSurat" element={<TableDataKodeSurat />} />
        <Route path="/pengguna" element={<TablePengguna/>} />
        <Route path="/role" element={<TableRole />} />
        <Route path="/role/:id" element={<DetailRole />} />
        <Route path="/test" element={<TestPage/>} />
        <Route path="/baseUrl" element={<BaseUrl/>} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
