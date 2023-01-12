import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
     <div className='formWhapper'>
          <span className='logo'>ChatMini</span>
          <span className='title'>Login</span>
          <form>
               <input type="email" placeholder='e-mail'/>
               <input type="password" placeholder='password' />
               <button>Sign In</button>
          </form>
          <p>you don't have Account? Register</p>
     </div>
    </div>
  )
}

export default Login;