import React, { useState } from 'react'
import { FaUser, FaLock ,} from "react-icons/fa";
import "./Login.css"
import { useNavigate ,Link} from "react-router-dom";


    const Login = () => {
        
       const [username, setusername]=useState('');
       const [password, setpassword]=useState('');
       const [error, setError]=useState('');
       const navigate=useNavigate();
       
       const controlSubmit=async(e)=>{
        e.preventDefault();
        if (!username || !password) {
        setError('Username and password are required');
        return;
       }

       const data = { username, password };
      // mongoose.connect(mongodb://localhost:27017)
            try {
              fetch("http://localhost:3000/users",{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(async response=>{
                if (!response.ok) {
                 throw new Error('Invalid username or password');
                }
                const result = await response.json();
                console.log("Login successful:", result);
                navigate('/home');
              })   
              } catch (error){
                console.error("Unexpected error:", error);
                setError('An unexpected error occurred. Please try again.');
              }
    };       
          
  return (
    
    <div className="login">
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form>
        <h2>Login</h2>
        <div className="input-box">
            <label htmlFor='username'>Username</label>
            <input 
            name="username"
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            type='text' id='username' required/>
            <FaUser className='icon'/>

        </div>
        <br />
        <div className="input-box">
            <label htmlFor='password'>Password</label>
            <input 
            name="password"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            type='password' id='password' required/>
            <FaLock className='icon'/>

        </div>
        <br />
        <div className="rem-for">
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot Password?</a>
        </div>

        <button onSubmit={controlSubmit}
        type='submit'className='btn'>Login</button>

        <div className="register-link">
            <p>Don't have an account? 
            <Link to="/register" className='r'>  Register</Link>
            </p>
            
        </div>
        </form>
    </div>
    

  );
       
}
export default Login;
