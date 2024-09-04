import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import "./PageLayout.css";
import { FiInstagram } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { AuthContext } from '../AuthProvider'; 

export default function PageLayout() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);


  useEffect(() => {
    
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <>
      <div className="bgbody">
        <header>
          <div className="logo-cont">
            <p className="logo-p">LearnCorner</p>
          </div>
          <div>
            <p className="logo-small-text">"your calm corner to learn german"</p>
          </div>

          <div className="navbar">
            <div>
              <NavLink to="/" className="navlinkleft">
                HOME
              </NavLink>
            </div>
            <div>
              <NavLink to="/grammarpostlist" className="navlinkleft">
                GRAMMAR TOPICS
              </NavLink>
            </div>
            <div>
              <NavLink to="/exercises" className="navlinkleft">
                EXERCISES
              </NavLink>
            </div>
            <div>
              <NavLink to="/shoppingpage" className="navlinkleft">
                SHOPPING
              </NavLink>
            </div>
            <div className="where-logo"></div>
            <div>
              <NavLink to="/memberships" className="navlinkleft">
                MEMBERSHIPS
              </NavLink>
            </div>

            <div className="searchbox">
              <input
                className="sbox"
                type="text"
                placeholder="Search topic or exercise.."
              />
            </div>

            {isLoggedIn ? (
              <>
                <div>
                  <NavLink to="/profile" className="navlinkright">
                    PROFILE
                  </NavLink>
                </div>
                <div>
                  <button onClick={handleLogout} className="logoutbutton">
                    LOG OUT
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <NavLink to="/signup" className="navlinkright">
                    SIGN UP
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/login" className="navlinkright">
                    LOGIN
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <div className="footer">
          <div className="copyright">
            <span>© 2024 LearnCorner, All right are reserved</span>
          </div>
          <div className="begin-footer">
            <p className="get-in-touch">Get in Touch!</p>
            <div className="fellow-cont">
              <span className="fellow">
                If you are a fellow, who is interested in learning german and
                don't know what to do and need some professional help, you can
                contact us through our social media accounts or email.
              </span>
            </div>
          </div>
          <div className="icons-footer">
            <div className="icons-double">
              <FiYoutube size={30} />
              <span>LearnCorner</span>
            </div>
            <div className="icons-double">
              <FiInstagram size={30} />
              <span>learncorner</span>
            </div>
            <div className="icons-double">
              <MdOutlineEmail size={30} />
              <span>learncorner@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}