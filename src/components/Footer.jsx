import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
   <>
    <div className='footer-container'>
            <Logo/>
        
        <div className='footer-links'>
          <ul>
          <li>
              <NavLink className=' footer-link' to ="/" >Home</NavLink>
          </li>
          <li>
              <NavLink className=' footer-link' to ="/About" >About</NavLink>
          </li>
          </ul>
        </div>
        <h5 className='reserved'>2023 | All Rights Reserved </h5>
    </div>
   </>
  )
}

export default Footer
