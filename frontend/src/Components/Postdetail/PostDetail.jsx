import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";

export default function Postdetail() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5555/API/posts/${id}`);
      const data = await response.json();
      if (data.message === "Post found") {
        setPosts([data.postInfo]);
        console.log(data);
      } else {
        console.error("Post not found");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="gen-con-postdetail">
      {posts.map((post) => (
        <div className="post-container-postdetail" key={post.id}>
          <div className="postdetail-header-cont">
            <h2 className="post-header-postdetail">{post.titel}</h2>
          </div>
          <div className="postdetail-content-cont">
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </div>
          <div className="quizpart"></div>
        </div>
        
      ))}
    </div>
  );
}
