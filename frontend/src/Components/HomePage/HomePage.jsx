import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";
import { GiBookAura } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiShakingHands } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { VscChecklist } from "react-icons/vsc";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:5555/API/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="general-con">
      <div className="swiper-info-idioms">
        <div className="swiper-container-header-extra-bg">
          <div className="swiper-and-header">
            <div className="swiper-container-header">
              <h2 className="swiper-container-header-titel">
                Lets dive into some random topic?
              </h2>
              <p className="swiper-container-header-text">
                Start with checking the latest posts...
              </p>
            </div>
            <Swiper
              className="swiper-container"
              spaceBetween={100}
              slidesPerView={3}
              initialSlide={3}
              modules={[Navigation, EffectCoverflow]}
              effect={"coverflow"}
              coverflowEffect={{
                rotate: 0,
                stretch: 20,
                depth: 68,
                modifier: 3,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
            >
              {posts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="post-container">
                    <div className="post-title">
                      <h1 className="titel">{post.titel}</h1>
                    </div>

                    <div className="post-image">
                      <img className="image" src={post.image} alt="img" />
                    </div>

                    <button className="detail-button">See Post Details</button>

                    <div className="like-comment">
                      <div className="likebuttonandp">
                        <AiFillLike className="icons" />
                        <p className="amount">0</p>
                      </div>
                      <div className="commentbuttonandp">
                        <FaComment className="icons" />
                        <p className="amount">0</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="slider-controller">
                <div className="swiper-button-prev">
                  <ion-icon className="caret-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next">
                  <ion-icon className="caret-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="director-and-idioms-container">
          <div className="director-topiclists-container">
            <div className="director-topiclists">
              <div className="director-topiclists-header">
                <h2 className="director-topiclists-header-element">
                  What is your level of proficiency?{" "}
                </h2>
              </div>
              <div className="icons-in-director">
                <div className="icon-and-level">
                  <GiBookAura size={45} className="level-icons" />
                  <span className="level-info">Beginner</span>
                </div>
                <div className="icon-and-level">
                  <TfiRulerPencil size={45} className="level-icons" />
                  <span className="level-info">Elementary</span>
                </div>
                <div className="icon-and-level">
                  <GiShakingHands size={45} className="level-icons" />
                  <span className="level-info">Intermediate</span>
                </div>
                <div className="icon-and-level">
                  <AiOutlineGlobal size={45} className="level-icons" />
                  <span className="level-info">Upper </span>
                  <span className="level-info">Intermediate</span>
                </div>
              </div>
              <div className="director-click-cont">
                <NavLink className="director-click" to="/grammarpostlist">
                  <span className="click-here">Lets see the roadmap!</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="idioms-container">
            <h2>Idioms (Redewendungen)</h2>
            <p>
              Imagining speaking a language without idioms is impossible. If
              you've mastered the basics of grammar, it's the perfect time to
              start looking into idioms!
            </p>
            <NavLink className="director-click" to="/grammarpostlist">
              <span className="click-here">Click here</span>
            </NavLink>{" "}
            <span>to start the journey...</span>
          </div>
        </div>
      </div>
      <div className="exercises-something">
        <div className="something">
          <h2 className="something-header">Shopping</h2>
        </div>
        <div className="director-exercise">
          <div className="director-exercise-header">
            <h2 className="director-exercise-header">Exercises </h2>
          </div>
          <div className="director-exercise-without-header">
            <div className="director-exercise-without-header-span">
              <span className="dewh-span">
                You have finished some topics, or maybe you just would like jump
                into some challenges and now it is time to face the exercises!
              </span>
            </div>

            <div className="multiplechoice-icon-and-def">
              <VscChecklist size={100} />
              <span className="exercise-name">Multiple Choice</span>
            </div>
            <div className="fillintheblanks-icon-and-def">
              <FaWpforms size={70} />
              <span className="exercise-name">Fill in the blanks</span>
            </div>
          </div>

          <div className="director-click-exercises-cont">
            <NavLink className="director-exercises-click" to="/grammarpostlist">
              <span className="click-here-exercises">Start with the exercises!</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
