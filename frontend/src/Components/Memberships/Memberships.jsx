import React from "react";
import "./Memberships.css";

import { GiSmallFire } from "react-icons/gi";
import { GiCompass } from "react-icons/gi";
import { PiSunHorizonBold } from "react-icons/pi";
import { FaHourglassHalf } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { GiInfinity } from "react-icons/gi";

export default function () {
  return (
    <div>
      <div className="gen-container-member">
        <div className="activ-container-member">
          <div className="left-member">
            <div className="header-left-member">
              <h2>What is a membership?</h2>
            </div>
            <div className="text-left-member">
            <p>
                Welcome to our website! The high-quality content we provide
                requires a significant amount of time, resources, and effort to
                create. Additionally, maintaining and operating our website to
                ensure a smooth experience for our users involves ongoing costs.
                For these reasons, we have implemented a membership system.
              </p>

              <p>
                Without a membership,
                <span className="decoration">
                  visitors can only access up to two pieces of content per week
                </span>
                . To unlock unlimited access and enjoy all that we have to
                offer, a membership is required. Our membership plans start with
                a 1-month option and extend up to a full year. Opting for longer
                membership periods is more cost-effective, offering better value
                for your investment. That's why we also have an option for
                lifetime.
              </p>

              <p>
                By becoming a member, you not only support the continued
                creation of premium content but also gain full access to our
                entire library, ensuring you don’t miss out on anything.
              </p>
            </div>
          </div>
          <div className="right-member">
          <div className="first-3-circles">
              <div className="circle-bronze">
                <div className="circ">
                  <p> 1 Month - 7$ </p>
                  <GiSmallFire size={40} />
                  <p>"Start the fire"</p>
                  <button className="button">Become Member</button>{" "}
                </div>
              </div>
              <div className="circle-bronze">
                <div className="circ">
                  <p> 2 Months - 11$ </p>
                  <GiCompass size={40} />
                  <p>"Small Discovery Trip"</p>
                  <button className="button">Become Member</button>{" "}
                </div>
              </div>
              <div className="circle-bronze">
                <div className="circ">
                  <p> 3 Months - 15$ </p>
                  <PiSunHorizonBold size={40} />
                  <p>"Summer Breeze"</p>
                  <button className="button">Become Member</button>{" "}
                </div>
              </div>
            </div>
            <div className="two-circles">
              <div className="circle-silver">
                <div className="circ">
                  <p> 6 Months - 25$ </p>
                  <FaHourglassHalf size={35} />
                  <p>"Half a Year, Half the Luck"</p>
                  <button className="button">Become Member</button>{" "}
                </div>
              </div>
              <div className="circle-silver">
                <div className="circ">
                  <p> 1 Year - 40$ </p>
                  <FaWandMagicSparkles size={35} />
                  <p>"A Year of Wonders" </p>
                  <button className="button">Become Member</button>{" "}
                </div>
              </div>
              <div className="circle-gold">
                <div className="circ">
                  <p> Timeless - 100$ </p>
                  <GiInfinity size={40} />

                  <p>"Forever Wonder"</p>

                  <button className="button">Become Member</button>
                </div>
              </div>
            </div>
            <div className="last-circle">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
