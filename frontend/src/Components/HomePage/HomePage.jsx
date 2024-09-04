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
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [loadingTwo, setLoadingTwo] = useState(true);

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

  const fetchProducts = async () => {
    try {
      const result = await fetch("http://localhost:5555/API/products");
      const fetchedPros = await result.json();
      setFetchedProducts(fetchedPros);
      setLoadingTwo(false);
      console.log(fetchedPros);
    } catch (error) {
      console.log(error);
      setLoadingTwo(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchProducts();
  }, []);

  if (loading || loadingTwo) {
    return <div className="loading">Loading...</div>;
  }

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
                depth: 60,
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
                    <div className="button-cont-post">
                      <NavLink key={post.id} className="detail-button" to={`/posts/${post.id}`}>
                        <button className="detail-button">
                          See Post Details
                        </button>
                      </NavLink>
                    </div>
                    <div className="like-comment">
                      <div className="likebuttonandp">
                        <AiFillLike size={20} className="icons" />
                        <p className="amount">0</p>
                      </div>
                      <div className="commentbuttonandp">
                        <FaComment size={20} className="icons" />
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
            <div className="director-topiclists-header">
              <h2 className="director-topiclists-header-element">
                What is your level of proficiency?{" "}
              </h2>
            </div>
            <div className="icons-in-director">
              <div className="icon-and-level">
                <GiBookAura size={40} className="level-icons" />
                <span className="level-info">Beginner</span>
              </div>
              <div className="icon-and-level">
                <TfiRulerPencil size={40} className="level-icons" />
                <span className="level-info">Elementary</span>
              </div>
              <div className="icon-and-level">
                <GiShakingHands size={40} className="level-icons" />
                <span className="level-info">Intermediate</span>
              </div>
              <div className="icon-and-level">
                <AiOutlineGlobal size={40} className="level-icons" />
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
          <div className="idioms-container">
            <h2 className="redewendungen-header">Idioms (Redewendungen)</h2>
            <p className="redewendungen">
              Imagining speaking a language without idioms is impossible. If
              you've mastered the basics of grammar, it's the perfect time to
              start looking into idioms!
            </p>
            <div className="director-click-idioms-cont">
              <NavLink className="director-click-idioms" to="/grammarpostlist">
                <span className="click-here-idioms">Start with idioms!</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="shopping-exercises-cont">
        <div className="shopping-cont">
          <div className="something">
            <h2 className="something-header">Shopping</h2>
            <p>
              Reading books for adults or kids, exercise books and many other
              options are in our shop.
            </p>

            <NavLink className="director-click-shopping" to="/shoppingpage">
              <span className="click-here-shopping">Go to Shopping Page!</span>
            </NavLink>
          </div>
          <div className="shopping-items-cont">
            {fetchedProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="product-mapped">
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
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
            <NavLink className="director-exercises-click" to="/exercises">
              <span className="click-here-exercises">
                Start with the exercises!
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
