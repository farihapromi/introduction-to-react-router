import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Home = () => {
  return (
    <div>
        <h3>This is home page</h3>
          <Header/>
        <Outlet>
          
        </Outlet>
      
    </div>
  )
}

export default Home
