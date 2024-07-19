import React from 'react';
import Header from './Header';
import Menu from './menu/Menu';
import Appfooter from './Appfooter';
import '../../assets/css/Dashboard.css'

function Dashboard() {
  return (
    <div>
      <Header />
      <Menu />
      <div className="box-container">
        <input className="Std_btn" type="button" value="A" />
        <input className="Std_btn" type="button" value="B" />
        <input className="Std_btn" type="button" value="C" />
        <input className="Std_btn" type="button" value="D" />
      </div>
      <Appfooter />
    </div>
  ); 
}

export default Dashboard;