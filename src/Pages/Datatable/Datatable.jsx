import React from 'react'
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { usercolums, userRows } from '../../usersource';
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext';





const Datatable = () => {
  let [users, setUsers] = useState([]);
  let {authTokens, logoutUser} = useContext(AuthContext)

  useEffect(()=>{
    getUsers()
  }, [])

  const getUsers = async() =>{
    const response = await fetch('http://127.0.0.1:8000/api/users',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer' + String(authTokens.access)
      }
    })
    let data = await response.json()
    if(response.status === 200){
      setUsers(data);
    }
    else if(response.statusText === 'Unauthorized'){
      logoutUser()
    }
    console.log("data", data)
  }
  

  return (
    <div className='datatable'>
    <DataGrid
      rows={userRows}
      columns={usercolums}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}

export default Datatable