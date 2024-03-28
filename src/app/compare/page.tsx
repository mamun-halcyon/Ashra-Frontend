"use client";
import Button from "@/components/button";
import StarRating from "@/components/rating";
import Image from "next/image";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import "./page.scss";
// import ToggleButton from '@/components/status-button';
import { API_ROOT } from "@/constant";
import { addToCart } from "@/redux/features/cart/cartSlice";
import {
  clearCompare,
  removeFromCompare,
} from "@/redux/features/compare/compareSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ICartItem } from "@/types/cart";
import { useRouter } from "next/navigation";
import FormatPrice from "@/components/price-formate";

function Compare() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // const [isTrue, setIsTrue] = useState(false);
  const { data: compareItems } = useAppSelector((state) => state.compare);
  // const handleToggle = () => setIsTrue(!isTrue);
  const handleClearCompare = () => dispatch(clearCompare());

  const handleBuyNow = (data: ICartItem) => {
    dispatch(addToCart(data));
    router.push("/cart");
  };
  return (
    <section className="compare">
      <div className="container">
        <div className="mb-4 flex justify-between">
          <div className="flex">
            <h3 className=" font-gotham font-medium text-base mr-4">Compare</h3>
            <div className="flex items-center">
              {/* <ToggleButton isChecked={isTrue} onClick={handleToggle} /> */}
              {/* <p
                className={`font-gotham font-normal text-sm ml-4 ${
                  isTrue ? 'primary-text' : ''
                }`}
              >
                Highlight differences
              </p> */}
            </div>
          </div>
          <Button
            onClick={handleClearCompare}
            className=" font-gotham font-medium text-sm px-4 py-1 compare-button"
          >
            Clear All
          </Button>
        </div>

        <div className=" overflow-x-scroll md:overflow-x-auto">
          <table className="w-full text-sm text-left compare-table md:table-fixed">
            <thead>
              <tr className="heading">
                <th
                  scope="col"
                  className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                ></th>
                {compareItems.map((item, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                  >
                    <div className="header">
                      <h4 className=" font-gotham font-medium text-xs black-text">
                        {item.title}
                      </h4>
                      {/* <LuSearch /> */}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="col"
                  className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                >
                  <div className="pt-3 px-2">
                    <h3 className=" font-gotham font-medium text-xs black-text">
                      Products Comparison
                    </h3>
                    <p className="font-gotham font-normal text-xs black-text mt-2">
                      Find and select products to see the differences and
                      similarities between them
                    </p>
                  </div>
                </td>

                {compareItems.map((item, index) => (
                  <td
                    key={index}
                    scope="col"
                    className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                  >
                    <div className="product">
                      <p className=" font-gotham font-light text-xs black-text">
                        {item.title}
                      </p>
                      <div className="flex items-center">
                        <RxCrossCircled className="inline danger-text text-xs mr-1" />
                        <p
                          className=" font-gotham font-light text-xs danger-text cursor-pointer"
                          onClick={() => dispatch(removeFromCompare(item))}
                        >
                          Remove
                        </p>
                      </div>
                      {/*  <h3 className=" font-gotham font-medium text-xs my-3">
                        {item.title}
                      </h3> */}
                      <div className=" white-bg">
                        <Image
                          className=" w-3/4 h-[200px] mx-auto my-3 object-contain"
                          src={`${API_ROOT}/images/product/${item.image}`}
                          width={150}
                          height={150}
                          alt="product"
                        />
                      </div>

                      <p
                        className={`font-gotham font-normal text-xs line-through ${
                          item.price === item.regular_price ? `opacity-0` : ""
                        }`}
                      >
                        ৳ {FormatPrice(item.regular_price)}
                      </p>
                      {/*  {
                        item.regular_price > item.price && <p className=" font-gotham font-normal text-xs line-through">
                        ৳ {item.regular_price}
                      </p>
                      } */}
                      <div className="flex justify-between mt-2">
                        <h3 className=" font-gotham font-bold text-sm">
                          ৳ {FormatPrice(item.price)}
                        </h3>
                        {item.regular_price > item.price && (
                          <span className="px-2 py-1 font-gotham font-light text-xs discount">
                            Save ৳ {item.regular_price - item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  scope="col"
                  className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                >
                  <h3 className=" font-gotham font-medium black-text text-xs">
                    Rating
                  </h3>
                </td>
                {compareItems.map((item, index) => (
                  <td
                    key={index}
                    scope="col"
                    className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                  >
                    <div className="icons">
                      <StarRating rating={item.rating} />
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  scope="col"
                  className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                >
                  <h3 className=" font-gotham font-medium black-text text-xs">
                    Description
                  </h3>
                </td>
                {compareItems.map((item, index) => (
                  <td
                    key={index}
                    scope="col"
                    className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                  >
                    <div
                      className=" font-gotham  font-light black-text text-xs"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </td>
                ))}
              </tr>
              <tr>
                <td
                  scope="col"
                  className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                ></td>
                {compareItems.map((item, index) => (
                  <td
                    key={index}
                    scope="col"
                    className="px-2 py-3 min-w-[200px] md:min-w-[auto]"
                  >
                    <div className="text-center px-4">
                      {item.availability === 1 ? (
                        <Button
                          className="w-full py-1 font-gotham font-normal text-normal"
                          onClick={() =>
                            handleBuyNow({
                              title: item.title,
                              quantity: item.quantity,
                              price: item.price,
                              product_id: item.product_id,
                              image: item.image,
                              regular_price: item.regular_price,
                            })
                          }
                        >
                          Buy Now
                        </Button>
                      ) : item.availability === 2 ? (
                        <Button className="w-full py-1 font-gotham font-normal text-normal">
                          Out of Stock
                        </Button>
                      ) : (
                        <Button className="w-full py-1 font-gotham font-normal text-normal">
                          Up Coming
                        </Button>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/*  <div className="mb-4 flex justify-between">
          <h3 className=" font-gotham font-medium text-base">Compare</h3>
          <Button className=" font-gotham font-medium text-sm px-4 py-1">
            Clear All
          </Button>
        </div>
        <div className="grid jobair">
          <div className="header"></div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs black-text">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs black-text">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs black-text">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="header">
            <h4 className=" font-gotham font-medium text-xs black-text">
              GH-8203M - Gazi Smiss Gas..
            </h4>
          </div>
          <div className="flex p-3 pb-0 product-card">
            <div className="pt-3 px-2">
              <h3 className=" font-gotham font-medium text-xs black-text">
                Products Comparison
              </h3>
              <p className="font-gotham font-normal text-xs black-text mt-2">
                Find and select products tosee the differences and similarities
                between them
              </p>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs black-text">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs black-text">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs black-text">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="product-card">
            <p className=" font-gotham font-light text-xs black-text">
              Kitchen Hood
            </p>
            <div className="flex items-center">
              <RxCrossCircled className="inline danger-text text-xs mr-1" />
              <p className=" font-gotham font-light text-xs danger-text">
                Remove
              </p>
            </div>
            <h3 className=" font-gotham font-medium text-xs my-3">
              GH-8203M - Gazi Smiss Gas Stove
            </h3>
            <Image
              className=" w-3/4 mx-auto my-3"
              src={'/assets/images/products/image1.png'}
              width={150}
              height={150}
              alt="product"
            />
            <p className=" font-gotham font-normal text-xs line-through">
              ৳ 7000
            </p>
            <div className="flex justify-between mt-2">
              <h3 className=" font-gotham font-medium text-sm">৳ 6000</h3>
              <Button className="px-2 font-gotham font-light text-xs">
                Save ৳ 1000
              </Button>
            </div>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium black-text text-xs">
              Brand
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light black-text text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light black-text text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light black-text text-xs">Gazi</h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-light black-text text-xs">Gazi</h3>
          </div>
          <div className="product-card">
            <h3 className=" font-gotham font-medium black-text text-xs">
              Rating
            </h3>
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="product-card">
            <StarRating rating={4} />
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham font-medium black-text text-xs">
              Description
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light black-text text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light black-text text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light black-text text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="p-4 product-row">
            <h3 className=" font-gotham  font-light black-text text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="product-card">
            <h3 className=" font-gotham font-medium black-text text-xs"></h3>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
          <div className="product-card">
            <Button className="px-3 py-1 font-gotham font-normal text-normal">
              Buy Now
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Compare;
