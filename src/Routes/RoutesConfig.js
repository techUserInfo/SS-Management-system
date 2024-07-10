import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import UserRole from '../Components/UserRole'
import Login from '../Components/Login';
import Register from '../Components/Register';
import StudentRole from '../Components/StudentRole';
import StudentTable from '../Components/StudentTable';

const RoutesConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={< Login />}/>
          <Route path="/register" element={< Register />}/>
          <Route path="/userRole" element={< UserRole />}/>
          <Route exact path="/" element={< Login />}/>
          <Route path ="/studentRole" element={<StudentRole/>}/>
          <Route path ="/studentTable" element={<StudentTable/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesConfig;
