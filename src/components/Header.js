import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Bowst from '../images/Bowst.svg';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="menu-link">
        <img src={Bowst} alt="" className="bowst-logo" />
      </Link>
      <div className="header-menu">
        <Link to="/services" className="link">
          Services
        </Link>
        <Link to="/clients" className="link">
          Clients
        </Link>
        <Link to="/pricing" className="link">
          Pricing
        </Link>
        <Link to="/resources" className="link">
          Resources
        </Link>
      </div>
    </div>
  );
}

export default Header;
