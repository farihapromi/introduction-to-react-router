import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from './User'

const Users = () => {
    const users=useLoaderData()
  return (
   <div className='mb-20'>
        <h2>User size:{users.length}</h2>
         <div className='grid md:grid-cols-3 gap-2'>
        {
            users.map(user=><User user={user}/>)
        }
      
    </div>
    </div>
  )
}

export default Users
