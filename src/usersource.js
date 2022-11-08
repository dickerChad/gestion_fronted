
export const usercolums = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "user",
      headerName: "User",
      width:230,
     renderCell: (params) =>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src= {params.row.img} alt="img"/>
                {params.row.username}
            </div>
        )
     }
  },
  {
    field: "email",
    headerName: "Email",
    width:230,

  },
  {
    field: "status",
    headerName: "Status",
    width:230,
    
  }
]


export const userRows = [
    { id: 1,
      username: 'Snow',
      img: './Images/avatar.jpg', 
      status: "active",
      email: 'souley4344@gmail.com' 
    },
    { id: 2, username: 'Lannister', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 3, username: 'Lannister', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 4, username: 'Stark', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 5, username: 'Targaryen', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 6, username: 'Melisandre', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 7, username: 'Clifford', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 8, username: 'Frances', img: 'https://www.flaticon.com/free-icon/user_149071',status: "passive", email: 'souley4344@gmail.com' },
    { id: 9, username: 'Roxie', img: 'https://www.flaticon.com/free-icon/user_149071', status: "passive",email: 'souley4344@gmail.com' },
];