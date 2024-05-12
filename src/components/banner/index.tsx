'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './index.scss';
import Link from 'next/link';
import { IBanner } from '@/types/banner';
import { API_ROOT } from '@/constant';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 400,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

type IProps = {
  banners: IBanner[];
};
const Banner = ({ banners }: IProps) => {
  return (
    <div className="banner">
      <Slider {...settings}>
        {banners?.map((banner, index) => (
            <div className="outline-none" key={index}>
              <Link href={'/'+banner.url}>
                <Image
                  src={`${API_ROOT}/images/banner/${banner.image}`}
                  width={2400}
                  height={500}
                  alt="banner"
                  priority={true}
                />
              </Link>
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
