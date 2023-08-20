'use client';
import './page.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Banner from '@/components/banner';
import TopHeader from '@/components/header';
import ServiceCard from '@/components/service-card';
import { serviceCardData } from '@/static/serviceCard';
import { exploreData } from '@/static/explore';
import ExploreCard from '@/components/explore';
import Image from 'next/image';

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
      <section>
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-5">
              <Tabs>
                <TabList>
                  <Tab>Top Sales</Tab>
                  <Tab>New Arrivals</Tab>
                  <Tab>Featured Products</Tab>
                </TabList>
                <div className="panel">
                  <TabPanel>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam aperiam labore exercitationem optio pariatur
                    molestias, ullam officiis ut. Doloribus, corporis?
                  </TabPanel>
                  <TabPanel>dafdasfsa</TabPanel>
                  <TabPanel>Lorem ipsum dolor sit amet.</TabPanel>
                </div>
              </Tabs>
            </div>
            <div>
              <Image
                src={`/assets/images/ads/Banner.png`}
                width={300}
                height={500}
                alt="ads"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
