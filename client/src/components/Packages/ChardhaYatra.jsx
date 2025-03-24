import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/ChardhamYatra1.jpeg";
import image2 from "../../assets/PackageImages/ChardhamYatra2.jpeg";
import image3 from "../../assets/PackageImages/ChardhamYatra3.jpeg";


const images = [image1, image2, image3];

const ChardhamYatra = () => {
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
      place: "Chardham Yatra Package",
      price: "₹11,900",
      image: "String",
    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };

  const itinerary = [
    { day: "Arrive in Srinagar", details: "Arrive in Srinagar and transfer to a deluxe houseboat. Enjoy a Shikara ride on Dal Lake in the evening. Overnight in Srinagar. Meals: Dinner" },
    { day: "Srinagar – Gulmarg – Srinagar", details: "Drive to Gulmarg, known for its stunning landscapes and the world’s highest golf course. Take the Gondola ride to Apharwat Peak. Return to Srinagar. Overnight in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Pahalgam", details: "Drive to Pahalgam, the 'Valley of Shepherds'. Visit Aru & Betaab Valley (optional). Enjoy scenic walks along the Lidder River. Overnight in Pahalgam. Meals: Breakfast, Dinner" },
    { day: "Pahalgam – Srinagar", details: "Explore Baisaran Valley or relax in Pahalgam. Return to Srinagar and visit Mughal Gardens: Nishat Bagh, Shalimar Bagh & Chashme Shahi. Overnight in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Sonmarg – Srinagar", details: "Full-day excursion to Sonmarg, the 'Meadow of Gold'. Enjoy a pony ride to Thajiwas Glacier (optional). Return to Srinagar. Overnight in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Departure from Srinagar", details: "Transfer to the airport for your return journey. Meals: Breakfast" }
  ];

  return (
    <div className="package-container">
      {/* Package Title */}
      <div className="package-header">
        <h1>Chardham Yatra</h1>
        <p>Delhi – Haridwar – Barkot – Yamunotri – Uttarkashi – Gangotri – Guptkashi – Gaurikund – Kedarnath – Rudraprayag – Badrinath</p>
        <p>Best Time to Travel: May – October</p>
        <p>06 Days / 05 Nights</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="prev-btn" onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}>❮</button>
        <img src={images[currentIndex]} alt="Chardham Yatra" className="slider-image" />
        <button className="next-btn" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>❯</button>
      </div>

      {/* Trip Details & Booking */}
      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Delhi:</strong> Red Fort, India Gate, bustling markets.</li>
            <li><strong>Haridwar:</strong> Spiritual Ganga Aarti at Har Ki Pauri.</li>
            <li><strong>Kedarnath:</strong> Ancient Shiva temple surrounded by Himalayas.</li>
            <li><strong>Badrinath:</strong> Majestic Vishnu temple amidst snowy peaks.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹11,900 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
            ♡ Add to Wishlist</button>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="day-wise-plan">
        <h2>Day Wise Itinerary - Srinagar</h2>
        {itinerary.map((item, index) => (
          <div className="day" key={index} onClick={() => setActiveDay(activeDay === index ? null : index)}>
            <h3>Day {index + 1}: {item.day}</h3>
            {activeDay === index && <p>{item.details}</p>}
          </div>
        ))}
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Aryan Mehta", rating: 5, comment: "A divine experience! Everything was perfectly arranged." },
          { name: "Natalie Roberts", rating: 4.5, comment: "Breathtaking views and well-planned trip!" },
          { name: "Devendra Singh", rating: 4, comment: "Great pilgrimage, but the trek was challenging!" },
          { name: "Olivia Carter", rating: 3.5, comment: "Loved the journey, but wished for more comfort in travel." },
          { name: "Rajiv Khanna", rating: 5, comment: "Life-changing experience! Will cherish forever." }
        ].map((review, index) => (
          <div className="review" key={index}>
            <h3>{review.name}</h3>
            <p>Rating: {"⭐".repeat(Math.floor(review.rating))}{review.rating % 1 ? "⭐" : ""}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChardhamYatra;