import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRole from "../Components/Admin/UserRole";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import StudentRole from "../Components/Student/StudentRole";
import StudentTable from "../Components/Student/StudentTable";
import Header from "../Components/Common/Header";
import Dashboard from "../Components/Common/Dashboard";

const RoutesConfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userRole" element={<UserRole />} />
          <Route path="/studentRole" element={<StudentRole />} />
          <Route path="/studentTable" element={<StudentTable />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutesConfig;
