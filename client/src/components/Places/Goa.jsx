import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'boxicons/css/boxicons.min.css';
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

// Import Images
import goaImg1 from "../../assets/PlaceImages/Goa1.jpg";
import goaImg2 from "../../assets/PlaceImages/Goa2.jpg";
import goaImg3 from "../../assets/PlaceImages/Goa3.jpg";

const Goa = () => {
  const images = [goaImg1, goaImg2, goaImg3];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // Initialize navigation
  const { userData, setUserData, token } = useContext(AppContext);// copy
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
      place: "Goa",
      price: "₹5,154",
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
      <h1 className="place-title">Goa Tourism</h1>

      {/* Image & Booking Section */}
      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Goa" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Goa</h2>
          <p className="trip-price">Trip Price: ₹5,154 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment?destination=Goa")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Place Details Section */}
      <div className="place-details animate-section">
        <h2>About Goa</h2>
        <p>✅ <strong>Beach Paradise</strong> – Goa is famous for its stunning beaches, from bustling Baga and Calangute to serene Agonda and Palolem.</p>
        <p>✅ <strong>Vibrant Nightlife</strong> – With beach shacks, nightclubs, and bars, Goa boasts one of the best party scenes in India.</p>
        <p>✅ <strong>Rich Portuguese Heritage</strong> – Explore Portuguese-era churches, forts, and colorful houses.</p>
        <p>✅ <strong>Adventure Sports</strong> – Try parasailing, scuba diving, jet skiing, and other thrilling water activities.</p>
        <p>✅ <strong>Casinos & River Cruises</strong> – Enjoy Goa’s famous floating casinos and scenic Mandovi River cruises.</p>
        <p>✅ <strong>Delicious Seafood & Goan Cuisine</strong> – Savor fresh seafood, Bebinca, Feni, and traditional Goan dishes.</p>
        <p>✅ <strong>Festivals & Carnivals</strong> – Experience Goa Carnival, New Year’s Eve, and vibrant beach festivals.</p>
        <p>✅ <strong>Best Time to Visit</strong> – October to March, when the weather is perfect for beach activities and nightlife.</p>
      </div>

      {/* Trip Highlights & Itinerary */}
      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Baga & Calangute Beach - Party hubs with water sports and shacks.</li>
            <li>Palolem & Agonda Beach - Peaceful, scenic beaches in South Goa.</li>
            <li>Fort Aguada & Chapora Fort - Iconic forts with breathtaking views.</li>
            <li>Basilica of Bom Jesus - UNESCO-listed church with historic significance.</li>
            <li>Mandovi River Casino Cruise - Experience Goa’s vibrant nightlife on floating casinos.</li>
          </ul>
        </div>

        {/* 5-Day Travel Itinerary */}
        <div className="trip-plan">
          <h3>5-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive in Goa, relax at Baga Beach, enjoy nightlife at Tito’s Lane.</li>
            <li><b>Day 2:</b> Visit Aguada Fort, explore Calangute and Anjuna Beach.</li>
            <li><b>Day 3:</b> Enjoy watersports at Candolim, visit Chapora Fort, and explore the flea markets.</li>
            <li><b>Day 4:</b> Head to South Goa - visit Palolem Beach, Basilica of Bom Jesus, and enjoy a sunset cruise.</li>
            <li><b>Day 5:</b> Visit local markets, try Goan cuisine, and depart.</li>
          </ol>
        </div>
      </div>

      {/* Travel Information */}
      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: October to March for pleasant weather and beach activities.</li>
          <li>Monsoon Season: Beach shacks and water sports may be closed from June to September.</li>
          <li>North vs. South Goa: North is known for nightlife and beaches, while South offers tranquility and luxury.</li>
          <li>Pre-book Accommodations: Peak season (Nov-Feb) sees high demand, so book in advance.</li>
          <li>Swimming Safety: Some beaches have strong currents. Follow lifeguard instructions.</li>
          <li>Local Transport: Rent scooters or bicycles for easy exploration.</li>
        </ul>
      </div>
    </div>
  );
};

export default Goa;