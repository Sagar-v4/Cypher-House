import React from 'react'
import './home.css';

function LoginModal({ closeModal }) {
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
            <input type='email' placeholder='E-mail' name='userName'></input>
            <br></br>
            <br></br>
            <input type='password' placeholder='Password' name='password'></input>
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
