import React, { useState } from "react";
import "./Signup.css";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstname: firstName,
      email: email,
      password: password
    };

    try {
      const response = await fetch("http://localhost:5555/API/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Succesfully signed up!");
        navigate("/login");

      } else {
        console.log(formData)
        console.error("Couldn't sign up.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <div className="gen-container-signup">
        <div className="activ-container-signup">
          <div className="left-signup">
            <div className="header-and-blanks-signup">
              <div className="create-acc-cont-signup">
                <h2>Sign Up</h2>
              </div>
              <div className="input-cont-signup">
                <p className="infos-signup">First Name*</p>
                <input 
                  className="inputs-signup"
                  type="text" 
                  placeholder="Enter your first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>

              <div className="input-cont-signup">
                <p className="infos-signup">Email*</p>
                <input
                  className="inputs-signup"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-cont-signup">
                <p className="infos-signup">Password*</p>
                <input
                  className="inputs-signup"
                  type="password"
                  placeholder="Create a password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className="must-be-signup">Must be at least 8 characters.</p>
              </div>
              <div className="create-account-submit-signup">
                <button onClick={handleSubmit} className="submit-button-signup">SIGN UP</button>
              </div>
              <div className="already-have-account-signup">
                <span>Already have an account?</span> {/* Corrected the text */}
                <NavLink className="navlink-to-signup" to="/login">
                  Sign In {/* Corrected the link text */}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="right-signup">
            <div className="glass-cont-signup">
              <div className="glass-cont-header">
                <h2>Welcome to LearnCorner!</h2>
              </div>

              <div className="ps-signup-cont">
                <div className="ps-signup">
                <p>Your German journey is about to start.</p>
                  <p>
                    Rest assured, we're here to support you every step of the
                    way with top-notch, perfectly tailored lessons!
                  </p>
                </div>
                <div className="insta-signup">
                  <div className="insta-signup-span">
                    <FaInstagram size={25} /> <span>learncorner</span>
                  </div>
                  <div className="insta-signup-span">
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