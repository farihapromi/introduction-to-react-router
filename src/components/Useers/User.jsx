import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
    const {id,name,phone,email}=user
  return (
    <div className='bg-blue-400 p-4 m-4  flex flex-col gap-4 rounded-lg'>
        <h2>{name}</h2>
        <p>Email:{email}</p>
        <p>Phone: {phone}</p>
        <button className='bg-black text-white p-4 rounded-lg'><Link to={`/user/${id}`}>Show Details</Link></button>
      
    </div>
  )
}

export default User
