import React from 'react'

export const Card = ({ user,user1 }) => {
  return (
    <div className='card'>
      <h4>{user.username}</h4>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  )
}
export default Card