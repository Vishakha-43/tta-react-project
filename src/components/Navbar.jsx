import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <Logo/>
            <div className='nav-link'>
                <ul>
                    <li>
                      <NavLink className=' link' to ="/About" >About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
