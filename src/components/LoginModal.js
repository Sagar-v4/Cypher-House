import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { Link, Route, Router, Routes } from "react-router-dom";

function LoginModal({ closeModal }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(email);
    var result = await fetch('http://localhost:5000/admin/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    result = await result.json()
    console.warn(result);

    if (result) {
      alert("Login Successful");
      navigate('/');
    }
    else{
      alert('Invalid username or password!');
    }
  }

  // localStorage.setItem('token',"val")


  return (
    <div className='ModalBg'>
      <div className='ModalContainer'>
        <div className='CloseBtn'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>

        <div className='title'>
          <h1>Login</h1>
        </div>
        <div className='body'>
          <form>
            <input type='email' placeholder='Enter Username' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <br></br>
            <input type='password' placeholder='Enter Password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            < Link to="/forgotPassword" className="ForgotPassword"> Forgot Password? </Link>
          </form>
        </div>
        <div className='footer'>
          <button onClick={collectData} className='loginBtn'><span>LogIn</span></button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
