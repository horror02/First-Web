import React, { useState } from 'react'
import './App2.css'
import Validate from './RegistrationValidate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Registration() {
    
    const [values, setValues] = useState({
      username: '',
      password: '',
      pinnumber: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = (event) =>{
      event.preventDefault();
      setErrors(Validate(values));
      if(errors.username === "" && errors.password === "" && errors.pinnumber === ""){
          axios.post('http://localhost:8081/Registration', values)
          .then(res => {
            navigate('/');
          })
          .catch(err => console.log(err));
      }
    };
  
  return (
    <div className="Registration">
         <form action="" onSubmit={handleSubmit}>
             <h1>Registration</h1>
             <div className='input'>
                 <input type="text"  name="username" placeholder="Username" onChange={handleInput} required />
                 {errors.username && <span className = 'text-danger'> {errors.username} </span>}
             </div>
             <div className="input">
                 <input type="password" name="password" placeholder="Password" onChange={handleInput}  required />
                 {errors.password && <span className = 'text-danger'> {errors.password} </span>}
             </div>
            <div className="input">
                <input type="password" name="pinnumber" placeholder="Pin Number" onChange={handleInput}  required />
                {errors.pinnumber && <span className = 'text-danger'> {errors.pinnumber} </span>}
            </div>
             <button type='submit' className="btn">SIGN UP</button>

         </form>
             
     </div>
  )
  }

export default Registration