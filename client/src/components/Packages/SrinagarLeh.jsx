import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/SrinagarLeh1.jpeg";
import image2 from "../../assets/PackageImages/SrinagarLeh2.jpg";
import image3 from "../../assets/PackageImages/SrinagarLeh3.jpeg";


const images = [image1, image2, image3];

const SrinagarLehTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        place: "Srinagar and Leh-Ladakh Package",
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

  const [activeDay, setActiveDay] = useState(null);

  const itinerary = [
    { day: "Arrive in Srinagar", details: "Arrive at Srinagar airport. Our representative will receive you and transfer you to the houseboat/hotel. Enjoy a Shikara ride on Dal Lake in the evening. Overnight stay in Srinagar. Meals: Dinner" },
    { day: "Srinagar – Gulmarg – Srinagar", details: "After breakfast, proceed to Gulmarg, known for its scenic beauty and skiing slopes. Enjoy the Gondola ride (cable car) to Apharwat Peak. Return to Srinagar in the evening. Overnight stay in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Sonmarg – Srinagar", details: "After breakfast, drive to Sonmarg, the 'Meadow of Gold'. Enjoy breathtaking views of glaciers and snow-capped peaks. Visit Thajiwas Glacier (optional pony ride). Return to Srinagar. Overnight stay in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Pahalgam", details: "Depart for Pahalgam, the 'Valley of Shepherds'. En route, visit the saffron fields of Pampore and Awantipora ruins. Explore Betaab Valley and Aru Valley (optional local vehicle required). Overnight stay in Pahalgam. Meals: Breakfast, Dinner" },
    { day: "Pahalgam – Srinagar", details: "After breakfast, visit Baisaran Valley (optional pony ride). Return to Srinagar and visit Mughal Gardens – Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Overnight stay in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Doodhpathri – Srinagar", details: "After breakfast, visit Doodhpathri, a hidden gem in Kashmir known for its lush meadows and tranquil ambiance. Spend the day exploring and return to Srinagar by evening. Overnight stay in Srinagar. Meals: Breakfast, Dinner" },
    { day: "Srinagar – Departure", details: "After breakfast, check out from the hotel. Transfer to Srinagar airport for your onward journey. Meals: Breakfast" }
  ];

  return (
    <div className="package-container">
      <div className="package-header">
        <h1>Srinagar and Leh-Ladakh Tour</h1>
        <p>Delhi – Srinagar – Kargil – Lamayuru – Alchi – Leh</p>
        <p>Best Time to Travel: June – September</p>
        <p>07 Days / 06 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Srinagar Leh Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li>Srinagar: Dal Lake, Houseboats, Mughal Gardens</li>
            <li>Kargil: Passing through Zozila Pass</li>
            <li>Alchi: Lamayuru and Alchi Monastery</li>
            <li>Leh: World’s highest motor pass, Hemis Monastery, Thiksey Monastery</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹15,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
      <h2>Day Wise Itinerary</h2>
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
          <li>🏨 Accommodation: Deluxe Hotels & Houseboats</li>
          <li>🍽️ Meals: Breakfast & Dinner included</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Michael Turner", rating: 5, comment: "Absolutely mesmerizing trip! Everything was well organized." },
          { name: "Isabella Fernandez", rating: 4.5, comment: "A wonderful experience, loved the attention to detail!" },
          { name: "Liam O'Connor", rating: 3.5, comment: "Great tour! Would have preferred more time at some locations." },
          { name: "Amara Singh", rating: 5, comment: "A once-in-a-lifetime experience! Highly recommended!" },
          { name: "Rohan Desai", rating: 4.8, comment: "Amazing itinerary and well-planned journey!" }
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

export default SrinagarLehTour;
