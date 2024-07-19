import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

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
       <h2>Dashboard</h2>
       <p>Number of students registered in the last 90 days: {studentCount}</p>
       <p>Number of teachers registered in last 90 days:{teacherCount}</p>
       <p>Number of admins registered in last 90 days:{adminCount}</p> 
    </div>
  )
};

export default Dashboard;

