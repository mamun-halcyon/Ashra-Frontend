'use client';
import { useState, useEffect } from 'react';
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
import { BsArrowRepeat, BsAwardFill } from 'react-icons/bs';
import Title from '@/components/title';
import { productsData } from '@/static/products';
import ReviewCard from '@/components/review-card';
import FormGroup from '@/components/fromgroup';
import TextAreaGroup from '@/components/textarea';
import { FaAward } from 'react-icons/fa6';
import EmiPopup from '@/components/emi-popup';
import { IProduct, ISingleProduct } from '@/types/product';
import { API_ROOT, API_URL } from '@/constant';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useRouter } from 'next/navigation';
import { ICartItem } from '@/types/cart';
import { data } from 'autoprefixer';
const ProductCard = dynamic(() => import('@/components/card'));

type Props = {
  params: {
    slug: string;
  };
};

async function getProduct(slug: string) {
  const res = await fetch(`${API_URL}/frontend/products/${slug} `);
  const data = await res.json();
  return data;
}

function PageDetails({ params: { slug } }: Props) {
  const router = useRouter();
  const [product, setProduct] = useState<ISingleProduct | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [viewImage, setViewImag] = useState<string>(
    product?.productPhotos[0]?.image as string
  );
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const [isEmi, setIsEmi] = useState(false);

  const handleEmi = () => setIsEmi(!isEmi);

  const handleViewImage = (url: string) => {
    setViewImag(url);
  };

  const increment = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push('/cart');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(slug);
        setProduct(data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]);

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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!product) {
    return <div className="py-5 container">Loading...</div>;
  }

  return (
    <>
      {product && (
        <section>
          <div className="product-details overflow-hidden">
            <div className="container px-2 md:px-1">
              <div className="product-specification">
                <div className=" hidden md:flex items-center font-gotham font-normal text-sm mt-3 mb-3">
                  <Link href={'/'}>Home</Link>
                  <RiArrowDropRightLine className=" text-xl" />
                  <Link href={'/category/bathware'}> Bathware </Link>
                  <RiArrowDropRightLine className=" text-xl" />
                  <Link href={'/subcagory/Commode'}> Commode </Link>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <div className="view-image mt-3 md:mt-0 overflow-hidden">
                      <ZoomImage
                        image={
                          viewImage
                            ? `${API_ROOT}/images/product/${viewImage}`
                            : `${API_ROOT}/images/product/${product.productPhotos[0]?.image}`
                        }
                      />
                    </div>
                    <div className="px-5 mt-5 products">
                      <Slider {...settings}>
                        {product.productPhotos.map((productImage, index) => (
                          <div
                            key={index + 1}
                            className="mx-1 product-item"
                            onClick={() => handleViewImage(productImage.image)}
                          >
                            <Image
                              className=" w-full cursor-pointer"
                              src={`${API_ROOT}/images/product/${productImage.image}`}
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
                    <h2 className=" font-gotham font-medium text-xl text-black mb-1 hover:text-hoverColor transition-all">
                      {product?.product?.title}
                    </h2>
                    <div className="flex items-center text-primary font-gotham">
                      <div className="flex items-center">
                        <StarRating rating={product?.review?.length} />
                        <span className="ml-1 font-gotham text-xs">
                          {' '}
                          Review
                        </span>
                      </div>
                    </div>

                    <div className="price-area py-3 mt-2">
                      <div className="flex items-center">
                        <h3 className=" font-gotham font-normal text-xs text-black mr-3">
                          Regular Price:
                        </h3>
                        <h2 className="font-gotham font-normal text-xl  line-through r-price">
                          ৳{product?.product?.regular_price}
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <h3 className=" font-gotham font-normal text-xs text-black mr-3">
                          Discount Price:
                        </h3>
                        <div className="flex">
                          <h2 className="font-gotham  text-2xl text-primary font-medium d-price">
                            ৳{product?.product?.discount_price}
                          </h2>
                          <div>
                            <span className="discount">
                              Save ৳
                              {product.product.regular_price -
                                product.product.discount_price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="emi">
                      <h3 className=" font-gotham font-medium text-sm text-primary py-3 cursor-pointer">
                        <span
                          className="cursor-point"
                          onClick={() => setIsEmi(true)}
                        >
                          Avail Bank EMI |
                        </span>
                        <Link href={'/'}> EMI From 1,890 Tk/month</Link>
                      </h3>
                    </div>
                    <div className="action">
                      <div className="flex py-5 font-gotham font-medium ">
                        <div className="mr-2 flex items-center text-primary border ">
                          <div
                            className="quantity cursor-pointer hover:text-white hover:bg-primary "
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
                            className="quantity cursor-pointer  hover:text-white hover:bg-primary"
                            onClick={increment}
                          >
                            <button>
                              <AiOutlinePlus />
                            </button>
                          </div>
                        </div>
                        <Button
                          className=" px-5 py-1 mr-2"
                          onClick={() =>
                            handleBuyNow({
                              product_id: Number(product.product.id),
                              price: product.product.discount_price,
                              title: product.product.title,
                              image: product.product.image,
                              quantity: quantity,
                            })
                          }
                        >
                          Buy Now
                        </Button>
                        <Button
                          className=" px-5 py-1"
                          onClick={() =>
                            dispatch(
                              addToCart({
                                product_id: Number(product.product.id),
                                price: product.product.discount_price,
                                title: product.product.title,
                                image: product.product.image,
                                quantity: quantity,
                              })
                            )
                          }
                        >
                          Add to cart
                        </Button>
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
                            <AiOutlineShareAlt className="mr-1 " />
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

                    <OutlineButton className="flex items-center font-gotham font-medium text-primary text-xs py-1">
                      <span className="mr-2">
                        {/* <BsAwardFill /> */}
                        <FaAward className="award" />
                        {/*   <Image
                      src={
                        '/assets/images/icon/7 Days Replacement & 12 Month Free Service Icon.svg'
                      }
                      width={20}
                      height={20}
                      alt="icon"
                    /> */}
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
                      <Tab>Policy</Tab>
                      <Tab>Reviews</Tab>
                      <Tab>Video</Tab>
                      <Tab>Question</Tab>
                    </TabList>

                    <div className="tab-panel">
                      <TabPanel>
                        <div
                          className="specification"
                          dangerouslySetInnerHTML={{
                            __html: product?.product?.description,
                          }}
                        />
                      </TabPanel>
                      <TabPanel>
                        <div
                          className="specification"
                          dangerouslySetInnerHTML={{
                            __html: product?.product?.policy,
                          }}
                        />
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
                                Your email address will not be published.
                                Required fields are marked *
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
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
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
                        {product.product.video_url && (
                          <iframe
                            className=" w-full"
                            height="700px"
                            src={product.product.video_url}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        )}
                      </TabPanel>
                      <TabPanel>
                        <form>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <FormGroup title="Your Number *" required />
                              <TextAreaGroup title="Ask Question *" required />
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
                <div className="grid md:grid-cols-5 grid-cols-2">
                  {product.relatedProduct.map((product, i) => (
                    <ProductCard
                      key={i}
                      url={product.slug}
                      image={product.image}
                      title={product.title}
                      regular_price={product.regular_price}
                      discount_price={product.discount_price}
                      isNew={product.is_new}
                      product_id={Number(product.id)}
                    />
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
      )}
      {isEmi && (
        <EmiPopup
          handleEmi={handleEmi}
          price={product.product.discount_price}
        />
      )}
    </>
  );
}

export default PageDetails;
