import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <NavLink to='/home' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={ ({ isActive }) => `nav-link ${isActive? 'nav-link-active': ''}`}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
