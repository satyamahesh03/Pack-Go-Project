
import React, { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css"; // Import CSS for styling
import { AppContext } from "../Context/AppContext";
import Loading from "../Loading"; // Import Loading Component

const AuthForm = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData, token, setToken } = useContext(AppContext);

  const handleLoginClick = () => setIsLoginActive(true);
  const handleSignupClick = () => setIsLoginActive(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:6500/api/register",
        {
          userName: name,
          email,
          password,
        },
        {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      toast.success("Account created successfully! Please log in.");
    } catch (error) {
      toast.error("Signup failed. Try again!");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      const response = await axios.post("http://localhost:6500/api/login", {
        email,
        password,
      });

      setUserData(response.data);
      localStorage.setItem("token", JSON.stringify(response.data.user.token));

      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Check credentials!");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <form>
      {isLoading && <Loading />} {/* Show loading spinner when loading */}

      <div className="parent">
        <div className="form-structor">
          {/* Signup Section */}
          <div className={`signup ${isLoginActive ? "slide-up" : ""}`}>
            <h2 className="form-title" id="signup" onClick={handleSignupClick}>
              <span>or</span>Sign up
            </h2>
            <div className="form-holder">
              <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className="submit-btn" onClick={handleSignup}>Sign up</button>
          </div>

          {/* Login Section */}
          <div className={`login ${isLoginActive ? "" : "slide-up"}`}>
            <div className="center">
              <h2 className="form-title" id="login" onClick={handleLoginClick}>
                <span>or</span>Log in
              </h2>
              <div className="form-holder">
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="submit-btn" onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </form>
  );
};

export default AuthForm;
