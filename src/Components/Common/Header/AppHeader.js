import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../assets/Dashboard.css';
import MyImage from './notification.svg';
import ProfileIcon from './Profile.svg';
import LoginIcon from './Login.svg';

const AppHeader = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const timer = useRef(null);

  const ControlLogout = useCallback(() => {
    sessionStorage.removeItem('username');
    window.location.href = '/login';
  }, []);

  const setLogoutTimer = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      ControlLogout();
    }, 180000); 
  }, [ControlLogout]);

  const resetTimer = useCallback(() => {
    setLogoutTimer();
  }, [setLogoutTimer]);

  useEffect(() => {
    axios.get('http://localhost:5000/notifications')
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));

    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setLogoutTimer();
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);

    return () => {
      clearTimeout(timer.current);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
    };
  }, [resetTimer, setLogoutTimer]);

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
                {username || 'My Profile'}
              </button>
              <div className="dropdown-content">
                <Link to="/profile">
                  <img src={LoginIcon} alt="My Profile" className="profile-icon" /> My Profile
                </Link>
                <button onClick={ControlLogout} className="dropdown-logout-btn">
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
