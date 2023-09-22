import React from 'react'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        <div className='logo'>
            <NavLink className='navbar-link' to ="/">
              <img src={viteLogo} alt =" mountains" className='image-logo'/>
              <h1 className='title'>Mountains</h1>
              </NavLink>
            </div>
    </>
  )
}

export default Logo
