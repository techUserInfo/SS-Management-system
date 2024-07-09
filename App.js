import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=> {
    axios.post('http://localhost:3000/users')
    .then(result => setData(result.data))
    .catch(error => console.log(error));
  }, [])

  return (
  <div className='App'>
    <h2>Student Table</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone No</th>
          <th>Class</th>
          <th>Section</th>
          <th>Email</th>
          <th>Spoc</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((user, index) => {
            return <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone_no}</td>
              <td>{user.class}</td>
              <td>{user.section}</td>
              <td>{user.email}</td>
              <td>{user.spoc}</td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
    
  );
}

export default App;
