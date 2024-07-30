import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../../assets/Dashboard.css';

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
          <input
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            id="password"
            required
          />
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