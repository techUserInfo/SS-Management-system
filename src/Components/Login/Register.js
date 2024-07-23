import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock ,} from "react-icons/fa";
import '../../assets/Register.css';



const Register = () => {
const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const controlSubmit = async (e) => {
    e.preventDefault();
    if (!name || !username || !emailId || !phoneNo || !password) {
      setError('All fields are required');
      return;
    }

    const data ={name, username, emailId, phoneNo, password};
    try {
        const response = await fetch("http://localhost:5000/users", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        console.log("Registration successful:", result);
        navigate('/login');
      } catch (error) {
        console.error("Error during registration:", error);
        setError('Registration failed');
      }
    };

  return (

    <div className='register'>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={controlSubmit}>
        <h2>Registration</h2>
        <div className="label-box">
            <label for='name'>Name</label>
            <input name="name" value={name} 
            onChange={(e)=> setName(e.target.value)}
             type='text' id='name' required/>
            <FaUser className='icon'/>
        </div>
        <div className="label-box">
            <label for='username'>Username</label>
            <input 
            name="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            type='text' id='username' required/>
            <FaUser className='icon'/>
        </div>
        <div className="label-box">
            <label for='email'>Email Id</label>
            <input
            name="emailId"
            value={emailId}
            onChange={(e)=> setEmailId(e.target.value)}
            type='email' id='email' required/>
            <FaLock className='icon'/>
        </div>
        <div className="label-box">
            <label1 for='phn'>Phone no</label1>
            <input 
            name="phoneNo"
            value={phoneNo}
            onChange={(e)=> setPhoneNo(e.target.value)}
            type='number' id='phn' required/>
            <FaLock className='icon'/>
        </div>
        <div className="label-box">
            <label for='password'>Password</label>
            <input 
            name="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type='password' id='password' required/>
            <FaLock className='icon'/>
        </div>
        <div className="term">
            <label><input type='checkbox' required/>I agree to the terms & conditions</label>
            
        </div>

        <button to ={"/login"}
        type='submit' className='btn btn-success'>Register</button>

        <div className="login-link">
            <p>Already have an account?
            <Link to="/" className='r'>  Login</Link></p>
            
        </div>
    </form>
</div>


  );
};

export default Register;
