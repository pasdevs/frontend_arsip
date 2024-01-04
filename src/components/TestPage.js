import React from 'react'

const TestPage = () => {
  return (
    // <div class="sidebar-mini text-sm layout-footer-fixed">
    //   <div class="wrapper">
    //     <nav class="main-header navbar navbar-expand navbar-white navbar-light text-sm">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    //         </li>
    //         <li class="nav-item d-none d-sm-inline-block">
    //           <a href="/ams" class="nav-link">Home</a>
    //         </li>
    //       </ul>
    //       <ul class="navbar-nav ml-auto">
    //         <li class="nav-item">
    //           <a class="nav-link" data-widget="navbar-search" href="#" role="button">
    //             <i class="fas fa-search"></i>
    //           </a>
    //           <div class="navbar-search-block">
    //             <form class="form-inline">
    //               <div class="input-group input-group-sm">
    //                 <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
    //                   <div class="input-group-append">
    //                     <button class="btn btn-navbar" type="submit">
    //                       <i class="fas fa-search"></i>
    //                     </button>
    //                     <button class="btn btn-navbar" type="button" data-widget="navbar-search">
    //                       <i class="fas fa-times"></i>
    //                     </button>
    //                   </div>
    //               </div>
    //             </form>
    //           </div>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" data-widget="fullscreen" href="#" role="button">
    //             <i class="fas fa-expand-arrows-alt"></i>
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <aside class="main-sidebar sidebar-dark-primary elevation-4">
    //       <a href="/" class="brand-link">
    //           <span class="brand-text font-weight-light">Arsip Manajemen Sistem</span>
    //       </a>
    //       <div class="sidebar">
    //         <nav class="mt-2">
    //           <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
    //             <li class="nav-item has-treeview">
    //               <a href="/ams" class="nav-link">
    //                 <i class="nav-icon fas fa-tachometer-alt"></i>
    //                 <p>
    //                   Dashboard
    //                 </p>
    //               </a>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link">
    //                 <i class="nav-icon fas fa-archive"></i>
    //                 <p>
    //                   Arsip Surat
    //                   <i class="right fas fa-angle-left"></i>
    //                 </p>
    //               </a>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Surat Keluar</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Surat Masuk</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Laporan</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link">
    //                 <i class="nav-icon fas fa-file-alt"></i>
    //                 <p>
    //                   Pengajuan Nomor Surat
    //                   <i class="right fas fa-angle-left"></i>
    //                 </p>
    //               </a>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-ajuannosuratkeluar')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Surat Keluar</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Surat Masuk</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Laporan</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link">
    //                 <i class="nav-icon fas fa-cog"></i>
    //                 <p>
    //                   Master Data
    //                   <i class="right fas fa-angle-left"></i>
    //                 </p>
    //               </a>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-pegawai')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Pegawai</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-jabatan')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Jabatan</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-unitkerja')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Unit Kerja</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-lokasikerja')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Lokasi Kerja</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-kodedireksi')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Kode Direksi</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-kodesurat')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Data Kode Surat</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link">
    //                 <i class="nav-icon fas fa-users"></i>
    //                 <p>
    //                   Pengguna
    //                   <i class="right fas fa-angle-left"></i>
    //                 </p>
    //               </a>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-pengguna')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Pengguna</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="loadContent('page-role')">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Role</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Hak Akses</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link">
    //                 <i class="nav-icon fas fa-server"></i>
    //                 <p>
    //                   Database
    //                   <i class="right fas fa-angle-left"></i>
    //                 </p>
    //               </a>
    //               <ul class="nav nav-treeview">
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Backup</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Export</p>
    //                   </a>
    //                 </li>
    //                 <li class="nav-item">
    //                   <a href="#" class="nav-link" onclick="">
    //                     <i class="far fa-circle nav-icon"></i>
    //                     <p>Import</p>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="#" class="nav-link" onclick="loadContent('page-xxx')">
    //                 <i class="nav-icon fab fa-xing"></i>
    //                 <p>
    //                   X Page
    //                   <i class="right fab fa-xing"></i>
    //                 </p>
    //               </a>
    //             </li>
    //             <li class="nav-item has-treeview">
    //               <a href="/login" class="nav-link">
    //                 <i class="nav-icon fas fa-user"></i>
    //                 <p>
    //                   Keluar
    //                   <i class="right fas fa-sign-out-alt"></i>
    //                 </p>
    //               </a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </aside>
    //     <div class="content-wrapper">
    //       <div class="content-header">
    //         <div class="container-fluid">
    //           <div class="row mb-2">
    //             <div class="col-sm-6">
    //               <h1 class="m-0" id="breadcrumbTitle">Dashboard</h1>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <section class="content">
    //         <div class="container-fluid">
    //           <div id="contentArea">
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //     <footer class="main-footer fixed-bottom text-sm">
    //       <div class="float-right d-none d-sm-inline">
    //         Version 1.1.0
    //       </div>
    //       <strong>&copy; 2023 <a href="https://unpas.ac.id">LP2TIK Super Junior</a></strong> made with ❤
    //     </footer>
    //   </div>
    // </div>
    <p>test</p>
  )
}

export default TestPage