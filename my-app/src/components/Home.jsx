import React, { useEffect,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'


const Home = () => {
  const[users,setUsers]=useState([]);
      // const users=[

    //     {
    //         userid:"E01",
    //         name:"Arya",
    //         email:"arya123@gmail.com"
    //     },
    //     {
    //             userid:"E02",
    //             name:"Asha",
    //             email:"asha321@gmail.com"
    //     },
    //     {
    //             userid:"E03",
    //             name:"Akhil",
    //             email:"akhil154@gmail.com"
    //     }
    // ]
    useEffect(()=>{
        axios.get('http://localhost:4000/users').then((res)=>{
          setUsers(res.data);
        })
    },[])
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>UserId</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Email</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((row) => (
          <TableRow
            key={row.userId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.userId}
            </TableCell>
            <TableCell align="right">{row.userName}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Home