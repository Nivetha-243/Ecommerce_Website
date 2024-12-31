
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image2 from './images/registrationimage.jpg';
import './register.css';
import { useState } from 'react';
import {FaShoppingBag} from 'react-icons/fa';
import axios from 'axios';


const Register = ()=>{

let navigate=useNavigate();

const[user_name,setuname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");
const[uconpassword,setconpassword]=useState("");
 

const handleSubmit=(e)=>{
  e.preventDefault();
  const regobj={user_name,email,password};
  alert("Completed")
  if (password===uconpassword){
    axios.post('http://127.0.0.1:8000/api/users/',regobj,{headers: {
      'Content-Type': 'application/json'}})
      .then(response => {
        alert('Data uploaded successfully:', response.data);
        navigate("/");})
        .catch(error => {
          console.error('Error uploading data:', error.message);
        });
        
  }
}
    return (
        <div className='box'>
          <div className='box1'>
            <div className='shopping'>
              <p><FaShoppingBag /><b>shop</b>cart</p>
            </div>
            <div>
              <h4>Create a Account</h4>
            </div>
          </div>
          <div className='commonbox'>
          <div className='box2'>
            <form className='regform'onSubmit={handleSubmit}>
              <div>
                <input type="text" value={user_name} onChange={(e)=>setuname(e.target.value)} placeholder='Username' name="username" className='username'></input>
              </div>
              <div>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='E-mail' name="email" className='mail'></input>
              </div>
              <div>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' name="password" className='assword'></input>
              </div>
              <div>
                <input type="password" value={uconpassword} onChange={(e)=>setconpassword(e.target.value)} placeholder='Confirm Password' name="confirmpassword" className='confirmpassword'></input>
              </div>
              <div>
                <button className='signup'>Sign-up</button>
              </div>
              <div className='a'>
                Yes I have an account? <Link to ="/" id="a">Login</Link>  
              </div>
            </form>
          </div>
          <div className='box3'>
            <img src={image2} alt='registerimage' className='registerimage'></img>

          </div>
          </div>
        </div>
    )
}

export default Register;
