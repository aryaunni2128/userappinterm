import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom'
const Add = ({user}) => {
  const [count,setCount]=useState(0);
  const [form,setForm]=useState({
    userId:'',
    userName:'',
    email:''
  })
  let navigate=useNavigate();
  // let incrementCounter=()=>{
  // setCount(count+1)
  // }
//Code for updation
const location=useLocation()
  function valueUpdate(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }
  function submitInfo() {
    if (location.state!=null) {
      axios.put('http://localhost:4000/userupdation/'+location.state.user._id,form).then((res)=> {
        alert('Data updated');
        
      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.post('http://localhost:4000/newuser',form).then((res)=> {
        navigate('/')
      }).catch((error)=>{
        console.log(error)
      })
    }
    
  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        userId:location.state.user.userId,
        userName:location.state.user.userName,
        email:location.state.user.email,
    
      })
    }
  },[])
  return (
    <div>
      <TextField
          required
          id="outlined-required"
          label="UserId"
          name="userId"
          value={form.userId}
          onChange={valueUpdate}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="userName"
          value={form.userName}
          onChange={valueUpdate}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          value={form.email}
          onChange={valueUpdate}
        />
        <br/>
      <Button variant="contained" onClick={submitInfo}>Submit</Button>
      <br/>
      {count}
    </div>
    
  )
}

export default Add