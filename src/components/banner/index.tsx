'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import './index.scss';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => {
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="outline-none">
          <Image
            src="/assets/images/banner/BG.png"
            width={2400}
            height={500}
            alt="banner"
            priority={true}
          />
        </div>
        <div className="outline-none">
          <Image
            src="/assets/images/banner/BG.png"
            width={2400}
            height={500}
            alt="banner"
            priority={true}
          />
        </div>
        <div className="outline-none">
          <Image
            src="/assets/images/banner/BG.png"
            width={2400}
            height={500}
            alt="banner"
            priority={true}
          />
        </div>
        <div className="outline-none">
          <Image
            src="/assets/images/banner/BG.png"
            width={2400}
            height={500}
            alt="banner"
            priority={true}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
