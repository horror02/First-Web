import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Validate from './LoginValidate';




function Login() {
    const [values, setValues] = useState({
      username: '',
      password: ''
    })
    //const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validate(values);
        setErrors(err);
        if(err.username === "" && err.password === ""){
          axios.post('http://localhost:8081/login', values)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    }
  return (
        <div className='user-pass'>
            <h1>Egg Sorting Management</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className='input'>
                <input className='Username' type="Username" placeholder='Enter Username' name='username' onChange={handleInput} required/>
              {errors.username && <span className = 'text-danger'> {errors.username} </span>}
            </div>
            <div className='input'>
                <input className='Password' type="Password" placeholder='Enter Password' name='password' onChange={handleInput} required/>
              {errors.password && <span className = 'text-danger'> {errors.password} </span>}
            </div>
            <div className="Forgot">
            <Link to="./forgot" className='btn1'>Forgot password?</Link> 
            </div>
            <button type='submit' className='btn'>Log in</button>
            <div className="registration">
            <h2>New User?
            <Link to="./registration" className='btn1'>Sign up</Link></h2> 
            </div>
            <div className="newpass">
              <Link to="./Newpass" className='btn1'>Change Password</Link>
            </div>

            </form>

        </div>

  )
}

export default Login