import React from 'react'
import './App2.css'

function Registration() {
  return (
    <div className="egg-image">
    <div className="Registration">
         <form action="">
             <h1>Egg Sorting Management</h1>
             <div className='input'>
                 <input type="text" name="username" placeholder="Username" required/>
             </div>
             <div className="input">
                 <input type="password" name="password" placeholder="Password" required/>
             </div>
             <div className="input">
                <input type="password" name="confirm_password" placeholder="Confirm Password" required/>
            </div>
             <div className="input">
                <input type="text" name="firstName" placeholder="First Name" required/>
             </div>
             <div className="input">
                <input type="text" name="lastName" placeholder="Last Name" required/>
             </div>
             <div className="input">
                <input type="text" name="phoneNumber" placeholder="Phone Number" required/>
             </div>
             <div className="input">
                <input type="text" name="email" placeholder="Email" required/>
             </div>
             <button type="submit" className="btn">SIGN UP</button>

         </form>
             
     </div>
 </div>
  )
}

export default Registration