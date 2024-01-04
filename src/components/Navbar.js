import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // const navigate = useNavigate();


  useEffect(() => {
    // Lakukan permintaan ke server untuk memeriksa status login
    axios.get('http://localhost:3001/checkLoginStatus', { withCredentials: true })
      .then(response => {
        if (response.data.loggedIn) {
          setLoggedIn(true);
          setUsername(response.data.username);
        } else {
          setLoggedIn(false);
          setUsername('');
          window.location.href = 'http://localhost:3000/login';
        }
      })
      .catch(error => {
        console.error('Error checking login status:', error.message);
      });
  }, []); // Efek ini hanya berjalan sekali saat komponen dimuat

  const handleLogout = () => {
    // Lakukan permintaan ke server untuk logout
    axios.post('http://localhost:3001/logout', null, { withCredentials: true })
      .then(response => {
        setLoggedIn(false);
        setUsername('');
        window.location.href = 'http://localhost:3000/login';
      })
      .catch(error => {
        console.error('Error during logout:', error.message);
      });
  };

  return (
    <div>
      {loggedIn && (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;