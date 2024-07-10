import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Role from './Role/Role'
import Student_role from './Student_reg/Student_role'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/student_role" element={< Student_role />}/>
          <Route path="/role" element={< Role />}/>
          <Route path="/register" element={< Register />}/>
          <Route path="/" element={< Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

