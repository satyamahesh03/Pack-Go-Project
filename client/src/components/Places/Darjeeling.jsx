import React, { useState, useEffect, useContext } from "react";
import "./Places.css"; // Reusable CSS for all places
import { useNavigate } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import { AppContext } from "../Context/AppContext";
import { AddwishListData, uploadData } from "../../addWishlist/addWishList";

// Import Images
import darjeelingImg1 from "../../assets/PlaceImages/Darjeeling1.jpg";
import darjeelingImg2 from "../../assets/PlaceImages/Darjeeling2.jpeg";
import darjeelingImg3 from "../../assets/PlaceImages/Darjeeling3.jpeg";
import darjeelingImg4 from "../../assets/PlaceImages/Darjeeling4.jpeg";


const Darjeeling = () => {
  const images = [darjeelingImg1, darjeelingImg2, darjeelingImg3, darjeelingImg4];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const { userData, setUserData, token } = useContext(AppContext);

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
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
      place: "Darjeeling",
      price: "₹6,500",
      image: "String",
    }
    const res = AddwishListData(newItem, setUserData);
    console.log("UserData" + userData);
    console.log("res" + res);
    setTimeout(() => {
      uploadData(newItem, token, setUserData);
    }, 500);
  };
  return (
    <div className="place-container">
      <h1 className="place-title">Darjeeling Tourism</h1>

      <div className="place-content">
        <div className="place-images">
          <img src={images[currentImage]} alt="Darjeeling" className="place-image" />
        </div>

        <div className="booking-section animate-section">
          <h2>Explore Darjeeling</h2>
          <p className="trip-price">Trip Price: ₹6,550 per person</p>
          <div className="booking-buttons">
            {/* <button className="book-now" onClick={() => navigate("/payment")}>Book Now</button> */}
            <button className="wishlist" onClick={() => addData()}>
              <i className='bx bx-heart'></i> Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="place-details animate-section">
        <h2>Darjeeling Tourism</h2>
        <p>✅ <strong>Queen of The Himalayas</strong> – A stunning hill station with breathtaking mountain views.</p>
        <p>✅ <strong>Darjeeling Himalayan Railway</strong> – UNESCO World Heritage toy train ride.</p>
        <p>✅ <strong>Tea Plantations</strong> – Over 86 tea estates producing world-famous Darjeeling Tea.</p>
        <p>✅ <strong>Tiger Hill</strong> – The best sunrise point offering views of Kanchenjunga.</p>
        <p>✅ <strong>Rich British Colonial Heritage</strong> – Beautiful old churches, architecture, and history.</p>
        <p>✅ <strong>Cultural Diversity</strong> – Influence from Nepalese, Tibetans, and Sikkimese communities.</p>
        <p>✅ <strong>Adventure & Activities</strong> – Ropeway rides, trekking, and river rafting.</p>
        <p>✅ <strong>Best Time to Visit</strong> – February to March, September to December for pleasant weather.</p>
      </div>

      <div className="trip-details animate-section">
        <div className="places-offer">
          <h2>Places Offered</h2>
          <ul>
            <li>Tiger Hill - The famous sunrise viewpoint.</li>
            <li>Darjeeling Himalayan Railway - A heritage toy train ride.</li>
            <li>Batasia Loop - A scenic spiral railway track.</li>
            <li>Japanese Peace Pagoda - A symbol of peace and serenity.</li>
            <li>Rock Garden - Beautiful terraced garden with waterfalls.</li>
          </ul>
        </div>

        <div className="trip-plan">
          <h3>3-Day Trip Plan</h3>
          <ol>
            <li><b>Day 1:</b> Arrive, explore Mall Road, visit Darjeeling Ropeway.</li>
            <li><b>Day 2:</b> Early morning visit to Tiger Hill, explore monasteries & tea gardens.</li>
            <li><b>Day 3:</b> Visit Batasia Loop, Japanese Peace Pagoda, and depart.</li>
          </ol>
        </div>
      </div>

      <div className="travel-info animate-section">
        <h2>Must-Know Travel Tips</h2>
        <ul>
          <li>Best Time to Visit: February to March & September to December.</li>
          <li>Monsoon Season: Avoid visiting from June to September due to landslides.</li>
          <li>Transport: Shared taxis are common; ropeway rides provide stunning views.</li>
          <li>ATMs: Limited availability in remote areas – carry sufficient cash.</li>
          <li>Permits: Special permit required for Singalila National Park.</li>
          <li>Weather: Always carry warm clothing as temperatures drop unexpectedly.</li>
        </ul>
      </div>
    </div>
  );
};

export default Darjeeling;
