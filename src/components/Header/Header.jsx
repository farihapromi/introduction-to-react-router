import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const baseStyle = 'p-4 rounded-lg';
  const activeStyle = 'bg-blue-600 text-white'; // active link style
  const inactiveStyle = 'bg-blue-400 text-black'; // default style

  return (
    <div>
      <h2>Navbar</h2>
      <nav className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
