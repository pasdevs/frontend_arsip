import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Arsip from './components/Arsip';
import Laporan from './components/Laporan';
import PengajuanNomorSuratBaru from './components/PengajuanNomorSuratBaru';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/arsip" exact element={<Arsip />} />
        <Route path="/laporan" exact element={<Laporan />} />
        <Route path="/pengajuanNomorSuratbaru" exact element={<PengajuanNomorSuratBaru />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;
