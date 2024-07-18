import React from 'react'
import { BsFillBellFill,BsPersonCircle,BsJustify } from 'react-icons/bs'
import '../../assets/css/Dashboard.css'
import icon from '../../assets/icon/icon.png';
function Header() {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify/>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsPersonCircle className='icon'/>
      </div>
     
     <select className='drop'>
      <option value="profile">My Profile</option>
      <option value="logout">Log Out</option>
     </select>

      <img src={icon} alt="" className='logo'/>
    </header>
  )
}

export default Header
