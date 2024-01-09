"use client";
import { API_ROOT } from "@/constant";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductCard from "../card";

type IProps = {
  topSale: IProduct[];
  newArrival: IProduct[];
  featureProduct: IProduct[];
  adsbanner: string;
  bannerUrl: string;
};

const Featured: FC<IProps> = ({
  topSale,
  newArrival,
  featureProduct,
  adsbanner,
  bannerUrl,
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
                          isNew={product.is_new}
                          product_id={Number(product.id)}
                          sort_description={product.sort_description}
                          availability={product.availability}
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
                          isNew={product.is_new}
                          product_id={Number(product.id)}
                          sort_description={product.sort_description}
                          availability={product.availability}
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
                          isNew={product.is_new}
                          product_id={Number(product.id)}
                          sort_description={product.sort_description}
                          availability={product.availability}
                        />
                      ))}
                    </div>
                  </TabPanel>
                </div>
                <div className=" hidden md:block">
                  <Link href={bannerUrl}>
                    <Image
                      className=" w-full max-h-[708px]"
                      src={`${API_ROOT}/images/banner/${adsbanner}`}
                      width={100}
                      height={100}
                      alt="ads"
                    />
                  </Link>
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
