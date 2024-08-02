import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid text-white" style={{ backgroundColor: '#000312' }}>
      <header className="d-flex justify-content-between align-items-center py-3">
        <div className="d-flex align-items-center">
          <img
            src="logo.png" // Replace with actual logo path
            alt="Secure Domains Logo"
            style={{ height: '40px' }}
          />
        </div>
        <div className="d-flex align-items-center w-100">
          {/* Toggle button for small screens */}
          <button
            className="navbar-toggler d-md-none"
            type="button"
            style={{ border: 'none', background: 'transparent', color: 'white', marginLeft: '20px' }}
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          {/* Navigation items */}
          <nav
            className={`d-md-flex ${isOpen ? 'd-flex' : 'd-none'} flex-column flex-md-row w-100 justify-content-center`}
          >
            <ul className="nav flex-column flex-md-row align-items-center">
              <li className="nav-item" style={{ margin: '10px 15px' }}>
                <NavLink
                  to='/'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#16757D' : 'white',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '20.824px',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: '10px 15px' }}>
                <NavLink
                  to='/product'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#16757D' : 'white',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '20.824px',
                  })}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: '10px 15px' }}>
                <NavLink
                  to='/contact'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#16757D' : 'white',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '20.824px',
                  })}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: '10px 15px' }}>
                <NavLink
                  to='/media'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#16757D' : 'white',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '20.824px',
                  })}
                >
                  Media
                </NavLink>
              </li>
              <li className="nav-item" style={{ margin: '10px 15px' }}>
                <NavLink
                  to='/about'
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#16757D' : 'white',
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '20.824px',
                  })}
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavbarComponent;
