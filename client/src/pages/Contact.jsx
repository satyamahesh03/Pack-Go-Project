import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Message submitted successfully! 🎉");
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill in the form below.</p>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>📍 Address:</strong> MVGR College Of Engineering, Chinthalavalsa, Vizianagaram, AP, India</p>
        <p><strong>📞 Phone:</strong> +91 99998 99998</p>
        <p><strong>📧 Email:</strong> packandngo.booking@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
