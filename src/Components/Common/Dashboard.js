import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import AppHeader from './Header/AppHeader';
import Menu from './Header/Menu';
import Footer from './Header/Footer';
import '../../assets/Dashboard.css';

const Dashboard = () => {
   const [studentCount, setStudentCount]=useState(0);
   const [teacherCount, setTeacherCount]=useState(0);
  const [adminCount, setAdminCount]=useState(0);

  useEffect(()=>{
      axios.get('http://localhost:5000/adminCount')
      .then(response=>{
        setAdminCount(response.data.count);
      })
      .catch (error=> {
        console.error('Error fetching admin count:',error);
    });
  }, []);


  useEffect(()=>{
   axios.get('http://localhost:5000/teacherCount')
   .then(response=>{
    setTeacherCount(response.data.count);
   })
   .catch(error=>{
    console.error('There was an error fetching the teacher data!', error);
   });
  },[]);


  useEffect(() => {
        axios.get('http://localhost:5000/studentCount')
        .then(response=>{
        setStudentCount(response.data.count);
      })
      .catch (error=> {
        console.error('Error fetching student count:', error);
    });
  }, []);

  return (
    <div>
    <AppHeader />
    <Menu/>
     <div className="box-container">
        <input className="Std_btn" 
        type="button" 
        value={`Number of Students registered in the last 90 days: ${studentCount}`}  
        readonly
        />
        <input className="Std_btn"
         type="button" 
         value={`Number of Teachers registered in last 90 days: ${teacherCount}`} 
         readonly
         />
        <input className="Std_btn" 
        type="button" 
        value={`Number of Admins registered in last 90 days: ${adminCount}`} 
        readonly
        />
        <input className="Std_btn" 
        type="button" 
        value="A"
        />   
    </div>
    <Footer />
    </div>
  );
}

export default Dashboard;

