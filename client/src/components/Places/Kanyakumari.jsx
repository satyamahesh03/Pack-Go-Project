import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import kanyakumariImg1 from "../../assets/PlaceImages/Kanyakumari1.jpg";
import kanyakumariImg2 from "../../assets/PlaceImages/Kanyakumari2.jpg";
import kanyakumariImg3 from "../../assets/PlaceImages/Kanyakumari3.jpg";

const Kanyakumari = () => {
  const images = [kanyakumariImg1, kanyakumariImg2, kanyakumariImg3];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const { userData, setUserData, token } = useContext(AppContext);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  const addData = () => {
    const newItem = {
      place: "KanyaKumari",
      price: "₹6,000",
      image: "String",
    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };

  return (
    <div className="place-container">
      <h1 className="place-title">Kanyakumari Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Kanyakumari" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Kanyakumari</h2>
          <p className="trip-price">Trip Price: ₹6,000 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>Kanyakumari Tourism</h2>
        <p>✅ <strong>Triveni Sangam</strong> – Witness the unique confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean.</p>
        <p>✅ <strong>Sunrise & Sunset Views</strong> – Kanyakumari is famous for its breathtaking sunrise and sunset, best viewed from the Vivekananda Rock Memorial.</p>
        <p>✅ <strong>Spiritual & Cultural Significance</strong> – Home to <strong>Kanyakumari Temple, Thiruvalluvar Statue, and Gandhi Memorial Mandapam</strong>.</p>
        <p>✅ <strong>Beautiful Beaches</strong> – Relax at Kanyakumari Beach with golden sands and panoramic ocean views.</p>
        <p>✅ <strong>Scenic Waterfalls</strong> – The stunning <strong>Thirparappu Waterfalls</strong> is a must-visit.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Vivekananda Rock Memorial - A spiritual and historical landmark.</li>
            <li>Thiruvalluvar Statue - A tribute to the Tamil poet-saint.</li>
            <li>Kanyakumari Temple - Dedicated to Goddess Devi Kanya Kumari.</li>
            <li>Triveni Sangam - Meeting point of three oceans.</li>
            <li>Thirparappu Waterfalls - A picturesque waterfall near Kanyakumari.</li>
          </ul>
        </div>
        <div className="trip-plan">
          <h3>2-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Visit Kanyakumari Temple, Triveni Sangam, and Vivekananda Rock Memorial.</li>
            <li><b>Day 2:</b> Explore Thiruvalluvar Statue, Thirparappu Waterfalls, and relax at Kanyakumari Beach.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to February for pleasant weather.</li>
          <li>Peak Season Rush: Book accommodations early to avoid last-minute hassles.</li>
          <li>Ferry Services: Limited availability to Vivekananda Rock Memorial; arrive early.</li>
          <li>Respect Local Customs: Dress modestly when visiting temples.</li>
          <li>Cash & ATMs: Carry sufficient cash as ATM availability is limited in some areas.</li>
        </ul>
      </div>
    </div>
  );
};

export default Kanyakumari;
