import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/about',
    name: 'About',
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) =>
            `lowercase text-sm mr-8 ${isActive ? 'underline' : ''}`
          }
          to={link.path}
          key={`${link.name}-${index}`}
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
