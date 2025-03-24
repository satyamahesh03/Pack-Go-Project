import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Garhwalkumaon1.jpeg";
import image2 from "../../assets/PackageImages/Garhwalkumaon2.jpeg";
import image3 from "../../assets/PackageImages/Garhwalkumaon3.jpeg";


const images = [image1, image2, image3];

const GarhwalKumaonTour = () => {
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
        place: "Garhwal Kumaon Package",
        price: "₹18,000",
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
        <h1>Garhwal and Kumaon Tour</h1>
        <p>Delhi – Rishikesh – Uttarkashi – Gangotri – Rudraprayag – Badrinath – Joshimath – Kausani – Nainital – Corbett</p>
        <p>Best Time to Travel: April – June and September – October</p>
        <p>12 Days / 11 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Garhwal Kumaon Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Rishikesh:</strong> Lakshman Jhoola, Shivanand Ashram, Evening Aarti.</li>
            <li><strong>Gangotri:</strong> Hot springs, Harsil Valley, Gangotri Temple.</li>
            <li><strong>Badrinath:</strong> Badrinath Temple, Mana Village.</li>
            <li><strong>Nainital:</strong> Mall Road, Naini Lake, Colonial Market.</li>
            <li><strong>Corbett:</strong> Jeep Safari at Corbett National Park.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹18,000 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
♡ Add to Wishlist</button>
        </div>
      </div>


      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Delhi", details: "Meet our representative and transfer to hotel. Overnight in Delhi." },
          { day: "Delhi – Rishikesh", details: "Drive to Rishikesh via Haridwar. Visit Lakshman Jhoola, Shivanand Ashram, and evening Aarti at Parmarth Niketan Ghat. Overnight in Rishikesh." },
          { day: "Rishikesh – Uttarkashi", details: "Drive to Uttarkashi. Visit Vishwanath Temple and local market. Overnight in Uttarkashi." },
          { day: "Uttarkashi – Gangotri – Uttarkashi", details: "Visit Gangotri Temple and Harsil Valley. Return to Uttarkashi. Overnight in Uttarkashi." },
          { day: "Uttarkashi – Rudraprayag", details: "Drive to Rudraprayag via Srinagar. Overnight in Rudraprayag." },
          { day: "Rudraprayag – Badrinath", details: "Drive to Badrinath. Visit Badrinath Temple and Mana Village. Overnight in Badrinath." },
          { day: "Badrinath – Auli – Joshimath", details: "Visit Auli, then proceed to Joshimath. Overnight in Joshimath." },
          { day: "Joshimath – Kausani", details: "Drive to Kausani. Overnight in Kausani." },
          { day: "Kausani – Almora – Nainital", details: "Drive to Nainital via Almora. Visit Nanda Devi Temple. Overnight in Nainital." },
          { day: "Nainital – Corbett", details: "Drive to Corbett National Park. Afternoon Jeep Safari. Overnight in Corbett." },
          { day: "Corbett Safari", details: "Morning and afternoon Jeep Safari in the park. Overnight in Corbett." },
          { day: "Corbett – Delhi (Departure)", details: "Drive to Delhi for departure." }
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
          <li>🏨 Accommodation: Deluxe hotels</li>
          <li>🍽️ Meals: Breakfast included</li>
          <li>🚗 Transportation: Private vehicle with driver</li>
          <li>🎟️ Entry Tickets: All major sightseeing included</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Rahul Sharma", rating: 5, comment: "An amazing spiritual and adventure experience!" },
          { name: "Priya Verma", rating: 4.5, comment: "Loved the nature and temples, well-organized tour." },
          { name: "Amit Gupta", rating: 5, comment: "Auli was breathtaking, and Corbett safari was thrilling!" },
          { name: "Sonia Kapoor", rating: 4, comment: "Great trip, but more time in Gangotri would be better." },
          { name: "Vikas Mehta", rating: 5, comment: "Highly recommend this tour for nature and adventure lovers!" }
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

export default GarhwalKumaonTour;