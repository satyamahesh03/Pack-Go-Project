import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";



import image1 from "../../assets/PackageImages/Karnataka1.jpeg";
import image2 from "../../assets/PackageImages/Karnataka2.jpeg";
import image3 from "../../assets/PackageImages/Karnataka3.jpg";

const images = [image1, image2, image3];

const KarnatakaGrandeur = () => {
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
        place: "Karnataka Grandeur Package",
        price: "₹7,999",
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
        <h1>Karnataka Grandeur Highlights</h1>
        <p>Bangalore – Mysore – Coorg – Hampi – Badami – Bangalore</p>
        <p>Best Time to Travel: October – March</p>
        <p>06 Days / 05 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Karnataka Grandeur" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Bangalore:</strong> Lalbagh Botanical Garden, Vidhan Soudha, Cubbon Park.</li>
            <li><strong>Mysore:</strong> Mysore Palace, Chamundi Hills, Brindavan Gardens.</li>
            <li><strong>Coorg:</strong> Abbey Falls, Dubare Elephant Camp, Coffee Plantations.</li>
            <li><strong>Hampi:</strong> Virupaksha Temple, Vittala Temple, Lotus Mahal.</li>
            <li><strong>Badami:</strong> Badami Caves, Aihole, Pattadakal.</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹7,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[
          { day: "Arrive in Bangalore", details: "Meet our representative and transfer to your hotel. Explore Lalbagh Garden, Vidhan Soudha, and MG Road. Overnight in Bangalore." },
          { day: "Bangalore – Mysore", details: "Drive to Mysore, visiting Srirangapatna en route. Explore Mysore Palace and Chamundi Hills. Overnight in Mysore." },
          { day: "Mysore – Coorg", details: "Drive to Coorg, visit Abbey Falls and Dubare Elephant Camp. Enjoy a coffee plantation tour. Overnight in Coorg." },
          { day: "Coorg – Hampi", details: "Drive to Hampi, explore the ancient ruins, including Virupaksha Temple and Lotus Mahal. Overnight in Hampi." },
          { day: "Hampi – Badami", details: "Drive to Badami, visit the rock-cut caves, Aihole, and Pattadakal. Overnight in Badami." },
          { day: "Badami – Bangalore (Departure)", details: "Drive back to Bangalore for departure. Tour ends with beautiful memories." }
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
          { name: "Ravi Sharma", rating: 5, comment: "An amazing experience exploring Karnataka!" },
          { name: "Emily Clark", rating: 4.5, comment: "Loved Coorg and Hampi, a must-visit!" },
          { name: "Vikas Menon", rating: 5, comment: "The guides were excellent, and the itinerary was well-planned." },
          { name: "Sophia Patel", rating: 4, comment: "Mysore Palace was stunning!" },
          { name: "Arun Nair", rating: 5, comment: "A perfect blend of history and nature." }
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

export default KarnatakaGrandeur;