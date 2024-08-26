import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./PageLayout.css";
import logo from '../../assets/logo.png';

export default function PageLayout() {
  return (
    <>
      <div className="bgbody">
        <header>
          <div className="navbar">
              
            <div className="navbar-left">
              <NavLink to="/" className="navlinkleft">
                HOME
              </NavLink>
              <NavLink to="/grammarpostlist" className="navlinkleft">
                GRAMMAR TOPICS
              </NavLink>
              <NavLink to="/exercises" className="navlinkleft">
                EXERCISES
              </NavLink>
              <NavLink to="/shoppingpage" className="navlinkleft">
                SHOPPING
              </NavLink>
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

            <div className="navbar-right">
              <NavLink to="/signup" className="navlinkright">
                SIGN UP
              </NavLink>
              <NavLink to="/login" className="navlinkright">
                LOGIN
              </NavLink>
            </div>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        
      </div>
    </>
  );
}
