import React, { useState } from 'react'
import { FaUser, FaLock ,} from "react-icons/fa";
import "./Login.css"
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";

    const Login = () => {
        
       const [username, setUsername]=useState('')
       const [password, setPassword]=useState('')
       const navigate=useNavigate();
        const handleUsername = (e)=>{
         setUsername(e.target.value)
        };
        
        const handlePassword=(e)=>{
            setPassword(e.target.value)
        };
        const controlApi=(e)=>{
            e.preventDefault();
            console.log({username,password})
            axios.post('https://reqres.in/api/login',
                {
            username:username,
            password:password
            })
            .then(result=>{
            console.log(result);
            alert("Success");
            navigate("/");
        })
        .catch(error=>{
            console.log(error);
            alert("Service Error");
        }) ;
        };
        // if(username === username && 
        //     password === password){
        //         navigate("/");
        //     }
        //     else{
        //        alert("wrong username or password")
        //    }
  return (
    <div className="wrapper">
    <form>
    <div className="form-box login">
        <h2>Login</h2>
        <div className="input-box">
            <label htmlFor='username'>Username</label>
            <input 
            name="username"
            value={username}
            onChange={handleUsername}
            type='text' id='username' required/>
            <FaUser className='icon'/>

        </div>
        <br />
        <div className="input-box">
            <label htmlFor='password'>Password</label>
            <input 
            name="password"
            value={password}
            onChange={handlePassword}
            type='password' id='password' required/>
            <FaLock className='icon'/>

        </div>
        <br />
        <div className="remember-forgot">
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot Password?</a>
        </div>

        <button onClick={controlApi}
        type='submit'>Login</button>

        <div className="register-link">
            <p>Don't have an account?
            <Link to="/register">Register</Link>
            </p>
            
        </div>
    </div>
    </form>
</div>

  );
}

export default Login;
