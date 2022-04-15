import React from 'react'
import './home.css';
import { Link, Route, Router, Routes } from "react-router-dom";

function LoginModal({closeModal}) {
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
                <input type='text' placeholder='Enter Username' name='userName'></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='Enter Password' name='password'></input>

                < Link to = "/forgotPassword" className="ForgotPassword"> Forgot Password? </Link>
            </form>
        </div>
        <div className='footer'>
            <button className='loginBtn'><span>LogIn</span></button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
