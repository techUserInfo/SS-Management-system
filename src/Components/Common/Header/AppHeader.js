import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assets/css/AppHeader.css';
import MyImage from './notification.svg';
import ProfileIcon from './profile.svg';
import LoginIcon from './Login.svg';

const AppHeader = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/notifications')
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));

    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    window.location.href = '/login'; 
  };

  return (
    <div>
      <nav className="header_bg">
        <div className="container">
          <div className="header-left">
            <h3>Student Admin Dashboard</h3> 
          </div>
          <div className="header-middle">
            <h1>WELCOME</h1>
          </div>
          <div className="notification">
            <img src={MyImage} alt="Notifications" className="notification-icon" />
            <span className="badge">{data.length}</span>
          </div>
          <div className="header-right">
            <div className="dropdown">
              <button className="dropbtn">
                <img src={ProfileIcon} alt="My Profile" className="profile-icon" />
                {username || 'Sujoyita Chakraborty'}
              </button>
              <div className="dropdown-content">
                <Link to="/profile">
                  <img src={LoginIcon} alt="My Profile" className="profile-icon" /> My Profile
                </Link>
                <button onClick={handleLogout} className="dropdown-logout-btn">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;
