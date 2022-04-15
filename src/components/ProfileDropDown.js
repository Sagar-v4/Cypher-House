import React from 'react'
import { Link } from 'react-router-dom'

function ProfileDropDown() {
  return (
    <div>
      <div className='profileDropDown'>
          <ul>
              <li>
                  <Link to = "/profilepage" >Name Of Admin </Link>
              </li>
              <li>
                  <Link to="/addAdmin">Add New Admin</Link>
              </li>
              <li>
                  <Link to="/changePassword">Change Password</Link>
              </li>
              <li>
                  <Link to="/logout">Logout</Link>
              </li>
          </ul>
      </div>
    </div>
  )
}

export default ProfileDropDown
