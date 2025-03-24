import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Importing images
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import image13 from '../assets/image13.jpg'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.jpg'
import image16 from '../assets/image16.jpg'

const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".content-section");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => [...new Set([...prev, index])]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // List of packages with their file names & images
  const packages = [
    { name: "golden-triangle-india", image: image1 },
    { name: "golden-triangle-amritsar", image: image2 },
    { name: "srinagar-leh", image: image3 },
    { name: "chardham-yatra", image: image4 },
    { name: "darjeeling-gangtok", image: image5 },
    { name: "garhwalkumaon", image: image6 },
    { name: "golden-triangle-goa", image: image7 },
    { name: "himachal", image: image8 },
    { name: "karnataka", image: image9 },
    { name: "kerala", image: image10 },
    { name: "ladak", image: image11 },
    { name: "orrisa", image: image12 },
    { name: "golden-triangle-varanasi", image: image13 },
    { name: "rajasthan", image: image14 },
    { name: "golden-triangle-shimla", image: image15 },
    { name: "assam-sundarbans", image: image16 },
  ];

  return (
    <div className="home-container">
      <div className="inner-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Book the Best Tours & Trips</h1>
              <p>🌏 Explore. Experience. Enjoy.</p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="cards-section">
          <h2>🌍 Explore Our Best Packages</h2>
          <div className="cards-grid">
            {packages.map((pkg, index) => (
              <Link to={`/packagedetails/${pkg.name}`} key={index} className="card-link">
                <div className="card">
                  <img src={pkg.image} alt={pkg.name} className="card-image" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/ladak">Destinations</Link></li>
                <li><Link to="/categories/hillstations">Categories</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: packandngo.booking@gmail.com</p>
              <p>Phone: +91 99998 99998</p>
              <p>Address: MVGR College Of Engineering, Chinthalavalsa, Vizianagaram, AP, India</p>
            </div>

            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/sath_yyaa" className="icon"><i className="bx bxl-instagram" style={{ color: "#ffffff", fontSize: "24px" }}></i></a>
                <a href="https://wwww.facebook.com/kolli.satyamahesh" className="icon"><i className="bx bxl-facebook" style={{ color: "#ffffff", fontSize: "24px" }}></i></a>
                <a href="https://www.x.com/sath_yyaa" className="icon"><i className="bx bxl-twitter" style={{ color: "#ffffff", fontSize: "24px" }}></i></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Pack & Go. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;