import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container, Typography } from "@mui/material";
import "./ReviewsSlider.css";
import Rating from "react-rating";

const ReviewsSlide = () => {
  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch("https://blooming-scrubland-74816.herokuapp.com/usersReview")
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom component="div" color="secondary">
        Customers Review
      </Typography>
      <Slider {...sliderSettings}>
        {myReviews.map((review) => (
          <div key={review._id} className="slider-box">
            <div className="slider-img-box">
              <img src={review.img} alt="" className="slider-img" />
            </div>
            <h1>{review.name}</h1>
            <p>{review.review}</p>
            <Rating
              readonly
              style={{color: "orange"}}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              initialRating={review.rating}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ReviewsSlide;
