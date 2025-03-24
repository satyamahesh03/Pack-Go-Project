import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Himachal1.jpg";
import image2 from "../../assets/PackageImages/Himachal2.jpeg";
import image3 from "../../assets/PackageImages/Himachal3.jpeg";


const images = [image1, image2, image3];

const HimachalHighlights = () => {
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
        place: "Himachal Package",
        price: "₹11,999",
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
        <h1>Himachal Highlights</h1>
        <p>Delhi – Shimla – Manali – Dharamshala – Dalhousie – Delhi</p>
        <p>Best Time to Travel: March – June & September – December</p>
        <p>08 Days / 07 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Himachal Highlights" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Shimla:</strong> Kufri, Mall Road, Christ Church</li>
            <li><strong>Manali:</strong> Solang Valley, Hadimba Temple, Rohtang Pass</li>
            <li><strong>Dharamshala:</strong> Dalai Lama Temple, Bhagsu Waterfall</li>
            <li><strong>Dalhousie:</strong> Khajjiar, Panchpula, St. John's Church</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹11,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[ 
          { day: "Arrive in Delhi", details: "Meet our representative and transfer to your hotel. Overnight in Delhi." },
          { day: "Delhi – Shimla", details: "Drive to Shimla, check-in at the hotel. Evening stroll at Mall Road. Overnight in Shimla." },
          { day: "Shimla Sightseeing", details: "Visit Kufri, Christ Church, and Jakhoo Temple. Overnight in Shimla." },
          { day: "Shimla – Manali", details: "Drive to Manali via Kullu Valley. Check-in at the hotel. Overnight in Manali." },
          { day: "Manali Sightseeing", details: "Explore Solang Valley, Hadimba Temple, and Manu Temple. Overnight in Manali." },
          { day: "Manali – Dharamshala", details: "Drive to Dharamshala, visit Dalai Lama Temple and Bhagsu Waterfall. Overnight in Dharamshala." },
          { day: "Dharamshala – Dalhousie", details: "Drive to Dalhousie, visit Panchpula and St. John's Church. Overnight in Dalhousie." },
          { day: "Dalhousie – Delhi", details: "Visit Khajjiar, then return to Delhi for departure." }
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
          <li>🏨 Accommodation: 3-star & 4-star hotels</li>
          <li>🍽️ Meals: Breakfast & dinner</li>
          <li>🚗 Transportation: Private cab with driver</li>
          <li>🎟️ Sightseeing: All major attractions included</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Rohan Malhotra", rating: 5, comment: "Amazing trip! Loved every moment in Manali." },
          { name: "Sarah Kapoor", rating: 4.5, comment: "Dharamshala was so peaceful, great itinerary!" },
          { name: "Amit Verma", rating: 5, comment: "The trip was well-organized. Highly recommended!" },
          { name: "Neha Sharma", rating: 4, comment: "Dalhousie is beautiful, but more time in Shimla would be nice." },
          { name: "Vikrant Singh", rating: 5, comment: "A memorable journey with stunning landscapes!" }
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

export default HimachalHighlights;