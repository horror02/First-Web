import React from 'react'
import './Newpass.css'

function Newpass() {
  return (
    <div className="Newpass">
        <form action=" ">
        <h1>Egg Sorting Management</h1>
             <div className='input'>
                <input type="text" name="username" placeholder="Username" required/>
            </div>
            <div className='input'>
                <input type="password" name="newpass" placeholder="New Password" required/>
            </div>
            <div className='input'>
                <input type="password" name="Re-newpass" placeholder="Re-enter New Password" required/>
            </div>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Newpass