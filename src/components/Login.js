import React, { useState, useEffect } from 'react';
import "../App.css"
import Footer from './Footer';
import axios from 'axios';
import toastr from 'toastr';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(true);

  // const navigate = useNavigate();

  // const checkLoginStatus = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/checkLoginStatus', { withCredentials: true });
  //     if (response.data.loggedIn) {
  //       // Jika pengguna sudah login, redirect ke halaman lain (misalnya, dashboard)
  //       window.location.href = '/navbar'; // Sesuaikan dengan path halaman lainnya
  //     }else{
  //       window.location.href = '/login';
  //     }
  //   } catch (error) {
  //     console.error('Error checking login status:', error.message);
  //     // Handle error jika perlu
  //   }
  // };

  useEffect(() => {
    // Panggil fungsi untuk memeriksa status login ketika komponen mount
    // checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    const __a = process.env.REACT_APP_A;
    const __b = process.env.REACT_APP_B;
    const __c = process.env.REACT_APP_C;

    try {

      // Validasi inputan
      if (!username || !password) {
        setIsFormValid(false);
        Swal.fire({
          icon: 'error',
          title: 'Silakan isi username dan password!',
          confirmButtonColor: '#198754'
        });
        return;
      }

      // Jika form valid, lanjutkan login
      setIsFormValid(true);

      // Mengambil CSRF token
      const __d = await axios.get(`${__a}${__b}`, { withCredentials: true });
      const __e = __d.data.csrfToken;
      
      // Melakukan login
      const loginResponse = await axios.post(
        `${__a}${__c}`,
        {
          Username: username,
          Password: password
        },
        {
          headers: { 'X-CSRF-Token': __e, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
  
      if (loginResponse.data.status) {
        window.location.href = 'http://localhost:3000/navbar';
        console.log('Data dari server:', loginResponse.data);
      } else if(loginResponse.data.status === false){
        alert(loginResponse.data.message);
      }
    } catch (error) {
      toastr.error(error.response ? error.response.data.message : 'Terjadi kesalahan pada server');
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className='container' style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="background-overlay">
        <img src="bg1.png" alt="" style={{ borderRadius: "15px", width: "90%", height: "80%", marginTop: "-20px", marginLeft: "140px" }} />
      </div>

      <div className='container' style={{ display: "flex", justifyContent: "center" }}>
        <div className='row' style={{ backgroundColor: "whitesmoke", borderRadius: "15px", width: "70%", height: "60px", marginTop: "20px", alignItems: "center", boxShadow: "2px 2px 5px #888888" }}>
          <div className='col-lg-6'>
            <img
              src="logo_unpas.png"
              alt="logo unpas"
              style={{ width: '30px', height: '30px', marginRight: '5px', marginLeft: "20px" }}
            />
            <b style={{ fontSize: "12px" }}>Universitas pasundan</b>
          </div>
          <div className='col-lg-6' style={{ textAlign: "right" }}>
            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#2A3051", border: "inherit", borderRadius: "15px", width: "120px", fontSize: "12px", marginRight: "20px" }}>Call Us</button>
          </div>
        </div>
      </div>

      <div className='container' style={{ display: "flex", justifyContent: "center" }}>
        <div className='row' style={{ marginTop: "100px", width: "70%" }}>
          <div className='col-lg-12'>
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <div className="card-body">
                <h4 className="card-title" style={{ color: "#3F6260", marginBottom: "0px" }}>AMS Unpas 2023</h4>
                <p style={{ fontSize: "11px", color: "darkgray", fontWeight: 'bold' }}>Enter your username and password to sign in</p>
                <div className="mb-3">
                  <label htmlFor="InputUsername" className="form-label" style={{ fontSize: "12px" }}><b>Username</b></label>
                  <input type="text" className="form-control" id="InputUsername" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyPress} style={{ borderRadius: "10px", fontSize: "12px" }} />
                </div>
                <div className="mb-3">
                  <label htmlFor="InputPassword" className="form-label" style={{ fontSize: "12px" }}><b>Password</b></label>
                  <input type="password" className="form-control" id="InputPassword" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress} style={{ borderRadius: "10px", fontSize: "12px" }} />
                </div>
                <div className="mb-3 form-check form-switch custom-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ fontSize: "12px" }}><b>Remember me</b></label>
                </div>
                <div className='mb-3'>
                  {
                    !isFormValid && <p style={{ color: 'red' }}>Silakan isi username dan password terlebih dahulu!</p>
                  }
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin} style={{ backgroundColor: "#3F6260", border: "inherit", width: "100%", borderRadius: "10px", fontSize: "12px" }}>
                  <b>SIGN IN</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container' style={{ display: "flex", justifyContent: "center" }}>
        <div className='row' style={{ marginTop: "50px", width: "70%" }}>
          <div className='col-lg-12' style={{ position: "fixed", bottom: "0", marginBottom: "10px" }}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login