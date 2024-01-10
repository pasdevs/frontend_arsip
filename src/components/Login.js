import React, { useState } from 'react';
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

  // useEffect(() => {
  //   // Lakukan permintaan ke server untuk memeriksa status login
  //   axios.get('http://localhost:3001/auth/checkLoginStatus', { withCredentials: true })
  //     .then(response => {
  //       if (response.data.loggedIn) {
  //         window.location.href = 'http://localhost:3000/dashboard';
  //       } else {
  //         window.location.href = 'http://localhost:3000/login';
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error checking login status:', error.message);
  //     });
  // }, [])

  const handleLogin = async () => {
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
      const getCsrf = await axios.get("http://localhost:3001/getCsrf", { withCredentials: true });
      const resultCsrf = getCsrf.data.csrfToken;

      // Melakukan login
      const loginResponse = await axios.post('http://localhost:3001/auth/login',
        {
          Username: username,
          Password: password
        },
        {
          headers: { 'X-CSRF-Token': resultCsrf, 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (loginResponse.data.status) {
        localStorage.setItem('_aa', loginResponse.data.token);
        window.location.href = 'http://localhost:3000/dashboard';
        console.log('Data dari server:', loginResponse.data);

      } else if (loginResponse.data.status === false) {
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
    <div className='container-fluid d-flex flex-column align-items-center justify-content-between min-vh-100'>
      <div className='row' style={{ backgroundColor: "whitesmoke", borderRadius: "15px", height: "60px", marginTop: "20px", alignItems: "center", boxShadow: "2px 2px 5px #888888" }}>
        <div className='col-7' style={{ textAlign: "left" }}>
          <img
            src="logo_unpas.png"
            alt="logo unpas"
            style={{ width: '30px', height: '30px', marginRight: '5px', marginLeft: "10px" }}
          />
          <b style={{ fontSize: "12px" }}>Universitas Pasundan</b>
        </div>
        <div className='col-5' style={{ textAlign: "right" }}>
          <button type="button" className="btn btn-primary" style={{ backgroundColor: "#2A3051", border: "inherit", borderRadius: "15px", width: "120px", fontSize: "12px", marginRight: "10px" }}>Call Us</button>
        </div>
      </div>

      <div className='flex-grow-1'></div>

      <div className='row d-flex justify-content-center flex-grow-1'>
        <div className='col-lg-12'>
          <div className='row'>
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
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} />
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
      </div>

      <div className='row' style={{marginBottom: "10px"}}>
        <div className='col-lg-12'>
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default Login