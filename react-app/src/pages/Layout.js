import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/">Cart</Link>
                </li>
                <li>
                    <Link to="/">Sign Up</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout