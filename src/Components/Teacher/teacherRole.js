import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/teacherRole.css'
  
const TeacherRole = () =>  {
  const [formData, setFormData] = useState({
    UserName: '',
    role: 'teacher',
    PhoneNumber: '',
    Email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:5000/assignrole", formData);
      if (response.status === 200) {
        console.log('submitted successfully');
      } else {
        console.error('submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
	return (
	  <div>
        <div className="container1">
        <h1 className="heading">Teacher Profile Form</h1>
        <div className="container2">
            <form className="Student_form" action="/submit" method="post" >

              <label>User Name</label>
              <input type="text" name="UserName" required value={formData.UserName} onChange={handleChange}/>

              <label>Role</label>
              <select type="text" className='role' name="role" required defaultValue={formData.role} onChange={handleChange}>
              <option className='teacher' defaultValue="teacher">Teacher</option>
              </select>

              <label>Phone No.</label>
              <input type="tel" name="PhoneNumber" required value={formData.phone} onChange={handleChange}/>

              <label>Email</label>
              <input type="email" name="Email" required value={formData.Email} onChange={handleChange}/>

              <input className="Std_submitbtn" type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
        </div>
	</div>
  );
}
  
export default TeacherRole;
  