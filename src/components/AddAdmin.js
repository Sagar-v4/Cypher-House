import React from 'react'
import { Link } from 'react-router-dom'
import Home from './home'
import './home.css';

function AddAdmin() {
  return (
    <div>
      <Home></Home>
      <div className='mainBox'>
          <fieldset>
              <legend>Add Admin</legend>
          <form>
              <input type='email' placeholder='Enter Email' name='adminEmail'/>
              <button className='addAdmin'><Link to="/">Submit</Link></button>
          </form>
          </fieldset>
          

      </div>
    </div>
  )
}

export default AddAdmin
