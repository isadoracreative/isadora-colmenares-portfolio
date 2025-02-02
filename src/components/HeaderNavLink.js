import React from 'react';

const HeaderNavLink = ({ href, children, active }) => {
  return (
    <li className="nav-item d-flex">
      <a className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined} href={href}>
        {children}
      </a>
    </li>
  );
};

export default HeaderNavLink;
