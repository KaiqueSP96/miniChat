import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
     <span className="logo">
          MiniChat
     </span>
     <div className="user">
          <img src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <span>Kaique</span>
          <button>Logout</button>
     </div>
    </div>
  )
}

export default NavBar