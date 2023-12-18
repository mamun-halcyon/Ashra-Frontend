import './page.scss';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Banner from '@/components/banner';
import ServiceCard from '@/components/service-card';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import { API_ROOT, API_URL } from '@/constant';
import { HomeApiResponse } from '@/types/home';
import { IProduct, IProductResponse } from '@/types/product';
const Featured = dynamic(() => import('@/components/featured'));
const ExploreCard = dynamic(() => import('@/components/explore'));
const ProductCard = dynamic(() => import('@/components/card'));
const Title = dynamic(() => import('@/components/title'));
const VideoCard = dynamic(() => import('@/components/video-card'));

async function getData() {
  const res = await fetch(`${API_URL}/home-page`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function categoryProduct(category_slug: string) {
  const res = await fetch(
    `${API_URL}/frontend/products?page=1&limit=10&category=${category_slug}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
async function categoryAdBanner(slug: string) {
  const res = await fetch(`${API_URL}/banners/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export default async function Home({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) {
  const homeData: HomeApiResponse = await getData();
  const gasStoveProducts: IProductResponse = await categoryProduct('gas-stove');
  const kitchenHoodProducts: IProductResponse = await categoryProduct(
    'kichen-hood'
  );
  const digitalScaleProducts: IProductResponse = await categoryProduct(
    'digital-scale'
  );
  const addBanner = await categoryAdBanner('home');
  const verticalBanner = await categoryAdBanner('home-v');

  return (
    <>
      <main>
        <section>
          <Banner banners={homeData.banner} />
        </section>

        <section className="service">
          <div className="container px-2 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {homeData.keyPoint.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="explore">
          <div className="container">
            <h2 className="mb-6 uppercase text-center font-gotham text-xl font-bold ">
              EXPLORE HOME APPLIANCES
            </h2>
            <div className="flex flex-wrap justify-center  ">
              {homeData?.category.map((category, i) => (
                <ExploreCard
                  className="md:w-1/6 w-1/3 text-center p-2"
                  key={i}
                  href={`/category/${category.title}`}
                  item={category}
                />
              ))}
            </div>
          </div>
        </section>
        <Featured
          featureProduct={homeData.featureProduct}
          topSale={homeData.topSale}
          newArrival={homeData.newArrival}
          adsbanner={verticalBanner?.data[0]?.image}
          bannerUrl={verticalBanner?.data[0]?.url}
        />
        <section className="promotion">
          <Link href={homeData?.homePage?.special_product_link}>
            <Image
              src={`${API_ROOT}/images/home-page/${homeData?.homePage?.special_product_photo}`}
              alt="promotion banner"
              width={1800}
              height={500}
            />
          </Link>
        </section>
        <section className="category-products">
          <div className="container px-2 md:px-0">
            <div className="mb-12">
              <Title
                title="Gas Stove"
                href="/category/filter?category=gas-stove"
              />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {gasStoveProducts?.data?.rows.map(
                  (product: IProduct, i: number) => (
                    <ProductCard
                      key={i}
                      url={product.slug}
                      image={product.image}
                      title={product.title}
                      regular_price={product.regular_price}
                      discount_price={product.discount_price}
                      product_id={Number(product.id)}
                      sort_description={product.sort_description}
                    />
                  )
                )}
              </div>
            </div>
            <div className="mb-12">
              <Title
                title="Kitchen Hood"
                href="/category/filter?category=kitchen-hood"
              />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {kitchenHoodProducts?.data?.rows.map((product, i) => (
                  <ProductCard
                    key={i}
                    url={product.slug}
                    image={product.image}
                    title={product.title}
                    regular_price={product.regular_price}
                    discount_price={product.discount_price}
                    product_id={Number(product.id)}
                    sort_description={product.sort_description}
                  />
                ))}
              </div>
            </div>
            <div>
              <Title
                title="Digital Scale"
                href="/category/filter?category=digital-scale"
              />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {digitalScaleProducts?.data?.rows.map((product, i) => (
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
          </div>
        </section>
        <section className="review-video">
          <div className="container ">
            <Image
              src={`${API_ROOT}/images/banner/${addBanner?.data[0]?.image}`}
              alt="ads"
              width={1300}
              height={500}
            />
          </div>
          <div className="container px-2 md:px-0">
            <h2 className=" py-12 uppercase text-center font-gotham text-xl font-medium">
              PRODUCT REVIEWS & UNBOXING VIDEOS
            </h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {homeData.video.map((video, index) => (
                <VideoCard key={index} url={video.url} title={video.title} />
              ))}
            </div>
          </div>
          <div className="text-center mt-7">
            <Link
              className=" font-gotham font-medium text-sm  more-btn"
              href={'/videos'}
            >
              More Videos{' '}
              <BsArrowRightShort className="inline text-xl font-bold" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
