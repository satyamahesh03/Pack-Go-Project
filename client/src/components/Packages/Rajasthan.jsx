import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Rajasthan1.jpeg";
import image2 from "../../assets/PackageImages/Rajasthan2.jpeg";
import image3 from "../../assets/PackageImages/Rajasthan3.jpeg";


const images = [image1, image2, image3];

const RajasthanHighlights = () => {
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
        place: "Rajasthan Package",
        price: "₹12,999",
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
        <h1>Rajasthan Highlights</h1>
        <p>Delhi – Jaipur – Jodhpur – Udaipur – Jaisalmer – Bikaner</p>
        <p>Best Time to Travel: October – March</p>
        <p>09 Days / 08 Nights</p>
      </div>

      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Rajasthan Highlights" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Jaipur:</strong> Amber Fort, Hawa Mahal, City Palace</li>
            <li><strong>Jodhpur:</strong> Mehrangarh Fort, Umaid Bhawan Palace</li>
            <li><strong>Udaipur:</strong> City Palace, Lake Pichola Boat Ride</li>
            <li><strong>Jaisalmer:</strong> Jaisalmer Fort, Sam Sand Dunes</li>
            <li><strong>Bikaner:</strong> Junagarh Fort, Camel Breeding Farm</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹12,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      <div className="day-wise-plan">
        <h2>Day Wise Itinerary</h2>
        {[ 
          { day: "Arrive in Delhi", details: "Meet our representative and transfer to your hotel. Explore India Gate and Connaught Place. Overnight in Delhi." },
          { day: "Delhi – Jaipur", details: "Drive to Jaipur. Visit Amber Fort and enjoy an evening at Chokhi Dhani. Overnight in Jaipur." },
          { day: "Jaipur Sightseeing", details: "Explore Hawa Mahal, City Palace, and Jantar Mantar. Evening free for shopping. Overnight in Jaipur." },
          { day: "Jaipur – Jodhpur", details: "Drive to Jodhpur. Visit Mehrangarh Fort and Umaid Bhawan Palace. Overnight in Jodhpur." },
          { day: "Jodhpur – Udaipur", details: "Drive to Udaipur, en route visit Ranakpur Jain Temples. Overnight in Udaipur." },
          { day: "Udaipur Sightseeing", details: "Explore City Palace, Jagdish Temple, and enjoy a boat ride on Lake Pichola. Overnight in Udaipur." },
          { day: "Udaipur – Jaisalmer", details: "Drive to Jaisalmer. Visit local markets and experience the golden city charm. Overnight in Jaisalmer." },
          { day: "Jaisalmer – Bikaner", details: "Visit Jaisalmer Fort and Sam Sand Dunes. Later drive to Bikaner. Overnight in Bikaner." },
          { day: "Bikaner – Delhi (Departure)", details: "Explore Junagarh Fort and Camel Breeding Farm. Drive back to Delhi for departure." }
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
          { name: "Raj Malhotra", rating: 5, comment: "An amazing experience covering all major cities!" },
          { name: "Sophia Brown", rating: 4.5, comment: "Udaipur was breathtaking, loved the boat ride!" },
          { name: "Amit Sharma", rating: 5, comment: "The desert safari in Jaisalmer was a highlight!" },
          { name: "Emma Wilson", rating: 4, comment: "Jaipur was fantastic, but Bikaner was a surprise delight!" },
          { name: "Vikram Singh", rating: 5, comment: "Perfectly planned itinerary, great guides, and amazing food!" }
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

export default RajasthanHighlights;