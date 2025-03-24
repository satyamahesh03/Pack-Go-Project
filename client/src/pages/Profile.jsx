import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import CSS file
import { Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  // Fetch user data safely
  const userData = localStorage.getItem("userData");
  const user = userData ? JSON.parse(userData).user : null; // Extract 'user' safely

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    navigate("/loginpage"); // Redirect to login after logout
  };

  

  return (
    <div className='main-profile'>
      <Link to="/previous-orders" id="'prev-orders'">Orders</Link>
      <div className="profile-container">
        <div className="profile-card">
          {user ? (
            <>
              {/* Profile Avatar */}
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-profession-circle/100/avatar_profession_traveler_traveling-1024.png"
                alt="Profile Avatar"
                className="profile-avatar"
              />

              {/* User Details */}
              <h2 className="profile-title">Hi, {user.userName}!</h2>
              <p className="profile-email">{user.email}</p>

              {/* Logout Button */}
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Prompt to Login */}
              <h2 className="profile-title">Please log in</h2>
              <button onClick={() => navigate('/loginpage')} className="login-btn">
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;