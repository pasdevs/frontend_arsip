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
import Pengguna from './components/Pengguna';
import Navbar from './components/Navbar';
import FormDataPegawai from './forms/FormDataPegawai';

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
        <Route path="/pengguna" element={<Pengguna />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/formDataPegawai" element={<FormDataPegawai />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
