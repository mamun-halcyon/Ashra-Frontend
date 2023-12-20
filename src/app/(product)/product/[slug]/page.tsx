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
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useRouter } from 'next/navigation';
import { ICartItem } from '@/types/cart';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addToWishList } from '@/redux/features/wish-list/wishListSlice';
import { ICompareItem } from '@/types/compare';
import { addToCompare } from '@/redux/features/compare/compareSlice';
import { IBanner } from '@/types/banner';
import { IService } from '@/types/service';
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
  const { login } = useAppSelector((state) => state.login);
  const { data: compareItems } = useAppSelector((state) => state.compare);
  const router = useRouter();
  const [product, setProduct] = useState<ISingleProduct | null>(null);
  const [adsBanner, setAdsBanner] = useState<IBanner>({} as IBanner);
  const [quantity, setQuantity] = useState<number>(1);
  const [viewImage, setViewImag] = useState<string>(
    product?.productPhotos[0]?.image as string
  );
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [keyPoints, setKeyPoints] = useState<IService[]>([]);
  const [isEmi, setIsEmi] = useState(false);
  const [number, setNumber] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

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

  const fetchProduct = async () => {
    try {
      const data = await getProduct(slug);
      setProduct(data.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };
  const fetchService = async () => {
    try {
      const data = await axios.get(`${API_URL}/frontend/keypoints/product`);
      setKeyPoints(data.data?.data?.rows);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  async function categoryAdBanner() {
    try {
      const data = await axios.get(
        `${API_URL}/banners/${product?.product?.category_slug}`
      );

      setAdsBanner(data.data?.data[0]);
    } catch (error) {
      console.log('category ads banner' + error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    fetchService();
  }, []);

  useEffect(() => {
    categoryAdBanner();
  }, [product?.product?.category_slug]);

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

  const handleSubmitQuestion = async (e: any) => {
    e.preventDefault();
    if (
      number.trim() !== '' &&
      question.trim() !== '' &&
      product?.product?.id &&
      product?.product?.title
    ) {
      try {
        const response = await axios.post(`${API_URL}/product-querys`, {
          product_id: product?.product?.id,
          product_name: product?.product?.title,
          mobile: number.trim(),
          question: question.trim(),
        });
        if (response.status === 201) {
          toast.success(response?.data?.message);
          setNumber('');
          setQuestion('');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addWishList = async (productID: Number) => {
    if (login?.accessToken && login?.user?.id) {
      try {
        const response = await axios.post(`${API_URL}/wishlists`, {
          product_id: productID,
          user_id: login?.user?.id,
        });
        if (response.status == 201) {
          dispatch(
            addToWishList({
              product_id: response.data.data.product_id,
              user_id: response.data.data.user_id,
            })
          );
        } else {
          console.log('Status : ', response.status);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      router.push('/login');
    }
  };

  const addCompare = (data: ICompareItem) => {
    if (compareItems.length < 4) {
      dispatch(addToCompare(data));
    } else {
      toast.error('Maximum items exits');
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      review !== '' &&
      firstName !== '' &&
      email !== '' &&
      product?.product?.id &&
      login?.user?.id &&
      login?.user?.name
    ) {
      try {
        const response = await axios.post(`${API_URL}/reviews`, {
          product_id: product?.product?.id,
          product_name: product?.product?.title,
          user_id: login?.user?.id,
          name: login?.user?.name,
          comment: review,
          rating: rating,
          is_visible: '0',
        });
        if (response?.status === 201) {
          toast.success('Review post success!');
          setRating(0);
          setReview('');
          setFirstName('');
          setEmail('');
          fetchProduct();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
                        <StarRating rating={product?.averageReview} />
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
                          Avail Bank EMI | EMI From 1,890 Tk/month
                        </span>
                      </h3>
                    </div>
                    <div className="attribute py-2">
                      <div className="flex items-center">
                        <p className=" font-gotham text-sm mr-2"> Gas type:</p>
                        <div className="flex">
                          {/* when attribute will selected then TODO:'selected' class will be set in button */}
                          <button className="select  font-gotham text-sm bg-white text-black px-2 py-[2px] mr-1">
                            NG
                          </button>
                          <button className="select font-gotham text-sm bg-white text-black px-2 py-1 mr-1">
                            LPG
                          </button>
                        </div>
                      </div>
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
                              regular_price: product.product.regular_price,
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
                                regular_price: product.product.regular_price,
                              })
                            )
                          }
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>

                    <div className="more-action">
                      <div className="flex flex-col md:flex-row">
                        <span
                          onClick={() => {
                            return (
                              product?.product?.id &&
                              addWishList(product?.product?.id)
                            );
                          }}
                        >
                          {' '}
                          <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                            <span>
                              <AiOutlineHeart className="mr-1 " />
                            </span>
                            Wishlist
                          </OutlineButton>
                        </span>
                        <span
                          className="mt-2 md:mt-0"
                          onClick={() => {
                            return (
                              product?.product?.id &&
                              addCompare({
                                product_id: product?.product?.id,
                                description:
                                  product?.product?.description ?? '',
                                image: product?.product?.image,
                                title: product?.product?.title,
                                regular_price: Number(
                                  product?.product?.regular_price
                                ),
                                price: Number(product?.product?.discount_price),
                                quantity: 1,
                                rating: 5,
                              })
                            );
                          }}
                        >
                          <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                            <span>
                              <BsArrowRepeat className="mr-1 " />
                            </span>
                            Add to Compare
                          </OutlineButton>
                        </span>
                        <span className="mt-2 md:mt-0">
                          <OutlineButton className="flex items-center font-gotham font-medium text-primary mr-2">
                            <span>
                              <AiOutlineShareAlt className="mr-1 " />
                            </span>
                            Share
                          </OutlineButton>
                        </span>
                      </div>
                    </div>

                    <div className="services py-3">
                      {keyPoints.map((service, index) => (
                        <div key={index} className="flex items-center mb-3">
                          <div className=" w-8">
                            <Image
                              className="w-full"
                              src={`${API_ROOT}/images/key-point/${service.image}`}
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
                      ))}
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                              {product?.review?.length > 0 ? (
                                product?.review?.map((item, index) => (
                                  <ReviewCard key={index} review={item} />
                                ))
                              ) : (
                                <></>
                              )}
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
                              <form onSubmit={handleSubmit}>
                                <TextAreaGroup
                                  title="Your review *"
                                  required
                                  value={review}
                                  onChange={(e: any) =>
                                    setReview(e.target.value)
                                  }
                                />
                                <FormGroup
                                  title="First Name *"
                                  required
                                  value={firstName}
                                  onChange={(e: any) =>
                                    setFirstName(e.target.value)
                                  }
                                />
                                <FormGroup
                                  title="Email *"
                                  type="email"
                                  required
                                  value={email}
                                  onChange={(e: any) =>
                                    setEmail(e.target.value)
                                  }
                                />
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <FormGroup
                                title="Your Number *"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                              />
                              <TextAreaGroup
                                title="Ask Question *"
                                value={question}
                                onChange={(e: any) =>
                                  setQuestion(e.target.value)
                                }
                                required
                              />
                              <Button
                                className=" font-gotham font-normal px-2 py-1 text-sm"
                                onClick={handleSubmitQuestion}
                              >
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

              <div className="related-products mt-12 pb-7">
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
                      sort_description={product.sort_description}
                    />
                  ))}
                </div>
              </div>

              {adsBanner?.image && (
                <div className=" pb-24">
                  <Image
                    src={`${API_ROOT}/images/banner/${adsBanner?.image}`}
                    alt="ads"
                    width={1300}
                    height={500}
                  />
                </div>
              )}
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
