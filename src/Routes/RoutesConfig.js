import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';
import UserRole from '../Components/Admin/UserRole';
import Teacher from '../Components/Teacher/Teacher';
import StudentRole from '../Components/Student/StudentRole';
import StudentTable from '../Components/Student/StudentTable';
import Dashboard from '../Components/Common/Dashboard';
import PrivateRoute from '../Routes/PrivateRoute';

const RoutesConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Login />}/>
          <Route path="/login" element={< Login />}/>
          <Route path="/register" element={< Register />}/>
          <Route path="/userRole"
          element={ <PrivateRoute><UserRole /></PrivateRoute>}/>
          <Route path="/teacher"
          element={<PrivateRoute><Teacher/></PrivateRoute>}/>
          <Route path ="/studentRole"
          element={ <PrivateRoute><StudentRole /></PrivateRoute>}/>
          <Route path ="/studentTable"
          element={ <PrivateRoute><StudentTable /></PrivateRoute>}/>
          <Route path="/dashboard"
          element={ <PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesConfig;
