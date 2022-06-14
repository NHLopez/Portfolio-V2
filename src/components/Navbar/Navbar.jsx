import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { MdOutlineMenu, MdClose } from "react-icons/md";


import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='nav'>
      <div className='nav__container container'>

        <ul className='nav__list'>
          <li className='nav__list-items'><Link to='/'>Home</Link></li>
          <li className='nav__list-items'><Link to='/portfolio'>Portfolio</Link></li>
          <li className='nav__list-items'><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className='nav__small-nav' >
          <MdOutlineMenu className='nav__small-nav--menu' fontSize={27} onClick={() => { setToggleMenu(true) }} />

          {toggleMenu && (
            <div className='nav__small-nav--overlay slide-bottom'>

              <MdClose fontSize={27} className='nav__small-nav--close' onClick={() => { setToggleMenu(false) }} />

              <ul className='nav__small-nav--list'>
                <li className='nav__small-nav--links'><Link to='/' onClick={() => { setToggleMenu(false) }}>Home</Link></li>
                <li className='nav__small-nav--links'><Link to='/portfolio' onClick={() => { setToggleMenu(false) }}>Portfolio</Link></li>
                <li className='nav__small-nav--links'><Link to='/contact' onClick={() => { setToggleMenu(false) }}>Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </nav>
  )
}

export default Navbar