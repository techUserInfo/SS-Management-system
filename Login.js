import React, { useState, useEffect } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css"
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    
   const [userId, setUserId] = useState('');
   const [password, setPassword] = useState('');
   const win = window.sessionStorage;

    useEffect(() => {
         win.setItem("userId", userId);
    }, [userId]);

    useEffect(() => {
        win.setItem("password", password);
    }, [password]);

    const handleuserId = (e) => {
        setUserId(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const navigate = useNavigate();

    const handleApi = (e) => {
        e.preventDefault();

        const encodeduserId = btoa(userId);
        const encodedPassword = btoa(password);

        console.log({ encodeduserId, encodedPassword });

        axios.get("http://localhost:7778/checkuser", {  
            userId: userId,
            password: password
        })
        .then(result => {
            console.log(result);
            if (result.status === 200) {
                navigate("/");
            }
        })
        .catch(error => {
            console.log(error);
            
        });
    }

    return (
        <div className="wrapper">
            <form>
                <div className="form-box login">
                    <h2>Login</h2>
                    <div className="input-box">
                        <label htmlFor='userId'>UserId</label>
                        <input 
                            name="userId"
                            value={userId}
                            onChange={handleuserId}
                            type='text' 
                            id='userId' 
                            required 
                        />
                        <FaUser className='icon'/>
                    </div>
                    <br />
                    <div className="input-box">
                        <label htmlFor='password'>Password</label>
                        <input 
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            type='password' 
                            id='password' 
                            required 
                        />
                        <FaLock className='icon'/>
                    </div>
                    <br />
                    <div className="remember-forgot">
                        <label><input type='checkbox'/>Remember me</label>
                        <a href='#'>Forgot Password?</a>
                    </div>

                    <button onClick={handleApi} type='submit'>Login</button>

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
