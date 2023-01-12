import React from 'react';
import Add from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className='formContainer'>
     <div className='formWhapper'>
          <span className='logo'>ChatMini</span>
          <span className='title'>Register</span>
          <form>
               <input type="text" placeholder='display name' />
               <input type="email" placeholder='e-mail'/>
               <input type="password" placeholder='password' />
               <input style={{display: "none"}} type="file" id="file" />
               <label htmlFor="file">
                  <img src={Add} />
                  <span>Add on Avatar</span>
               </label>
               <button>Sign up</button>
          </form>
          <p>you do have Account? Login</p>
     </div>
    </div>
  )
}

export default Register