import React, {useState} from 'react'
import './Newpass.css'
import axios from 'axios';

function Newpass() {
  const [usernameNew, setUsernameNew] = useState("");
    const [passwordNew, setPasswordNew] = useState("");

    const Newpass = () =>{
        axios.post('http://localhost:8081/Newpass', {
          username: usernameNew, 
          password: passwordNew,
        }).then((response) => {
          console.log(response);
        });
      };
  return (
    <div className="Newpass">
        <form action=" ">
        <h1>Change Password</h1>
             <div className='input'>
                <input type="text" name="username" placeholder="Username" onChange={(e) => {setUsernameNew(e.target.value)}} required/>
            </div>
            <div className='input'>
                <input type="password" name="newpass" placeholder="New Password" onChange={(e) => {setPasswordNew(e.target.value)}} required/>
            </div>
            <div className='input'>
                <input type="password" name="Re-newpass" placeholder="Re-enter New Password" onChange={(e) => {setPasswordNew(e.target.value)}} required/>
            </div>
            <button onClick={Newpass} className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Newpass