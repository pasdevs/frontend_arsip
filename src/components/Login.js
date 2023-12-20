import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kredensial hardcoded untuk admin dan user
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else if (username === 'user' && password === 'user') {
      navigate('/user');
    } else {
      alert('Username atau password salah');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };
  return (
    <div>
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
            <button type="button" class="btn btn-primary" style={{ backgroundColor: "#2A3051", border: "inherit", borderRadius: "15px", width: "120px", fontSize: "12px", marginRight: "20px" }}>Call Us</button>
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
                <div class="mb-3">
                  <label htmlFor="InputUsername" className="form-label" style={{ fontSize: "12px" }}><b>Username</b></label>
                  <input type="text" className="form-control" id="InputUsername" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKeyPress} style={{ borderRadius: "10px", fontSize: "12px" }} />
                </div>
                <div class="mb-3">
                  <label htmlFor="InputPassword" className="form-label" style={{ fontSize: "12px" }}><b>Password</b></label>
                  <input type="password" className="form-control" id="InputPassword" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyPress} style={{ borderRadius: "10px", fontSize: "12px" }} />
                </div>
                <div class="mb-3 form-check form-switch custom-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  <label class="form-check-label" for="flexSwitchCheckDefault" style={{ fontSize: "12px" }}><b>Remember me</b></label>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin} style={{ backgroundColor: "#3F6260", border: "inherit", width: "100%", borderRadius: "10px", fontSize: "12px" }}>
                  <b>SIGN IN</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer" style={{ fontSize: "12px", marginLeft: "-250px" }}>
        @ 2023, Made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> by <b><a href='https://sptik.unpas.ac.id/' style={{ textDecoration: "none", color: "#38B2AC" }}>Creative LP2TIK Junior</a></b> for a better web.
      </div>

    </div>
  )
}

export default Login