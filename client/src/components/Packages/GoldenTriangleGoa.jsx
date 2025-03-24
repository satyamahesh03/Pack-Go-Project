import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/GTGoa1.jpg";
import image2 from "../../assets/PackageImages/GTGoa2.jpg";
import image3 from "../../assets/PackageImages/GTGoa3.jpeg";


const images = [image1, image2, image3];

const GoldenTriangleGoa = () => {
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
        place: "Golden Triangle Goa Package",
        price: "₹13,999",
        image: "String",
      }
      const res = AddwishListData(newItem, setUserData);
      console.log("UserData" + userData);
      console.log("res" + res);
      setTimeout(() => {
        uploadData(newItem, token, setUserData);
      }, 500);
    };



  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const itinerary = [
    { day: "Arrive in Goa", details: "Arrive at Goa airport and transfer to your hotel. Relax and enjoy the beachside ambiance. Spend the evening exploring local markets and shacks. Overnight in Goa. Meals: None" },
    { day: "North Goa Exploration", details: "Visit Aguada Fort, SinQurim Beach, Baga Beach, Anjuna Beach, and Vagator Beach. Enjoy water sports or relax by the sea. Explore Goa’s nightlife at Tito’s Lane. Overnight in Goa. Meals: Breakfast" },
    { day: "South Goa Heritage & Beaches", details: "Explore Old Goa churches like Basilica of Bom Jesus & Se Cathedral. Visit Miramar Beach, Dona Paula, Colva Beach, and enjoy a sunset cruise on the Mandovi River. Overnight in Goa. Meals: Breakfast" },
    { day: "Dudhsagar Waterfalls & Spice Plantation", details: "Take an excursion to the majestic Dudhsagar Waterfalls. Later, visit a spice plantation and learn about Goan spices. Enjoy a Goan-style lunch. Overnight in Goa. Meals: Breakfast" },
    { day: "Island Trip & Dolphin Watching", details: "Go for a boat trip to Grande Island, enjoy snorkeling, dolphin spotting, and beach activities. Return to the hotel in the evening. Overnight in Goa. Meals: Breakfast" },
    { day: "Adventure & Watersports", details: "Engage in thrilling activities like jet skiing, parasailing, banana boat rides, and scuba diving at Candolim Beach. Relax at a shack and enjoy fresh seafood. Overnight in Goa. Meals: Breakfast" },
    { day: "Shopping & Cultural Exploration", details: "Visit Mapusa Market or Anjuna Flea Market to shop for souvenirs, handicrafts, and beachwear. Explore Fontainhas, the Latin Quarter, known for its Portuguese-style houses. Overnight in Goa. Meals: Breakfast" },
    { day: "Leisure Day & Beach Party", details: "Spend a relaxing day on the beach, indulge in a spa session, or enjoy a beach party at Palolem Beach. Overnight in Goa. Meals: Breakfast" },
    { day: "Departure from Goa", details: "Enjoy a relaxed morning before checking out. Transfer to the airport for your return flight. Meals: Breakfast" }
  ];

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Golden Triangle with Goa</h1>
        <p>Delhi – Agra – Jaipur – Goa</p>
        <p>Best Time to Travel: October – March</p>
        <p>09 Days / 08 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Golden Triangle with Goa" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Delhi:</strong> Old City, Jama Masjid, India Gate, Qutub Minar.</li>
            <li><strong>Agra:</strong> Taj Mahal, Agra Fort, Fatehpur Sikri.</li>
            <li><strong>Jaipur:</strong> Hawa Mahal, Amber Fort, City Palace.</li>
            <li><strong>Goa:</strong> Beaches, St. Francis Xavier, Basilica of Bom Jesus.</li>
          </ul>
        </div>
        <div className="booking-section">
          <h3 className="price">Price: ₹13,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}>
 ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary - Goa</h2>
        {itinerary.map((item, index) => (
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
        {[{ name: "Amit Sharma", rating: 5, comment: "Amazing experience!" },
        { name: "Sophia Patel", rating: 4.5, comment: "Goa was breathtaking!" },
        { name: "Rahul Verma", rating: 5, comment: "Best trip ever!" }].map((review, index) => (
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

export default GoldenTriangleGoa;