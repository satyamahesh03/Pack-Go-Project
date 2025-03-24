import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";

import image1 from "../../assets/PackageImages/DarjeelingGangtok1.jpeg";
import image2 from "../../assets/PackageImages/DarjeelingGangtok2.jpeg";
import image3 from "../../assets/PackageImages/DarjeelingGangtok3.jpeg";


const images = [image1, image2, image3];

const DarjeelingGangtok = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDay, setActiveDay] = useState(null);
  const navigate = useNavigate();
  const { userData, setUserData, token } = useContext(AppContext);

  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
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
        place: "Darjeeling Gangtok Pack",
        price: "₹9,999",
        image: "String",
      }
      const res = AddwishListData(newItem, setUserData);
      console.log("UserData" + userData);
      console.log("res" + res);
      setTimeout(() => {
        uploadData(newItem, token, setUserData);
      }, 500);
    };
  

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Darjeeling with Gangtok</h1>
        <p>Delhi – Bagdogra – Darjeeling – Gangtok – Bagdogra – Delhi</p>
        <p>Best Time to Travel: September – June</p>
        <p>07 Days / 06 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Darjeeling & Gangtok Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Darjeeling:</strong> Tiger Hill, Toy Train, Himalayan Mountaineering Institute, Tea Garden</li>
            <li><strong>Gangtok:</strong> Enchey Monastery, Tashiling, Rumtek Monastery, Orchid Sanctuary</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹9,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
            ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Our representative will receive you and transfer you to your hotel. Overnight in Delhi. Meals: None" },
          { day: "Delhi – Bagdogra – Darjeeling", details: "Fly to Bagdogra and drive to Darjeeling. Check-in and evening free. Overnight in Darjeeling. Meals: Breakfast" },
          { day: "Darjeeling", details: "Visit Tiger Hill for sunrise, Ghoom Monastery, Tea Garden, and local sightseeing. Overnight in Darjeeling. Meals: Breakfast" },
          { day: "Darjeeling – Gangtok", details: "Drive to Gangtok and visit Enchey Monastery, Tashiling, and more. Overnight in Gangtok. Meals: Breakfast" },
          { day: "Gangtok", details: "Excursion to Tashiview Point, Rumtek Monastery, and Orchid Sanctuary. Overnight in Gangtok. Meals: Breakfast" },
          { day: "Gangtok – Bagdogra – Delhi", details: "Drive to Bagdogra for flight to Delhi. Overnight in Delhi. Meals: None" },
          { day: "Delhi Departure", details: "Transfer to the airport for departure. Meals: None" }
        ].map((item, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {item.day}</h3>
            {activeDay === index && <p>{item.details}</p>}
          </div>
        ))}
      </div>

      <div className="included-section">
        <h2>What's Included</h2>
        <ul>
          <li>🏨 Accommodation: 5-star hotels</li>
          <li>🍽️ Meals: Breakfast included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Ananya Das", rating: 5, comment: "The best hill station experience! Loved the tea gardens and monasteries." },
          { name: "Michael Brown", rating: 4.5, comment: "Very well organized trip with great accommodations." },
          { name: "Priya Sharma", rating: 5, comment: "A must-visit! The views from Tiger Hill were breathtaking." },
          { name: "Rohan Verma", rating: 4, comment: "Everything was smooth, but I wish we had more time at Rumtek Monastery." },
          { name: "Sarah Lee", rating: 5, comment: "Highly recommended! The itinerary was perfect." }
        ].map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>Rating: {"⭑".repeat(Math.round(review.rating))}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarjeelingGangtok;