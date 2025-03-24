import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import Image from '../assets/logo.jpeg';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={Image} style={{ width: "130px", height: "60px", borderRadius:"1rem" }} alt="Example" draggable="false" />
        </Link>



        {/* Navbar Links */}
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link"><i className="fa-solid fa-home"></i> Home</Link>
          </li>

          {/* Top Destinations Dropdown */}
          <li
            className="navbar-item dropdown"
            onMouseEnter={() => handleMouseEnter("destinations")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">Destinations</span> {/* Removed ▾ */}
            {dropdownOpen === "destinations" && (
              <ul className="dropdown-menu">
                <li><Link to="/ladak" className="dropdown-item">Ladak</Link></li>
                <li><Link to="/srinagar" className="dropdown-item">Srinagar</Link></li>
                <li><Link to="/munnar" className="dropdown-item">Munnar</Link></li>
                <li><Link to="/pondicherry" className="dropdown-item">Pondicherry</Link></li>
                <li><Link to="/goa" className="dropdown-item">Goa</Link></li>
                <li><Link to="/manali" className="dropdown-item">Manali</Link></li>
                <li><Link to="/ooty" className="dropdown-item">Ooty</Link></li>
                <li><Link to="/araku" className="dropdown-item">Araku</Link></li>
                <li><Link to="/rameshwaram" className="dropdown-item">Rameshwaram</Link></li>
                <li><Link to="/rann-of-kutch" className="dropdown-item">Rann of Kutch</Link></li>
                <li><Link to="/andaman" className="dropdown-item">Andaman</Link></li>
                <li><Link to="/badrinath" className="dropdown-item">Badrinath</Link></li>
              </ul>
            )}
          </li>

          <li
            className="navbar-item dropdown"
            onMouseEnter={() => handleMouseEnter("categories")}
            onMouseLeave={handleMouseLeave}>
            <span className="navbar-link">Categories</span> {/* Removed ▾ */}
            {dropdownOpen === "categories" && (
              <ul className="dropdown-menu">
                <li><Link to="/categories/hillstations" className="dropdown-item">Hill Stations</Link></li>
                <li><Link to="/categories/costalregions" className="dropdown-item">Coastal Regions</Link></li>
                <li><Link to="/categories/spritualdestinations" className="dropdown-item">Spiritual Destinations</Link></li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link"><i className="fa-solid fa-phone"></i> Contact</Link>
          </li>

          <li className="navbar-item">
            <Link to="/wishlist" className="navbar-link"><i className="fa-solid fa-heart"></i> Wishlist</Link>
          </li>

          <li className="navbar-item">
            
            <Link to="/profile" className="navbar-link"><i className="fa-solid fa-user"></i> Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;