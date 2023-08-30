'use client';
import './page.scss';
import dynamic from 'next/dynamic';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { exploreData } from '@/static/explore';
import { serviceCardData } from '@/static/serviceCard';
import { productsData } from '@/static/products';
import { videoData } from '@/static/video';
import Image from 'next/image';
import TopHeader from '@/components/header';
import Banner from '@/components/banner';
import ServiceCard from '@/components/service-card';
import Navbar from '@/components/navbar';
import MegaMenu from '@/components/megamenu';
const ExploreCard = dynamic(() => import('@/components/explore'));
const ProductCard = dynamic(() => import('@/components/card'));
const Title = dynamic(() => import('@/components/title'));
const VideoCard = dynamic(() => import('@/components/video-card'));
const Footer = dynamic(() => import('@/components/footer'));

export default function Home() {
  return (
    <>
      <main>
        <section>
          <TopHeader />
          <Navbar />
          <MegaMenu />
        </section>
        <section>
          <Banner />
        </section>
        <section className="service">
          <div className="container">
            <div className="grid grid-cols-4 gap-4">
              {serviceCardData.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </section>
        <section className="explore">
          <div className="container">
            <h2 className="mb-16 uppercase text-center font-gotham text-2xl font-bold ">
              EXPLORE HOME APPLIANCES
            </h2>
            <div className="flex flex-wrap justify-center  ">
              {exploreData.map((item, i) => (
                <ExploreCard
                  className="w-1/6   text-center  p-2"
                  key={i}
                  href={`/category/${item.title}`}
                  item={item}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="popular-product">
          <div className="container">
            <Tabs>
              <TabList>
                <Tab className="font-gotham mr-9 pr-5 pb-5 react-tabs__tab cursor-pointer">
                  Top Sales
                </Tab>
                <Tab className="font-gotham mr-9 pr-5 pb-5 react-tabs__tab cursor-pointer">
                  New Arrivals
                </Tab>
                <Tab className="font-gotham mr-9 pr-5 pb-5 react-tabs__tab cursor-pointer">
                  Featured Products
                </Tab>
              </TabList>
              <div className="panel">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5">
                    <TabPanel>
                      <div className="grid grid-cols-4 gap-4">
                        {productsData.map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-4 gap-4">
                        {[...productsData].splice(0, 4).map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="grid grid-cols-4 gap-4">
                        {productsData.map((product, i) => (
                          <ProductCard key={i} product={product} />
                        ))}
                      </div>
                    </TabPanel>
                  </div>
                  <div className="h-[100%]">
                    <Image
                      className=" h-[100%]"
                      src={`/assets/images/ads/Banner.png`}
                      width={300}
                      height={500}
                      alt="ads"
                    />
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </section>
        <section className="promotion">
          <Image
            src={'/assets/images/ads/Promotion Banners.png'}
            alt="promotion banner"
            width={1800}
            height={500}
          />
        </section>
        <section className="category-products">
          <div className="container">
            <div className="mb-12">
              <Title title="Gas Stove" href="/category/gas-stove" />
              <div className="grid grid-cols-5 gap-5">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div className="mb-12">
              <Title title="Kitchen Hood" href="/category/kitchen-hood" />
              <div className="grid grid-cols-5 gap-5">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
            <div>
              <Title title="Digital Scale" href="/category/digital-scale" />
              <div className="grid grid-cols-5 gap-5">
                {[...productsData].slice(0, 5).map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="review-video">
          <div className="container">
            <Image
              src={'/assets/images/ads/Group 9.png'}
              alt="ads"
              width={1300}
              height={500}
            />
            <h2 className=" py-12 uppercase text-center font-gotham text-xl font-bold">
              PRODUCT REVIEWS & UNBOXING VIDEOS
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {videoData.map((video, index) => (
                <VideoCard key={index} url={video.url} title={video.title} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
