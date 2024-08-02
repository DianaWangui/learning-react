import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../logo192.png'

const Header = () => {
  return (
    <nav className='header'>
      <div className='logo'>
        <img src={Logo} alt="my logo" width="40px"/>
        Diana's Portfolio
        </div>
      <div className='links'>
          <Link to ="/">Home</Link>
          <Link to ="/projects">Projects</Link>
          <Link to ="/About">About Me</Link>
      </div>
    </nav>
  );
}

export default Header;