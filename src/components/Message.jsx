import React from 'react';

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
          <img src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          <span>Just Now</span>
          </div>
        <div className="messageContent">
          <p>Hello!</p>
          {/* <img src="https://images.pexels.com/photos/15052341/pexels-photo-15052341.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""/> */}
        </div>
    </div>
  )
}

export default Message