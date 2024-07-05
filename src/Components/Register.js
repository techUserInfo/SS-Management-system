import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import { FaUser, FaLock ,} from "react-icons/fa";
import "./Register.css"



const Register = () => {
    const [input,setInput]=useState({
        name:"",
        username :"",
        emailId:"",
        phoneNo:"",
        password:"",
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigate("/login");
    };
    const navigate=useNavigate();

  return (
    <div className='wrapper'>
    <div className='form-box register'>
    <form onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="input-box">
            <label for='name'>Name</label>
            <input 
            name="name"
            value={input.name}
            onChange={(e)=> setInput({
                ...input,
                [e.target.name]:e.target.value}
                )}
            type='text' id='name' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <label for='username'>Username</label>
            <input 
            name="username"
            value={input.username}
            onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
            type='text' id='username' required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <label for='email'>Email Id</label>
            <input
            name="emailId"
            value={input.emailId}
            onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
            type='email' id='email' required/>
            <FaLock className='icon'/>
        </div>
        <div className="input-box">
            <label for='phn'>Phone no</label>
            <input 
            name="phoneNo"
            value={input.phoneNo}
            onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
            type='number' id='phn' required/>
            <FaLock className='icon'/>
        </div>
        <div className="input-box">
            <label for='password'>Password</label>
            <input 
            name="password"
            value={input.password}
            onChange={(e)=> setInput({...input,[e.target.name]:e.target.value})}
            type='password' id='password' required/>
            <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
            <label><input type='checkbox'/>I agree to the terms & conditions</label>
            <a href='#'>Forgot Password?</a>
        </div>

        <button type='submit'>Register</button>

        <div className="register-link">
            <p>Already have an account?
            <Link to="/login">Login here</Link></p>
            
        </div>
    </form>
</div>
</div>


  )
}

export default Register;
