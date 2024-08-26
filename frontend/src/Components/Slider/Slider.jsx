import React from 'react'

export default function Slider() {
  return (
    <div>
      <div className="swiper-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            
            className="mySwiper"
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
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

        </div>
      
    </div>
  )
}
