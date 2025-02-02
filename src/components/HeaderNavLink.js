import React from 'react';

const HeaderNavLink = ({ href, children, active }) => {
  return (
    <li className="nav-item d-flex">
      <a className={`nav-link p-16 border-inactive ${active ? 'active border-active' : ''}`} aria-current={active ? 'page' : undefined} href={href}>
        {children}
      </a>
    </li>
  );
};

export default HeaderNavLink;
