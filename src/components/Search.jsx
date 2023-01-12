import React from 'react'

const Search = () => {
  return (
    <div className='search'>
     <div className="searchForm">
          <input type="text" placeholder='Find a user' />
     </div>
     <div className="userChat">
          <img src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <div className="userChatInfo">
               <span>Dammian</span>
          </div>
     </div>
    </div>
  )
}

export default Search