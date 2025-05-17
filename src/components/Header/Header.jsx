import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h2>Navbar</h2>
        <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
      
    </div>
  )
}

export default Header
