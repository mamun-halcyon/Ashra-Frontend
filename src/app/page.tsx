import './page.scss';
import dynamic from 'next/dynamic';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { exploreData } from '@/static/explore';
import { serviceCardData } from '@/static/serviceCard';
import { productsData } from '@/static/products';
import Image from 'next/image';
import Banner from '@/components/banner';
import ServiceCard from '@/components/service-card';
import Link from 'next/link';
import { BsArrowRightShort } from 'react-icons/bs';
import { API_ROOT, API_URL } from '@/constant';
import { HomeApiResponse } from '@/types/home';
import { IProductResponse } from '@/types/product';
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

async function searchProduct(search: string) {
  const res = await fetch(`${API_URL}/products?search=${search}`);

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
  const searchData: IProductResponse = await searchProduct(q);

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
        {/* <section className="popular-product">
          <div className="container px-3 md:px-0">
            <Tabs>
              <TabList>
                <Tab className="font-gotham mr-3 ma:mr-9 md:text-base text-sm md:pr-5 pb-4 font-medium react-tabs__tab cursor-pointer">
                  Top Sales
                </Tab>
                <Tab className="font-gotham mr-3 ma:mr-9 md:text-base text-sm md:pr-5 pb-4 font-medium react-tabs__tab cursor-pointer">
                  New Arrivals
                </Tab>
                <Tab className="font-gotham mr-3 ma:mr-9 md:text-base text-sm md:pr-5 pb-4 font-medium react-tabs__tab cursor-pointer">
                  Featured Products
                </Tab>
              </TabList>
              <div className="panel">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-6  md:col-span-5">
                    <TabPanel>
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
                        {[...productsData.slice(0, 8)].map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
                        {[...productsData].splice(0, 8).map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
                        {[...productsData.slice(0, 8)].map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                  </div>
                  <div className="h-[100%] hidden md:block">
                    <Image
                      className=" h-[100%]"
                      src={`/assets/images/ads/Banner.png`}
                      width={300}
                      height={650}
                      alt="ads"
                    />
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </section> */}
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
              <Title title="Gas Stove" href="/category/gas-stove" />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="mb-12">
              <Title title="Kitchen Hood" href="/category/kitchen-hood" />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div>
              <Title title="Digital Scale" href="/category/digital-scale" />
              <div className="grid md:grid-cols-5 grid-cols-2 gap-1">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="review-video">
          <div className="container ">
            <Image
              src={'/assets/images/ads/Group 9.png'}
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
