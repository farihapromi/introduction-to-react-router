import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user=useLoaderData()
    const {name}=user
  return (
    <div>
        <h2>user details</h2>
        <h1 className='bg-green-600  text-white font-bold'>{name}</h1>
      
    </div>
  )
}

export default UserDetails
