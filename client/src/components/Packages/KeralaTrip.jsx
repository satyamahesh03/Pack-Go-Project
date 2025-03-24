import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";
import { AppContext } from "../Context/AppContext";


import image1 from "../../assets/PackageImages/Kerala1.jpeg";
import image2 from "../../assets/PackageImages/Kerala2.jpeg";
import image3 from "../../assets/PackageImages/Kerala3.jpeg";


const images = [image1, image2, image3];

const KeralaTourPackage = () => {
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
        place: "Kerala Package",
        price: "₹14,999",
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

  const itinerary = [
    { day: "Arrive in Kochi", details: "Arrive at Kochi Airport and transfer to your hotel. Explore Fort Kochi, Chinese Fishing Nets, St. Francis Church, and Marine Drive. Overnight in Kochi. Meals: None" },
    { day: "Kochi – Munnar", details: "Drive to Munnar (approx. 4 hours). Visit Cheeyappara Waterfalls and Spice Plantations en route. Check-in and relax amidst the tea gardens. Overnight in Munnar. Meals: Breakfast" },
    { day: "Munnar Sightseeing", details: "Explore Eravikulam National Park, Mattupetty Dam, Echo Point, and Tea Museum. Enjoy a peaceful evening in Munnar. Overnight in Munnar. Meals: Breakfast" },
    { day: "Munnar – Thekkady", details: "Drive to Thekkady (approx. 3.5 hours). Visit Periyar Wildlife Sanctuary and enjoy a boat ride on Periyar Lake. Explore spice plantations and local markets. Overnight in Thekkady. Meals: Breakfast" },
    { day: "Thekkady – Alleppey (Houseboat Experience)", details: "Drive to Alleppey (approx. 4 hours). Board a traditional Kerala houseboat and cruise through the serene backwaters. Enjoy local cuisine on board. Overnight on the houseboat. Meals: Breakfast, Lunch, Dinner" },
    { day: "Alleppey – Kumarakom", details: "Disembark from the houseboat and transfer to Kumarakom. Visit the Kumarakom Bird Sanctuary and enjoy a relaxing lakeside experience. Overnight in Kumarakom. Meals: Breakfast" },
    { day: "Kumarakom – Kovalam", details: "Drive to Kovalam (approx. 4.5 hours). Relax on the pristine beaches and enjoy Ayurvedic spa treatments. Overnight in Kovalam. Meals: Breakfast" },
    { day: "Kovalam & Kanyakumari Excursion", details: "Take a day trip to Kanyakumari, visiting Vivekananda Rock Memorial and Thiruvalluvar Statue. Return to Kovalam for a beachside evening. Overnight in Kovalam. Meals: Breakfast" },
    { day: "Kovalam – Trivandrum Sightseeing", details: "Explore Trivandrum’s attractions, including Padmanabhaswamy Temple, Napier Museum, and local markets. Relax at the beach in the evening. Overnight in Kovalam. Meals: Breakfast" },
    { day: "Departure from Trivandrum", details: "Enjoy your final morning in Kerala before transferring to Trivandrum Airport for your onward journey. Meals: Breakfast" }
  ];
  return (
    <div className="package-container">
      {/* Package Title */}
      <div className="package-header">
        <h1>Kerala Tour Package</h1>
        <p>Cochin – Munnar – Periyar – Allepey – Kovalam</p>
        <p>Best Time to Visit: September – March</p>
        <p>10 Days / 09 Nights</p>
      </div>

      {/* Image Slider */}
      <div className="slider-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Kerala Tour" className="slider-image" />
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Trip Details & Booking */}
      <div className="trip-details">
        <div className="trip-info">
          <h2>Trip Highlights</h2>
          <ul>
            <li><strong>Cochin:</strong> Jewish Synagogue, Kathakali</li>
            <li><strong>Munnar:</strong> Tea Garden Estate</li>
            <li><strong>Periyar:</strong> Periyar Wildlife Sanctuary</li>
            <li><strong>Allepey:</strong> Houseboat</li>
            <li><strong>Kovalam:</strong> Beaches of Kerala</li>
          </ul>
        </div>

        <div className="booking-section">
          <h3 className="price">Price: ₹14,999 per person</h3>
          {/* <button className="book-now" onClick={() => navigate("/payment")}>Buy Now</button> */}
          <button className="wishlist" onClick={() => addData()}> ♡ Add to Wishlist</button>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="day-wise-plan">
      <h2>Day Wise Itinerary - Kerala (10 Days / 9 Nights)</h2>
      {itinerary.map((item, index) => (
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
          <li>🏨 Accommodation: 5-star hotels & houseboat</li>
          <li>🍽️ Meals: Breakfast included, full meals on houseboat</li>
          <li>🚗 Transportation: Private car with driver</li>
          <li>🎟️ Entry Tickets: Monument fees covered</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {[
          { name: "Rohan Mehta", rating: 5, comment: "Absolutely stunning experience in Kerala!" },
          { name: "Sophia Nair", rating: 4.5, comment: "The backwaters of Allepey were a dream come true." },
          { name: "Amit Gupta", rating: 5, comment: "Tea gardens in Munnar were breathtaking!" },
          { name: "Emily Johnson", rating: 4, comment: "Loved everything but wished we had more time in Kovalam." },
          { name: "Rajesh Pillai", rating: 5, comment: "Highly recommended! Perfectly planned trip." }
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

export default KeralaTourPackage;