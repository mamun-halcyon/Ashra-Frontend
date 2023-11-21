'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './index.scss';
import Link from 'next/link';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = ({ banners }) => {
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="outline-none">
          <Link href={'/category/some'}>
            <Image
              src="/assets/images/banner/BG.png"
              width={2400}
              height={500}
              alt="banner"
              priority={true}
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
