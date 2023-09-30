'use client';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
const ZoomImage = dynamic(() => import('@/components/zoom-image'));
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import Image from 'next/image';
import StarRatings from 'react-star-ratings';
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
import { productsData } from '@/static/products';
import ReviewCard from '@/components/review-card';
import FormGroup from '@/components/fromgroup';
import TextAreaGroup from '@/components/textarea';
const ProductCard = dynamic(() => import('@/components/card'));

function PageDetails() {
  const [quantity, setQuantity] = useState<number>(1);
  const [viewImage, setViewImag] = useState<string>(
    '/assets/images/products/product.png'
  );
  const [rating, setRating] = useState(0);

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
            <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
              <Link href={'/'}>Home</Link>
              <RiArrowDropRightLine className=" text-xl" />
              <Link href={'/category/bathware'}> Bathware </Link>
              <RiArrowDropRightLine className=" text-xl" />
              <Link href={'/subcagory/Commode'}> Commode </Link>
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
                <h2 className=" font-gotham font-medium text-xl text-black ">
                  Gazi Smiss Commode | SH-285GL
                </h2>
                <div className="flex items-center text-primary font-gotham">
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
                    <h2 className="font-gotham font-normal text-xl  line-through r-price">
                      ৳25,200.00
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <h3 className=" font-gotham font-normal text-xs text-black mr-3">
                      Discount Price:
                    </h3>
                    <div className="flex">
                      <h2 className="font-gotham  text-2xl text-primary font-medium d-price">
                        ৳25,200.00
                      </h2>
                      <div>
                        <span className="discount">Save ৳2,520</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="emi">
                  <Link href={'/'}>
                    <h3 className=" font-gotham font-medium text-sm text-primary py-2">
                      Avail Bank EMI | EMI From 1,890 Tk/month
                    </h3>
                  </Link>
                </div>
                <div className="action">
                  <div className="flex py-3 font-gotham font-medium ">
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
                    <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                      <span>
                        <AiOutlineHeart className="mr-1 " />
                      </span>
                      Wishlist
                    </OutlineButton>
                    <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                      <span>
                        <BsArrowRepeat className="mr-1 " />
                      </span>
                      Add to Compare
                    </OutlineButton>
                    <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                      <span>
                        <AiOutlineShareAlt />
                      </span>
                      Share
                    </OutlineButton>
                  </div>
                </div>

                <div className="services py-3">
                  <div className="flex items-center mb-3">
                    <div className=" w-8">
                      <Image
                        className="w-full"
                        src={'/assets/images/service/service1.png'}
                        width={40}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-medium text-bold text-base text-primary">
                        Cash on Delivery
                      </h3>
                      <h4 className=" font-gotham font-medium text-bold text-xs text-black">
                        Installation Service
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className=" w-8">
                      <Image
                        className="w-full"
                        src={'/assets/images/service/service2.png'}
                        width={40}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-medium text-bold text-base text-primary">
                        Free Home Delivery
                      </h3>
                      <h4 className=" font-gotham font-medium text-bold text-xs text-black">
                        3 - 7 Working Days
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className=" w-8">
                      <Image
                        className="w-full"
                        src={'/assets/images/service/service4.png'}
                        width={40}
                        height={40}
                        alt="service"
                      />
                    </div>
                    <div className="details ml-2">
                      <h3 className=" font-gotham font-medium text-bold text-base text-primary">
                        Contact Us
                      </h3>
                      <h4 className=" font-gotham font-medium text-bold text-xs text-black">
                        8801766688840
                      </h4>
                    </div>
                  </div>
                </div>

                <OutlineButton className="flex items-center font-gotham font-medium text-primary text-xs">
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
                <TabList className={`react-tabs__tab-list`}>
                  <Tab>Specification</Tab>
                  <Tab>Reviews</Tab>
                  <Tab>Video</Tab>
                  <Tab>Question</Tab>
                </TabList>

                <div className="tab-panel">
                  <TabPanel>
                    <div className="specification">
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
                    <div className="review">
                      <div className="grid grid-cols-2 gap-10">
                        <div>
                          {[...Array(4)].map((review, index) => (
                            <ReviewCard key={index} />
                          ))}
                        </div>
                        {/* Review Form */}
                        <div>
                          <h2 className=" font-gotham font-semibold text-lg text-black">
                            BE THE FIRST TO REVIEW
                          </h2>
                          <p className=" font-gotham font-normal text-xs text-black mt-4">
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                          <div className="flex items-center mt-9 mb-5">
                            <p className="font-gotham font-normal text-xs text-black">
                              Your rating *
                            </p>
                            <div className="ml-2 mb-1">
                              <StarRatings
                                rating={rating}
                                starRatedColor="#164194"
                                changeRating={(newRating) =>
                                  setRating(newRating)
                                }
                                numberOfStars={5}
                                name="rating"
                                starDimension="15px" // Adjust the star size as needed
                                starSpacing="5px" // Adjust the spacing between stars as needed
                                starHoverColor="red"
                              />
                            </div>
                          </div>
                          <form>
                            <TextAreaGroup title="Your review *" required />
                            <FormGroup title="First Name *" required />
                            <FormGroup title="Email *" required />
                            <div className="flex items-center mt-1">
                              <div className="mr-2">
                                <input
                                  type="checkbox"
                                  name="d"
                                  id="d"
                                  required
                                />
                              </div>
                              <p className=" font-gotham font-normal text-xs  text-black">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </p>
                            </div>

                            <Button
                              type="submit"
                              className="my-4 px-10 py-1 font-gotham font-medium text-sm hover:bg-[#2456b5]"
                            >
                              Submit
                            </Button>
                          </form>
                        </div>
                      </div>
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
                    <form>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <FormGroup title="Phone Number *" required />
                          <TextAreaGroup title="Your review *" required />
                          <Button className=" font-gotham font-normal px-2 py-1 text-sm">
                            Submit
                          </Button>
                        </div>
                      </div>
                    </form>
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
