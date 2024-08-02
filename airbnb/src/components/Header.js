import React from 'react';

export default function Header() {
  return (
    <nav className='navigation'>
      <h1 className='logo'>My Website</h1>

      <ul className='nav-list'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/project">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}