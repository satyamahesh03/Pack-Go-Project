import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../components/Context/AppContext";
import { toast } from "react-toastify";
import "./Wishlist.css";
import Loading from "../components/Loading"; // Import Loading Component

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const { userData } = useContext(AppContext);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const fetchWishlist = async () => {
      if (userData && token) {
        try {
          const response = await axios.get(
            `http://localhost:6500/api/wishlist/${userData.user._id}`,
            {
              headers: { authorization: token ? `Bearer ${token}` : "" },
            }
          );
          setWishlist(response.data);
        } catch (error) {
          console.error(error);
          toast.error("Error fetching wishlist");
        }
      } else {
        setTimeout(() => {
          navigate("/loginpage");
        }, 1000);
        toast.error("Please Login to retrieve wishlist");
      }
      setIsLoading(false); // Stop loading after data is fetched
    };
    fetchWishlist();
  }, [navigate, userData]);

  const removeFromWishlist = async (place) => {
    try {
      await axios.delete(
        `http://localhost:6500/api/wishlist/remove/${userData.user._id}/${place}`,
        {
          headers: { authorization: token ? `Bearer ${token}` : "" },
        }
      );
      setWishlist(wishlist.filter((item) => item.place !== place));
      toast.success("Removed from wishlist");
    } catch (error) {
      console.error(error);
      toast.error("Error removing item");
    }
  };

  const bookNow = (place) => {
    navigate(`/payment?destination=${place}`);
  };

  return (
    <div className="main-container">
      {isLoading ? (
        <Loading /> // Show loading spinner when data is being fetched
      ) : (
        <div className="wishlist-container">
          <h1 className="wishlist-title">Your Wishlist</h1>
          {wishlist?.length > 0 ? (
            <div className="wishlist-list">
              {wishlist.map((item, index) => (
                <div key={index} className="wishlist-card">
                  <div className="wishlist-details">
                    <p className="wishlist-index">#{index + 1}</p>
                    <p className="wishlist-place"><strong>Place:</strong> {item.place}</p>
                    <p className="wishlist-price"><strong>Price:</strong> {item.price}</p>
                  </div>
                  <div className="wishlist-actions">
                    <button className="wishlist-btn book-btn" onClick={() => bookNow(item.place)}>Book Now</button>
                    <button className="wishlist-btn remove-btn" onClick={() => removeFromWishlist(item.place)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="wishlist-empty">No trips saved in your wishlist.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
