'use client';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
const ZoomImage = dynamic(() => import('@/components/zoom-image'));
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import Image from 'next/image';
import './page.scss';
import StarRating from '@/components/rating';
import Button from '@/components/button';
import {
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import OutlineButton from '@/components/outline-button';
import { BsArrowRepeat } from 'react-icons/bs';
import Title from '@/components/title';
import ProductCard from '@/components/card';
import { productsData } from '@/static/products';

function PageDetails() {
  const [quantity, setQuantity] = useState<number>(1);
  const [viewImage, setViewImag] = useState<string>(
    '/assets/images/products/product.png'
  );

  const handleViewImage = (url: string) => {
    setViewImag(url);
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    prevArrow: <IoIosArrowBack className="text-base" />,
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
    <section>
      <div className="product-details">
        <div className="container">
          <div className="product-specification">
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
                    <StarRating rating={2.5} />
                    <span className="ml-1 font-gotham text-xs"> Review</span>
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
                      Discount Price:
                    </h3>
                    <h2 className="font-gotham  text-2xl text-primary font-bold">
                      ৳25,200.00
                    </h2>
                  </div>
                </div>
                <div className="emi">
                  <Link href={'/'}>
                    <h3 className=" font-gotham font-bold text-base text-primary py-3">
                      Avail Bank EMI | EMI From 1,890 Tk/month
                    </h3>
                  </Link>
                </div>
                <div className="action">
                  <div className="flex py-5 font-gotham font-medium ">
                    <div className="mr-2 flex items-center text-primary border">
                      <div
                        className="quantity cursor-pointer"
                        onClick={decrement}
                      >
                        <button>
                          <AiOutlineMinus />
                        </button>
                      </div>
                      <div className="quantity border-x-[1px] border-x-primary">
                        {quantity}
                      </div>
                      <div
                        className="quantity cursor-pointer"
                        onClick={increment}
                      >
                        <button>
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <Button className=" px-6 py-1 mr-2">Buy Now</Button>
                    <Button className=" px-6 py-1">Add to cart</Button>
                  </div>
                </div>

                <div className="more-action">
                  <div className="flex">
                    <OutlineButton className="flex items-center font-gotham font-bold text-primary mr-2">
                      <span>
                        <AiOutlineHeart className="mr-1 " />
                      </span>
                      Wishlist
                    </OutlineButton>
                    <OutlineButton className="flex items-center font-gotham font-bold text-primary mr-2">
                      <span>
                        <BsArrowRepeat className="mr-1 " />
                      </span>
                      Add to Compare
                    </OutlineButton>
                    <OutlineButton className="flex items-center font-gotham font-bold text-primary mr-2">
                      <span>
                        <AiOutlineShareAlt />
                      </span>
                      Share
                    </OutlineButton>
                  </div>
                </div>

                <div className="services py-5">
                  <div className="flex items-center mb-3">
                    <Image
                      src={'/assets/images/service/service1.png'}
                      width={40}
                      height={40}
                      alt="service"
                    />
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-bold text-bold text-base text-primary">
                        Cash on Delivery
                      </h3>
                      <h4 className=" font-gotham font-bold text-bold text-xs text-black">
                        Installation Service
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Image
                      src={'/assets/images/service/service2.png'}
                      width={40}
                      height={40}
                      alt="service"
                    />
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-bold text-bold text-base text-primary">
                        Free Home Delivery
                      </h3>
                      <h4 className=" font-gotham font-bold text-bold text-xs text-black">
                        3 - 7 Working Days
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <Image
                      src={'/assets/images/service/service4.png'}
                      width={40}
                      height={40}
                      alt="service"
                    />
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-bold text-bold text-base text-primary">
                        Contact Us
                      </h3>
                      <h4 className=" font-gotham font-bold text-bold text-xs text-black">
                        8801766688840
                      </h4>
                    </div>
                  </div>
                </div>

                <OutlineButton className="flex items-center font-gotham font-bold text-primary text-xs">
                  <span className="mr-2">
                    <Image
                      src={
                        '/assets/images/icon/7 Days Replacement & 12 Month Free Service Icon.svg'
                      }
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </span>
                  7 Days Replacement & 12 Month Free Service
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-details">
        <div className="container">
          <div className="description">
            <div className="desc">
              <Tabs>
                <TabList>
                  <Tab>Specification</Tab>
                  <Tab>Reviews</Tab>
                  <Tab>Video</Tab>
                  <Tab>Question</Tab>
                </TabList>

                <div className="tab-panel">
                  <TabPanel>
                    <div>
                      <p>
                        <strong>Model</strong>: SH-285GL
                      </p>
                      <p>
                        <strong>Brand</strong>: Gazi
                      </p>
                      <p>
                        <strong>Material</strong>: Ceramic
                      </p>
                      <p>
                        <strong>Installation Type</strong>: Floor Mounted
                      </p>
                      <p>
                        <strong>Flushing Button Type</strong>: Upper-Pressing
                        Two-end Type
                      </p>
                      <p>
                        <strong>Feature</strong>: Dual-Flush
                      </p>
                      <p>
                        <strong>Drainage Pattern</strong>: S-trap
                      </p>
                      <p>
                        <strong>Siphonic/S-trap</strong>: 12 inch Roughing-in
                      </p>
                      <p>
                        <strong>Design Style</strong>: Modern
                      </p>
                      <p>
                        <strong>Toilet Bowl Shape</strong>: D- Shape&nbsp;
                      </p>
                      <p>
                        <strong>Size</strong>: 27x15.5x29 inch&nbsp;&nbsp;
                      </p>
                      <p>
                        <strong>Cover Plate</strong>: Quality PP Cover &amp; WDI
                        Fittings
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <p>
                        <strong>Model</strong>: SH-285GL
                      </p>
                      <p>
                        <strong>Brand</strong>: Gazi
                      </p>
                      <p>
                        <strong>Material</strong>: Ceramic
                      </p>
                      <p>
                        <strong>Installation Type</strong>: Floor Mounted
                      </p>
                      <p>
                        <strong>Flushing Button Type</strong>: Upper-Pressing
                        Two-end Type
                      </p>
                      <p>
                        <strong>Feature</strong>: Dual-Flush
                      </p>
                      <p>
                        <strong>Drainage Pattern</strong>: S-trap
                      </p>
                      <p>
                        <strong>Siphonic/S-trap</strong>: 12 inch Roughing-in
                      </p>
                      <p>
                        <strong>Design Style</strong>: Modern
                      </p>
                      <p>
                        <strong>Toilet Bowl Shape</strong>: D- Shape&nbsp;
                      </p>
                      <p>
                        <strong>Size</strong>: 27x15.5x29 inch&nbsp;&nbsp;
                      </p>
                      <p>
                        <strong>Cover Plate</strong>: Quality PP Cover &amp; WDI
                        Fittings
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <iframe
                      className=" w-full"
                      height="700px"
                      src="https://www.youtube.com/embed/6FxZnI01JCs?si=EJKq6KG6nCYOFdff"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>

          <div className="related-products mt-12">
            <Title title="Related Products" />
            <div className="grid grid-cols-5">
              {[...productsData].splice(0, 5).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>

          <div className=" pt-7 pb-24">
            <Image
              src={'/assets/images/ads/Group 9.png'}
              alt="ads"
              width={1300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageDetails;
