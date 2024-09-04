import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AuthContext } from '../AuthProvider'; 


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);


  useEffect(() => {
    
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("http://localhost:5555/API/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true)
        localStorage.setItem('token', data.token); 
        console.log("Successfully logged in!");
        navigate("/"); 
      } else {
        const errorData = await response.json();
        console.error("Couldn't log in:", errorData.message); 
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <div className="gen-container-login">
        <div className="activ-container-login">
          <div className="left-login">
            <div className="header-and-blanks-login">
              <div className="create-acc-cont-login">
                <h2>Sign In</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-cont-login">
                  <p className="infos-login">Email*</p>
                  <input
                    className="inputs-login"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="input-cont-login">
                  <p className="infos-login">Password*</p>
                  <input
                    className="inputs-login"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <p className="must-be-login">Must be at least 8 characters.</p>
                </div>
                <div className="create-account-submit-login">
                  <button type="submit" className="submit-button-login">SIGN IN</button>
                </div>
              </form>

              <div className="already-have-account-login">
                <span>You don't have an account?</span>
                <NavLink className="navlink-to-signup" to="/signup">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
          <div className="right-login">
            <div className="glass-cont-login">
              <div className="glass-cont-header">
                <h2>Welcome to LearnCorner!</h2>
              </div>

              <div className="ps-login-cont">
                <div className="ps-login">
                  <p>Go ahead and sign into your account!</p>
                  <p>
                    Rest assured, we're here to support you every step of the
                    way with top-notch, perfectly tailored lessons!
                  </p>
                </div>
                <div className="insta-login">
                  <div className="insta-login-span">
                    <FaInstagram size={25} /> <span>learncorner</span>
                  </div>
                  <div className="insta-login-span">
                    <MdOutlineMail size={25} />
                    <span>learn.corner@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}