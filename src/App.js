import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={< Login />}/>
          <Route path="/register" element={< Register />}/>
          <Route path="/" exact element={< Home />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

