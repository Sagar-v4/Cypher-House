import React from 'react'
import Home from './home'
import { Link, Route, Router, Routes } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
        <Home></Home>
      <div className='profile-page-container'>
          <form method="">
              <div className='row'>
                  <div className='col-md-4'>
                    <img src = "" alt='profile-pic-here'/>
                  </div>
                   
                    <div className='col-md-6'>
                     <div className="profile-head">
                        <h5>Email</h5>
                        <input type="email"/>

                        <h5>First Name</h5>
                        <input type="text"/>

                        <h5>Last Name</h5>
                        <input type="text"/>

                        <h5>Gender</h5>
                        <input type="text"/>

                        <h5>DOB</h5>
                        <input type="text"/>
                     </div>
                  </div>
                  <div className="col-md-2">
                   <button>< Link to = "/editprofile" className="EditProfile"> Edit Profile </Link></button>
                  </div>
              </div>
          </form>
      </div>
    </div>
  )
}

export default ProfilePage
