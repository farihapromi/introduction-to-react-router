import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div >
        <h2>Navbar</h2>
        <nav className='flex gap-4 ' >
             <Link className='bg-blue-400 p-4 rounded-lg' to='/'>Home</Link>
            <Link className='bg-blue-400 p-4 rounded-lg' to='/about'>About</Link>
                <Link className='bg-blue-400 p-4 rounded-lg' to='/contact'>Contact</Link>
      
 

        </nav>
          </div>
  )
}

export default Header
