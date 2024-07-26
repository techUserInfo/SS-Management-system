import React from 'react';
import '../../assets/Dashboard.css';
import AppHeader from '../Common/Header/AppHeader';
import Menu from '../Common/Header/Menu';
import Footer from '../Common/Header/Footer';

  const UserRole = () =>  {
	return (
    <>
  <AppHeader />
  <Menu/>
    <div className="userid">
      <h3>User Role</h3>
      <div className="roleForm">
        <form action="/submit" method="post">
          <label htmlFor="username">User Name</label>
          <input placeholder="username" type="text" className="username" required />
          <label htmlFor="userrole">Role</label>
          <select id="userrole" required defaultValue="">
            <option value="" disabled>Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
          <input className="submitbtn_role" type="submit" value="Submit" />
        </form>
      </div>
    </div>
    <Footer/>
    </>
    );
}
 
export default UserRole;
