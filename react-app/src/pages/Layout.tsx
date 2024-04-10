import React from 'react';
// import { Link } from 'react-router-dom';
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
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
};

export default Layout;