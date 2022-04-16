import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from './home'
import './home.css';

const AddAdmin=()=> {
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectData = async ()=>{
    console.warn(email);
    var result = await fetch('http://localhost:5000/admin/register',{
      method:'post',
      body:JSON.stringify({email}),
      headers : {
        'Content-Type':'application/json'
      },
    })
    result = await result.json()
    console.warn(result);

    if(result){
      alert('New admin added successful!');
      navigate('/AddAdmin');
    }
    else{
      alert('Failed to add new admin!');
    }
  }

  return (
    <div>
      <Home></Home>
      <div className='mainBox'>
          <fieldset>
              <legend>Add Admin</legend>
          <form>
              <input type='email' placeholder='Enter Email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
              <button className='addAdmin' onClick={collectData}>Submit</button>
              {/* <button className='addAdmin' onClick={collectData}><Link to="/admin">Submit</Link></button> */}
          </form>
          </fieldset>
          

      </div>
    </div>
  )
}

export default AddAdmin
