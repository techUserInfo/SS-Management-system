import React from 'react'
import "./User.css"
const Home = () => {
  return (
     <>
    <div className="home">
    
    <div className="myForm">
    <h2>User Role</h2>
      <form action="/submit" method='post'>
        <label for="username"Username></label>
        <br />
        <input placeholder='username' type="text" class="username"/>
        <br />
        <label id="userrole">Role</label>
        <br />
        <select id="userrole" required>
          <option value="" disabled selected>Select</option>
          <option value="student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <input class="submitbtn" type="submit" value="Submit"/>
      </form>
    </div>
      
    </div>
    </>
    
  );
}

export default Home;

