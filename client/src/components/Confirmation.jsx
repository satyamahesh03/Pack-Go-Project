import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./Confirmation.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [confettiPieces, setConfettiPieces] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfettiPieces((prev) => (prev > 0 ? prev - 20 : 0));
    }, 500); // Reduce confetti gradually

    setTimeout(() => clearInterval(interval), 5000); // Stop decreasing after 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="confirmation-page-container">
      {confettiPieces > 0 && (
        <Confetti numberOfPieces={confettiPieces} className="confetti-blast" />
      )}
      <div className="confirmation-card">
        <h1 className="confirmation-title">🎉 Booking Successful! 🎉</h1>
        <p className="confirmation-message">Enjoy your trip and have a great time!</p>
        <button onClick={() => navigate("/")} className="confirmation-btn">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;