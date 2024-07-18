import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/menu.css'


export default function menu() {
  return (
    <div>

        <div class="sidebar">
        <Link to="/UserRole"> Role </Link>
        <Link to="/StudentRole"> RegistrationFrom </Link>
        <Link to="/StudentTable"> AllStudent </Link>
        <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

