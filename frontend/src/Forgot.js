import React from 'react';
import './Forgot.css';
import { Link } from 'react-router-dom';

function Forgot() {
  return (
    <div className="Forgot-pass">
        <form action=" ">
        <h1>Egg Sorting Management</h1>
            <div className='input'>
                <input type="text" name="username" placeholder="Username" required/>
            </div>
            <div className="input">
                <input type="text" name="phoneNumber" placeholder="Phone Number" required/>
            </div>
            <div className="input">
                <input type="text" name="OTP" placeholder="OTP" required/>
            </div>
            <Link to="/Newpass">
            <button className="btn">Submit</button>
            </Link> 
        </form>
    </div>
  )
}

export default Forgot