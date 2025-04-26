"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";

const images = [
  "/images/home/hero2.jpg",
  "/images/home/hero3.jpg",
  "/images/home/hero4.jpg",
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index}`} className={styles.sliderImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
