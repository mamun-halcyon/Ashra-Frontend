'use client';
import './page.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '@/components/banner';
import TopHeader from '@/components/header';
import ServiceCard from '@/components/service-card';
import { serviceCardData } from '@/static/serviceCard';
import { exploreData } from '@/static/explore';
import { productsData } from '@/static/products';
import ExploreCard from '@/components/explore';
import Image from 'next/image';
import ProductCard from '@/components/card';
import Title from '@/components/title';
import VideoCard from '@/components/video-card';

export default function Home() {
  return (
    <main>
      <section>
        <div className="container ">
          <TopHeader />
        </div>
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
          <h2 className="mb-16 uppercase text-center font-gotham text-3xl font-bold">
            EXPLORE HOME APPLIANCES
          </h2>
          <div className="flex flex-wrap justify-center  ">
            {exploreData.map((item, i) => (
              <ExploreCard
                className="w-1/6  mb-4 text-center  p-2"
                key={i}
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
            <Title title="Gas Stove" href="/" />
            <div className="grid grid-cols-5 gap-4">
              {[...productsData].slice(0, 5).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <Title title="Kitchen Hood" href="/" />
            <div className="grid grid-cols-5 gap-4">
              {[...productsData].slice(0, 5).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-12">
            <Title title="Digital Scale" href="/" />
            <div className="grid grid-cols-5 gap-4">
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
          <h2 className=" uppercase font-gotham font-normal text-3xl text-center py-12 text-black">
            PRODUCT REVIEWS & UNBOXING VIDEOS
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((vide, index) => (
              <VideoCard
                key={index}
                url="https://youtube.com/embed/6FxZnI01JCs"
                title=" Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
