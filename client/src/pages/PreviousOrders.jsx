import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PreviousOrders.css";
import Loading from "../components/Loading"; // Import Loading Component

const PreviousOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPreviousOrders = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const userData = JSON.parse(localStorage.getItem("userData"));
        const userId = userData?.user?._id;

        if (!userId) {
          navigate("/loginpage");
          return;
        }

        const response = await axios.get(
          `http://localhost:6500/api/previous-orders/${userId}`,
          { headers: { authorization: `Bearer ${token}` } }
        );

        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching previous orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreviousOrders();
  }, [navigate]);

  return (
    <div className="orders-container">
      <h2 className="orders-title">Previous Orders</h2>
      {loading ? (
        <Loading /> // Show loading animation
      ) : orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-details">
                <h3>{order.package.place}</h3>
                <p><strong>Price:</strong> {order.package.price}</p>
                <p><strong>Travel Date:</strong> {new Date(order.travelDate).toDateString()}</p>
                <p><strong>Travelers:</strong> {order.travelers.map(t => `${t.name} (${t.age}, ${t.gender})`).join(", ")}</p>
                <p><strong>Contact:</strong> {order.contactDetails.phone} | {order.contactDetails.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-orders">No previous bookings found.</p>
      )}
    </div>
  );
};

export default PreviousOrders;
