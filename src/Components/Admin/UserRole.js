import React, { useState } from "react";
import axios from 'axios';
import "../../assets/css/UserRole.css";

const Role = () => {

  const [formData, setFormData] = useState({ 
    UserName: '', 
    role: '' 
  });

  const [doesExist, setDoesExist] = useState(false);
  
  const handleChange = async(e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value}); 

      try {
        const response = await axios.post('http://localhost:5000/check-username', { UserName: value });
        if (response.status === 200) {
          setDoesExist(response.data.exists);
        } else {
          setDoesExist(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setDoesExist(false);
    }
  };
  
// create role
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/assignrole', formData);
      if (response.status === 200) {
        console.log('Submitted successfully:', response.data);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

//update role
const handleUpdate = async (e) => {
  e.preventDefault();

    try {
      const response = await axios.patch('http://localhost:5000/updaterole', formData);
      if (response.status === 200) {
        console.log('Updated successfully:', response.data);
      } else {
        console.error('Update failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="userid">
      <h2>User Role</h2>
      <div className="roleForm">
        <form method="post">
          <label htmlFor="username">User Name</label>
          <input
            placeholder="username"
            type="text"
            name="UserName"
            className="username"
            value={formData.UserName}
            onChange={handleChange}
            required
          />
          <label htmlFor="userrole">Role</label>
          <select name = "role" id="userrole" value={formData.role} onChange={handleChange} required>
            <option value="" disabled>
              Select
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Staff</option>
            <option value="admin">Admin</option>
          </select>
          <div className="btncontainer">
          {!doesExist ? (<input className="submitbtn_role" type="submit" value="Submit" onClick={handleSubmit}/>):
          (<input className="updatebtn_role" type="button" value="Update" onClick={handleUpdate}/>)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Role;
