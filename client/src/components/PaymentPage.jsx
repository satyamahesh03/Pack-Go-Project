import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PaymentPage.css";
import Loading from "../components/Loading"; // Import the Loading Component

const PaymentPage = () => {
  const { userData } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("token"));

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [travelers, setTravelers] = useState([{ name: "", age: "", gender: "" }]);
  const [contactDetails, setContactDetails] = useState({ phone: "", email: "" });
  const [travelDate, setTravelDate] = useState(new Date());

  useEffect(() => {
    const getSelectedPackage = async () => {
      setLoading(true); // Start loading animation
      if (userData && token) {
        try {
          const packageName = new URLSearchParams(location.search).get("destination");
          if (!packageName) {
            toast.error("No package selected!");
            navigate("/wishlist");
            return;
          }

          const response = await axios.get(`http://localhost:6500/api/wishlist/${userData.user._id}`, {
            headers: { authorization: token ? `Bearer ${token}` : "" },
          });

          const packageData = response.data.find((tour) => tour.place === packageName);
          if (!packageData) {
            toast.error("Package not found in wishlist!");
            navigate("/wishlist");
            return;
          }

          setSelectedPackage(packageData);
        } catch (error) {
          toast.error("Error fetching package details");
        } finally {
          setLoading(false); // Stop loading animation
        }
      } else {
        setTimeout(() => navigate("/loginpage"), 1000);
        toast.error("Please Login to proceed with payment");
      }
    };

    getSelectedPackage();
  }, [navigate, userData, location.search]);

  const handleAddTraveler = () => setTravelers([...travelers, { name: "", age: "", gender: "" }]);

  const handleRemoveTraveler = (index) => {
    const updatedTravelers = travelers.filter((_, i) => i !== index);
    setTravelers(updatedTravelers);
  };

  const handleTravelerChange = (index, field, value) => {
    const updatedTravelers = [...travelers];
    updatedTravelers[index][field] = value;
    setTravelers(updatedTravelers);
  };

  const handleSubmit = async () => {
    if (!contactDetails.phone || !contactDetails.email) {
      toast.error("Please enter contact details!");
      return;
    }
  
    setLoading(true); // Show loading animation
  
    try {
      await axios.post(
        "http://localhost:6500/api/wishlist/bookings",
        {
          userId: userData.user._id,
          package: selectedPackage,
          travelers,
          contactDetails,
          travelDate,
          userMail: userData.user.email
        },
        { headers: { authorization: token ? `Bearer ${token}` : "" } }
      );
  
      toast.success("Booking successful!");
      navigate("/confirmation");
    } catch (error) {
      toast.error("Booking failed!");
    } finally {
      setLoading(false); // Hide loading animation after response
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      {loading ? ( 
        <Loading /> // Show the loading animation
      ) : selectedPackage ? (
        <div className="package-details">
          <h2>{selectedPackage.place}</h2>
          <p className="price">Price: {selectedPackage.money || selectedPackage.price || "N/A"}</p>

          <h3>Traveler Details</h3>
          {travelers.map((traveler, index) => (
            <div key={index} className="traveler-info compact">
              <input
                type="text"
                placeholder="Name"
                value={traveler.name}
                onChange={(e) => handleTravelerChange(index, "name", e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={traveler.age}
                onChange={(e) => handleTravelerChange(index, "age", e.target.value)}
                required
              />
              <select
                value={traveler.gender}
                onChange={(e) => handleTravelerChange(index, "gender", e.target.value)}
                required
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {index > 0 && (
                <button className="remove-traveler" onClick={() => handleRemoveTraveler(index)}>-</button>
              )}
            </div>
          ))}
          <button onClick={handleAddTraveler} className="add-traveler">+ Add Traveler</button>

          <h3 className="C-details">Contact Details</h3>
          <div className="contact-info compact">
            <input
              type="text"
              placeholder="Phone Number"
              value={contactDetails.phone}
              onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={contactDetails.email}
              onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
              required
            />
          </div>

          <h3>Travel Date</h3>
          <DatePicker selected={travelDate} onChange={(date) => setTravelDate(date)} minDate={new Date()} dateFormat="yyyy-MM-dd" />

          {/* <button onClick={handleSubmit} className="payment-button">Book</button> */}
          <button onClick={handleSubmit} className="payment-button" disabled={loading}>{loading ? <Loading /> : "Book"}</button>
        </div>
      ) : (
        <p>No package details available.</p>
      )}
    </div>
  );
};

export default PaymentPage;
