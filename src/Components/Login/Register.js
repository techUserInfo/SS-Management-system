import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../../assets/Dashboard.css';

const countryCodes = [
  { name: 'Austria', code: '+43', shortName: 'AT'},
  { name: 'Belgium', code: '+32' , shortName:'BE'},
  { name: 'Croatia', code: '+385', shortName:'HR'},
  { name: 'Denmark', code: '+45', shortName:'DK'},
  { name: 'Estonia', code: '+372',shortName:'EE'},
  { name: 'Finland', code: '+358', shortName:'FI'},
  { name: 'India', code:'+91', shortName:'IND'},
  { name: 'United States', code: '+01', shortName:'US'},
  { name: 'United Kingdom', code: '+44', shortName:'GB'},
  { name: 'Canada', code: '+11', shortName:'CA'},
];

const Register = () => {
  const [UserName, setUserName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [phoneNumberExists, setPhoneNumberExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkUsername = async () => {
    try {
      const response = await axios.post("http://localhost:5000/check-username", { UserName });
      setUsernameExists(response.data.exists);
      if (response.data.exists) {
        setError("Username already exists");
      } else {
        setError("");
      }
    } catch (error) {
      console.error("Error checking username:", error);
      setError("Error checking username");
    }
  };

  const checkEmail = async () => {
    try {
      const response = await axios.post("http://localhost:5000/check-email", { Email });
      setEmailExists(response.data.exists);
      if (response.data.exists) {
        setError("Email already exists");
      } else {
        setError("");
      }
    } catch (error) {
      console.error("Error checking email:", error);
      setError("Error checking email");
    }
  };

  const checkPhoneNumber = async () => {
    try {
      const response = await axios.post("http://localhost:5000/check-phone", { PhoneNumber });
      setPhoneNumberExists(response.data.exists);
      if (response.data.exists) {
        setError("Phone number already exists");
      } else {
        setError("");
      }
    } catch (error) {
      console.error("Error checking phone number:", error);
      setError("Error checking phone number");
    }
  };

  const controlSubmit = async (e) => {
    e.preventDefault();
    if (usernameExists || emailExists || phoneNumberExists) {
      setError("Please fix the errors before submitting");
      return;
    }
    if (!UserName || !FirstName || !LastName || !Password || !Email || !PhoneNumber || !Address) {
      setError("All fields are required");
      return;
    }

    const data = { UserName, FirstName, LastName, Password, Email, PhoneNumber, Address };
    try {
      const response = await axios.post("http://localhost:5000/signup", data);
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed");
    }
  };

  return (
    <div className="register">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={controlSubmit}>
        <h2>Registration</h2>
        <div className="label-box">
          <label htmlFor="FirstName">First Name</label>
          <input
            name="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="FirstName"
            required
          />
        </div>
        <div className="label-box">
          <label htmlFor="LastName">Last Name</label>
          <input
            name="LastName"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="LastName"
            required
          />
        </div>
        <div className="label-box">
          <label htmlFor="UserName">Username</label>
          <input
            name="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={checkUsername} // Check username on blur
            type="text"
            id="UserName"
            required
          />
        </div>
        <div className="label-box">
          <label htmlFor="Email">Email</label>
          <input
            name="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={checkEmail} // Check email on blur
            type="email"
            id="Email"
            required
          />
        </div>
        <div className="label-box">
          <label htmlFor="PhoneNumber">Phone Number</label>
          <div className="phone-container">
            <select
              className="country-code-select"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
            >
              {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>
                {country.shortName} ({country.code}) - {country.name}
                </option>
              ))}
            </select>
            <input
              name="PhoneNumber"
              value={PhoneNumber}
              onChange={(e) => {
                const phoneValue = e.target.value;
                const phoneNumber = phoneValue.replace(/\D/g, '').slice(0, 10);
                setPhoneNumber(phoneNumber);
              }}
              onBlur={checkPhoneNumber}
              type="text"
              id="PhoneNumber"
              maxLength="10"
              required
            />
          </div>
        </div>
        <div className="label-box">
          <label htmlFor="Address">Address</label>
          <input
            name="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="Address"
            required
          />
        </div>
        <div className="label-box">
          <label htmlFor="Password">Password</label>
          <div className="password-container2">
            <input
              name="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              id="Password"
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
        <div className="term">
          <label>
            <input type="checkbox" required />I agree to the terms & conditions
          </label>
        </div>
        <button type="submit" className="btn btn-success" disabled={usernameExists || emailExists || phoneNumberExists}>
          Register
        </button>
        <div className="login-link">
          <p>
            Already have an account?
            <Link to="/" className="r">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
