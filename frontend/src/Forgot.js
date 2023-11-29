import React, {useState} from 'react';
import './Forgot.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Forgot() {
    const [usernameFor, setUsernameFor] = useState("");
    const [pinnumberFor, setPinnumberFor] = useState("");

    const Forgot = () =>{
        axios.post('http://localhost:8081/Forgot', {
          username: usernameFor, 
          pinnumber: pinnumberFor,
        }).then((response) => {
          console.log(response);
        });
      };

  return (
    <div className="Forgot-pass">
        <form action=" ">
        <h1>Forgot Password</h1>
            <div className='input'>
                <input type="text" name="username" placeholder="Username" onChange={(e) => {setUsernameFor(e.target.value)}} required/>
            </div>
            <div className="input">
                <input type="password" name="Pin" placeholder="Pin Number" onChange={(e) => {setPinnumberFor(e.target.value)}} required/>
            </div>
            <Link to="/Newpass">
            <button onClick={Forgot} className="btn">Submit</button>
            </Link> 
        </form>
    </div>
  )
}

export default Forgot