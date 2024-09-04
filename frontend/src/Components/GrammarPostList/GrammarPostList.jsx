import React, { useEffect, useState } from "react";
import "./GrammarPostList.css";
import { FaCircle } from "react-icons/fa";
import ReactCardFlip from "react-card-flip";
import { GiBookAura } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiShakingHands } from "react-icons/gi";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function GrammarPostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFlippedA1, setIsFlippedA1] = useState(false);
  const [isFlippedA2, setIsFlippedA2] = useState(false);
  const [isFlippedB1, setIsFlippedB1] = useState(false);
  const [isFlippedB2, setIsFlippedB2] = useState(false);

  function flipCardA1() {
    setIsFlippedA1(!isFlippedA1);
  }
  function flipCardA2() {
    setIsFlippedA2(!isFlippedA2);
  }
  function flipCardB1() {
    setIsFlippedB1(!isFlippedB1);
  }
  function flipCardB2() {
    setIsFlippedB2(!isFlippedB2);
  }

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
    <>
      <div className="gen">
        <div className="info-text-container">
          <div className="info-text-titel-cont">
            <h2 className="info-text-titel">German Proficiency Levels</h2>
          </div>
          <div className="info-text-text-ex-cont">
            <p className="info-text">
              Knowing your German proficiency level and working accordingly is
              crucial for effective learning. German proficiency levels, ranging
              from A1 to B2, are designed to measure your skills in the
              language. Starting from the basics in A1 and progressing to more
              complex topics in B2, you can clearly track how your command of
              the language improves over time. Each level introduces specific
              grammar concepts and practical skills, helping you build a strong
              foundation and gradually move towards fluency.
            </p>
            <p className="info-text2">Click on the cards and find out the topics!</p>
          </div>
          <div className="card-container">
            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedA1}>
              <div onClick={flipCardA1} className="card-front">
                <div className="levels-and-icons">
                  <p className="levels">A1</p>
                  <GiBookAura size={45} className="level-icons" />
                </div>
                <div className="text-a1">
                  <h4>Just started learning German? </h4>
                  <p className="">
                    Discover the basic topics right away. This is the perfect
                    place to learn how to introduce yourself, engage in simple
                    conversations, and master everyday expressions."
                  </p>
                </div>
              </div>

              <div  className="card-back">
                <div className="a1topicscontainer">
                  <div className="a1topicslist">
                    {posts
                      .filter((post) => post.category === "A1 THEMA CAT")
                      .map((post) => (
                        <div key={post.id} className="a1topic">
                          <FaCircle className="circles" />
                          <NavLink className='navlink-to-post-details' to={`/posts/${post.id}`}>
                            {post.titel}
                            </NavLink>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedA2}>
              <div onClick={flipCardA2} className="card-front">
                <div className="levels-and-icons">
                  <p className="levels">A2</p>
                  <TfiRulerPencil size={40} className="level-icons" />
                </div>
                <div className="text-a2">
                  <h4>You’ve mastered the basics of German grammar</h4>
                  <p>
                    Now it’s time to dive deeper. Learn new phrases for everyday
                    situations and start expressing yourself more fluently."
                  </p>
                </div>
              </div>

              <div className="card-back">
                <div className="a2topicscontainer">
                  <div className="a2topicslist">
                    {posts
                      .filter((post) => post.category === "A2 THEMA CAT")
                      .map((post) => (
                        <div key={post.id} className="a2topic">
                          <FaCircle className="circles" />
                          <NavLink to={`/posts/${post.id}`}>
                            {post.titel}
                            </NavLink>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedB1}>
              <div onClick={flipCardB1} className="card-front">
                <div className="levels-and-icons">
                  <p className="levels">B1</p>
                  <GiShakingHands size={45} className="level-icons" />
                </div>
                <div className="text-b1">
                  <h4>
                    You’ve developed your German skills, and now you’re ready
                    for more complex topics
                  </h4>
                  <p>
                    You can express your ideas in more depth and participate in
                    a wider range of conversations.
                  </p>
                </div>
              </div>

              <div  className="card-back">
                <div className="b1topicscontainer">
                  <div className="b1topicslist">
                    {posts
                      .filter((post) => post.category === "B1 THEMA CAT")
                      .map((post) => (
                        <div key={post.id} className="b1topic">
                          <FaCircle className="circles" />
                          <NavLink to={`/posts/${post.id}`}>
                            {post.titel}
                            </NavLink>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </ReactCardFlip>

            <ReactCardFlip flipDirection="horizontal" isFlipped={isFlippedB2}>
              <div onClick={flipCardB2} className="card-front">
                <div className="levels-and-icons">
                  <p className="levels">B2</p>
                  <AiOutlineGlobal size={45} className="level-icons" />
                </div>
                <div className="text-b2">
                  <h4>
                    You’ve reached an advanced level in German and can now speak
                    fluently
                  </h4>
                  <p>
                    You’re able to understand complex texts, present arguments,
                    and engage in deep discussions on various topics.
                  </p>
                </div>
              </div>

              <div  className="card-back">
                <div className="b2topicscontainer">
                  <div className="b2topicslist">
                    {posts
                      .filter((post) => post.category === "B2 THEMA CAT")
                      .map((post) => (
                        <div key={post.id} className="b2topic">
                          <FaCircle className="circles" />
                          <NavLink to={`/posts/${post.id}`}>
                            {post.titel}
                            </NavLink>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </>
  );
}
