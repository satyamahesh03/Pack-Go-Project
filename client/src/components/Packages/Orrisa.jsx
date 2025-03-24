import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Orrisa1.jpeg";
import image2 from "../../assets/PackageImages/Orrisa2.jpeg";
import image3 from "../../assets/PackageImages/Orrisa3.jpeg";


const images = [image1, image2, image3];

const OdishaTrip = () => {
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
        place: "Odisha Heritage Package",
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
      {/* Package Title */}
      <div className="package-header">
        <h1>Odisha Heritage & Beach Tour</h1>
        <p>Bhubaneswar – Puri – Konark – Chilika Lake</p>
        <p>Best Time to Travel: October – March</p>
        <p>07 Days / 06 Nights</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Odisha Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Trip Details & Booking */}
      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Bhubaneswar:</strong> Lingaraj Temple, Udayagiri & Khandagiri Caves</li>
            <li><strong>Puri:</strong> Jagannath Temple, Golden Beach</li>
            <li><strong>Konark:</strong> Sun Temple, Chandrabhaga Beach</li>
            <li><strong>Chilika Lake:</strong> Dolphin spotting & bird sanctuary</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹9,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrival in Bhubaneswar", details: "Arrive in Bhubaneswar, visit Lingaraj Temple, Mukteshwar Temple, and explore Udayagiri & Khandagiri Caves. Overnight stay in Bhubaneswar." },
          { day: "Bhubaneswar – Puri", details: "Drive to Puri, visit the world-famous Jagannath Temple, explore the Golden Beach, and enjoy the local markets. Overnight in Puri." },
          { day: "Puri – Konark – Puri", details: "Visit the stunning Konark Sun Temple, relax at Chandrabhaga Beach, and return to Puri for leisure time. Overnight in Puri." },
          { day: "Puri – Chilika Lake – Puri", details: "Day trip to Chilika Lake, enjoy bird watching and dolphin spotting. Return to Puri for an overnight stay." },
          { day: "Puri – Raghurajpur – Bhubaneswar", details: "Visit Raghurajpur heritage village to see traditional Pattachitra paintings. Return to Bhubaneswar for sightseeing and shopping. Overnight in Bhubaneswar." },
          { day: "Bhubaneswar – Nandankanan Zoo & Handicraft Market", details: "Visit Nandankanan Zoological Park, explore Odisha State Museum, and shop at the handicraft market. Overnight in Bhubaneswar." },
          { day: "Departure", details: "Free time for shopping or sightseeing before departure." }
        ].map((item, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {item.day}</h3>
            {activeDay === index && <p>{item.details}</p>}
          </div>
        ))}
      </div>

      {/* What's Included */}
      <div className="included-section">
        <h2>What's Included</h2>
        <ul>
          <li>🏨 Accommodation: 4-star hotels</li>
          <li>🍽️ Meals: Breakfast included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Arjun Patel", rating: 5, comment: "Amazing experience, especially Puri Beach and Konark!" },
          { name: "Neha Sharma", rating: 4.5, comment: "A well-organized tour with great accommodations." },
          { name: "Vikas Rao", rating: 5, comment: "Loved the Chilika Lake boat ride and the temples in Bhubaneswar." },
          { name: "Priya Deshmukh", rating: 4, comment: "Fantastic trip, but wish we had more time at Konark Sun Temple." },
          { name: "Rohit Verma", rating: 5, comment: "Highly recommended for first-time travelers to Odisha!" }
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

export default OdishaTrip;