import React from 'react'
import viteLogo from '/vite.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='logo'>
            <NavLink className='navbar-link' to ="/">
              <img src={viteLogo} alt =" mountains" className='image-logo'/>
              <h1 className='title'>Mountains</h1>
              </NavLink>
            </div>
            <div className='nav-link'>
                <ul>
                    <li>
                      <NavLink className=' link' to ="/home" >Home</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
