'use client';
import React, { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { exploreData } from '@/static/explore';
import { serviceCardData } from '@/static/serviceCard';
import { productsData } from '@/static/products';
import ProductCard from '../card';
import { API_ROOT } from '@/constant';
import { IProduct } from '@/types/product';
import Image from 'next/image';

type IProps = {
  topSale: IProduct[];
  newArrival: IProduct[];
  featureProduct: IProduct[];
  adsbanner: string;
};

const Featured: FC<IProps> = ({
  topSale,
  newArrival,
  featureProduct,
  adsbanner,
}) => {
  return (
    <div>
      <section className="popular-product">
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
                      {topSale.map((product, i) => (
                        <ProductCard
                          key={i}
                          url={product.slug}
                          image={product.image}
                          title={product.title}
                          regular_price={product.regular_price}
                          discount_price={product.discount_price}
                          discount_percent={
                            (product.regular_price - product.discount_price) /
                            100
                          }
                        />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
                      {newArrival.splice(0, 8).map((product, i) => (
                        <ProductCard
                          key={i}
                          url={product.slug}
                          image={product.image}
                          title={product.title}
                          regular_price={product.regular_price}
                          discount_price={product.discount_price}
                          discount_percent={
                            (product.regular_price - product.discount_price) /
                            100
                          }
                        />
                      ))}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-1">
                      {featureProduct.map((product, i) => (
                        <ProductCard
                          key={i}
                          url={product.slug}
                          image={product.image}
                          title={product.title}
                          regular_price={product.regular_price}
                          discount_price={product.discount_price}
                          discount_percent={
                            (product.regular_price - product.discount_price) /
                            100
                          }
                        />
                      ))}
                    </div>
                  </TabPanel>
                </div>
                <div className="h-[100%] hidden md:block">
                  <Image
                    className=" h-[100%]"
                    src={`${API_ROOT}/images/banner/${adsbanner}`}
                    width={100}
                    height={100}
                    alt="ads"
                  />
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Featured;