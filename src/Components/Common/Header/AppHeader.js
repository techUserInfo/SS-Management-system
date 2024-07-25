import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import '../../../assets/AppHeader.css';
import MyImage from './notification.svg';

const AppHeader = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/notifications')
        .then((result)=>setData(result.data))
        .catch((error)=> console.log(error));
    },[]);
  return (
    <div>
       <nav className="header_bg">
    <div className="container">
        <h4>Student Admin Dashboard</h4>
      <select className='drop'>
      <option value="profile">My Profile</option>
      <option value="logout">LogOut</option>
     </select>
     <div className="logo">
        <img src= {MyImage} alt='Notification Icon'/>
        <span className="badge">{data.length}</span>
      </div>
    </div>
    </nav>
    </div>
  );
}

export default AppHeader;