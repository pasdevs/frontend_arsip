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
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
