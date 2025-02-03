import React from 'react';

const HeaderNavLink = ({ href, children, active, onClick }) => {
  return (
    <li className="nav-item d-flex">
      <a
        className={`nav-link px-24 py-16 px-md-16 border-inactive text-primary ${active ? 'active border-active' : ''}`}
        aria-current={active ? 'page' : undefined}
        href={href}
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          onClick(); // Call the onClick handler
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderNavLink;
