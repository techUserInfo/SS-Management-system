import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/teacherRole.css'
  
const TeacherRole = () =>  {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    parentName: '',
    phone: '',
    email: '',
    className: '',
    section: '',
    spoc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/teachers", formData);
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
            <form className="Student_form" onSubmit={handleSubmit}>

              <label>First Name</label>
              <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}/>

              <label>Last Name</label> 
              <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}/>

              <label>Parent Name</label>
              <input type="text" name="parentName" required value={formData.parentName} onChange={handleChange}/>

              <label>Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}/>

              <label>Email</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange}/>

              <label>className</label>
              <input type="text" name="className" required value={formData.className} onChange={handleChange}/>

              <label>Section</label>
              <input type="text" name="section" required value={formData.section} onChange={handleChange}/>

              <label>SPOC</label>
              <input type="text" name="spoc" required value={formData.spoc} onChange={handleChange}/>

              <input className="Std_submitbtn" type="submit" value="Submit"/>
            </form>
        </div>
        </div>
	</div>
  );
}
  
export default TeacherRole;
  