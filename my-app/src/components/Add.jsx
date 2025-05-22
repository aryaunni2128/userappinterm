import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Add = ({user}) => {
  const [count,setCount]=useState(0);
  const [form,setForm]=useState({
    userid:'',
    name:'',
    email:''
  })
  // let incrementCounter=()=>{
  // setCount(count+1)
  // }
  let submitInfo=()=>{
    console.log(form)
  }
  let valueUpdate=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <TextField
          required
          id="outlined-required"
          label="UserId"
          name="userid"
          // value={form.userId}
          onChange={valueUpdate}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          // value={form.userName}
          onChange={valueUpdate}
        />
        <br/>
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          // value={form.email}
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