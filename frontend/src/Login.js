import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {
  return (
    <div className='egg-image'>
        <div className='user-pass'>
            <form action=" ">
            <h1>Egg Sorting Management</h1>
            <div className='input'>
                <input type="username" placeholder='Enter Username'/>
            </div>
            <div className='input'>
                <input type="Password" placeholder='Enter Password'/>
            </div>
            <div className="Forgot">
            <Link to="./forgot" className='btn1'>Forgot password?</Link> 
            </div>
            <button className='btn'>Log in</button>
            <div className="registration">
            <h2>New User?
            <Link to="./registration" className='btn1'>Sign up</Link></h2> 
            </div>

            </form>

        </div>

    </div>
  )
}

export default Login