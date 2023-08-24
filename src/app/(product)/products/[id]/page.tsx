'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
const ZoomImage = dynamic(() => import('@/components/zoom-image'));
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import Image from 'next/image';
import './page.scss';
import StarRating from '@/components/rating';

function PageDetails() {
  const [viewImage, setViewImag] = useState<string>(
    'https://i.ibb.co/gPzcHH1/product.png'
  );

  const handleViewImage = (url: string) => {
    setViewImag(url);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    prevArrow: <IoIosArrowBack className="text-lg" />,
    nextArrow: <IoIosArrowForward />,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="product-details">
      <div className="container">
        <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
          <Link href={'/'}>Home</Link>
          <RiArrowDropRightLine className=" text-xl" />
          <Link href={'/bathware'}> Bathware </Link>
          <RiArrowDropRightLine className=" text-xl" />
          <Link href={'/Commode'}> Commode </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="view-image">
              <ZoomImage image={viewImage} />
            </div>
            <div className="px-5 mt-5 products">
              <Slider {...settings}>
                {[...Array(10)].map((productImage, index) => (
                  <div
                    key={index + 1}
                    className="mx-1 product-item"
                    onClick={() =>
                      handleViewImage('/assets/images/products/product.png')
                    }
                  >
                    <Image
                      className=" w-full cursor-pointer"
                      src={viewImage}
                      alt="product"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div>
            <h2 className=" font-gotham font-bold text-xl text-black ">
              Gazi Smiss Commode | SH-285GL
            </h2>
            <div className="flex items-center text-primary font-gotham mt-1">
              <div className=" ml-2 flex items-center">
                <StarRating rating={3.5} />
                <span className="ml-1"> Review</span>
              </div>
            </div>
            <div className="price-area py-2 mt-2">
              <div className="flex items-center">
                <h3 className=" font-gotham font-normal text-xs text-black mr-3">
                  Regular Price:
                </h3>
                <h2 className="font-gotham font-normal text-2xl  line-through r-price">
                  ৳25,200.00
                </h2>
              </div>
              <div className="flex items-center">
                <h3 className=" font-gotham font-normal text-xs text-black mr-3">
                  Regular Price:
                </h3>
                <h2 className="font-gotham font-normal text-2xl text-black">
                  ৳25,200.00
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageDetails;
