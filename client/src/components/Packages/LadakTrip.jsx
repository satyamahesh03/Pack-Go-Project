import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Ladakh1.jpeg";
import image2 from "../../assets/PackageImages/Ladakh2.jpeg";
import image3 from "../../assets/PackageImages/Ladakh3.jpg";


const images = [image1, image2, image3];

const LadakhTrip = () => {
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
        place: "Ladak Tour Package",
        price: "₹15,999",
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
        <h1>Ladakh: A Piece of Broken Moon Land</h1>
        <p>Delhi – Leh – Khardung La – Nubra Valley – Panamic – Leh</p>
        <p>Best Time to Travel: June to August</p>
        <p>08 Days / 07 Nights</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Ladakh Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Trip Details & Booking */}
      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Leh:</strong> Hemis, Thiksey, Shey Monasteries</li>
            <li><strong>Nubra Valley:</strong> Highest Motorable Road In The World</li>
            <li><strong>Panamic-Leh:</strong> Ladakhi Village</li>
            <li><strong>Alchi:</strong> Monastery of Lamayuru</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹15,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Our representative will receive you at the International airport and escort you to your hotel. Overnight in Delhi. Meals: None" },
          { day: "Delhi – Leh", details: "Early morning, board a flight to Leh. Upon arrival, our representative will assist you with check-in. Spend the day acclimatizing. Overnight in Leh. Meals: Breakfast, Dinner" },
          { day: "Leh – Indus Valley – Leh", details: "Morning visit to Indus Valley Monasteries: Shey, Thiksey, and Hemis. Evening at leisure. Overnight in Leh. Meals: Breakfast, Dinner" },
          { day: "Leh – Khardung La – Nubra Valley", details: "Drive to Khardung La, the world's highest motorable road. Continue to Nubra Valley, known as the 'Valley of Flowers'. Overnight in Nubra. Meals: Breakfast, Dinner" },
          { day: "Nubra Valley – Panamic – Leh", details: "Visit Panamic village, once a major trade stop on the Silk Route. Return to Leh. Overnight in Leh. Meals: Breakfast, Dinner" },
          { day: "Leh – Lamayuru – Alchi", details: "Visit Alchi and the famous Lamayuru Monastery, surrounded by dramatic landscapes. Overnight in Alchi. Meals: Breakfast, Dinner" },
          { day: "Alchi – Leh", details: "Explore Alchi Monastery and its thousand-year-old paintings. Return to Leh for a traditional Ladakhi dance performance. Overnight in Leh. Meals: Breakfast, Dinner" },
          { day: "Leh – Delhi Departure", details: "Board a flight to Delhi for your onward journey. Meals: Breakfast" }
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
          <li>🏨 Accommodation: 5-star hotels</li>
          <li>🍽️ Meals: Breakfast & Dinner included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Vikram Singh", rating: 5, comment: "Breathtaking views and a perfect itinerary!" },
          { name: "Priya Mehta", rating: 4.5, comment: "Loved the Nubra Valley experience!" },
          { name: "John Carter", rating: 5, comment: "A must-do trip for adventure lovers." },
          { name: "Aditi Sharma", rating: 4, comment: "Could have spent more time at Alchi Monastery." },
          { name: "Rohan Malhotra", rating: 5, comment: "Highly recommended! Smooth and well-organized." }
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

export default LadakhTrip;