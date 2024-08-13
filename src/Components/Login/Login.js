import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../../assets/Dashboard.css';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  useEffect(() => {
      sessionStorage.removeItem("user");
  }, []);

  const controlSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    const data = {
      UserName: username,
      Password: password,
    };
    try {
      const res = await axios.post('http://localhost:5000/login', data);
      if (res.status === 200) {
        const { UserName, FirstName, LastName, role } = res.data.user;
        sessionStorage.setItem("user", JSON.stringify({ UserName, FirstName, LastName, role }));
        navigate("/dashboard");
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };
  
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            type="text"
            id="username"
            required
          />
        </div>
        <div className="input-box">
  <label htmlFor="password">Password</label>
  <div className="password-container1">
    <input
      name="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      type={showPassword ? "text" : "password"}
      id="password"
      required
    />
    <svg 
      onClick={togglePasswordVisibility} 
      viewBox="0 0 576 512" 
      height="1em" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z">
      </path>
      </svg>
    </div>
    </div>
        <div className="rem-for">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="#">Forgot Password?</Link>
        </div>

        <button onClick={controlSubmit} type="submit" className="btn">
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="register-link">
          <p>
            Don't have an account?
            <Link to="/register" className="r">
              {" "}
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
};
export default Login;