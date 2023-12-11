"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import FilterBox from "@/components/filterbox";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import ReactSlider from "react-slider";
import "./page.scss";
import Image from "next/image";
import { AiOutlineBars } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import ActionButton from "@/components/action";
import { productsData } from "@/static/products";
import ListCard from "@/components/list-card";
import { categoryData } from "@/static/category";
import { ICategoryData, ICategoryResponse } from "@/types/category";
import CategoryFilter from "@/components/category-filter";
import Pagination from "@/components/pagination";
import { API_URL } from "@/constant";
import axios from "axios";
import { IProduct, IProductResponse } from "@/types/product";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
const ProductCard = dynamic(() => import("@/components/card"));

const categoryProducts = async (position: string) => {
  const res = await fetch(`${API_URL}/menus/${position}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

function Category() {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [page, setPage] = useState(1);
  const [isRow, setIsRow] = useState<boolean>(true);
  const [showTitle, setShowTitle] = useState<string>("Show 12");
  const [sortBy, setSortBy] = useState<string>("Sort by");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number | string>(12);
  const [çategories, setCategories] = useState<string[]>([]);
  const [availabilities, setAvailabilities] = useState<number[]>([]);
  const [categoryFilterItems, setCategoryFilterItems] = useState<
    ICategoryData[]
  >([]);

  const handleShow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedElement = event.target as HTMLLIElement;
    const innerText = clickedElement.innerText;
    setShowTitle(`Show ${innerText}`);
    setLimit(innerText);
  };

  const handleSortBy = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedElement = event.target as HTMLLIElement;
    const innerText = clickedElement.innerText;
    setSortBy(innerText);
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handlePriceChange = (newValue: [number, number]) => {
    setPriceRange(newValue);
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice) && newPrice < priceRange[1]) {
      setPriceRange([newPrice, priceRange[1]]);
    }
  };
  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPriceRange([priceRange[0], newPrice]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ICategoryResponse>(
          `${API_URL}/categories?page=1&limit=100`
        );
        if (response.status == 200) {
          setCategoryFilterItems(response.data?.data?.rows);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const fetchData = async () => {
    const search: string = searchParams.get("search")?.trim() || "";
    const mainCategory: string = searchParams.get("category")?.trim() || "";
    const availability: string =
      (availabilities.length > 0 && availabilities.join(",")) || "";
    let sort_by: string = "";
    switch (sortBy) {
      case "Newest":
        sort_by = "newest";
        break;
      case "Oldest":
        sort_by = "oldest";
        break;
      case "Price low to high":
        sort_by = "low";
        break;
      case "Price high to low":
        sort_by = "high";
        break;
    }
    const tempCategories: string[] =
      çategories.length > 0 ? [...çategories] : [mainCategory, ...çategories];
    const category: string =
      (tempCategories.length > 0 && tempCategories.join(",")) || "";
    try {
      const response = await axios.get<IProductResponse>(
        `${API_URL}/frontend/products?limit=${limit}&page=${page}
        ${category !== "" ? "&category=" + category : ""}
        ${search !== "" ? "&search=" + search : ""}
        ${
          priceRange[0] > 0 || priceRange[1] < 200000
            ? "&min_price=" + priceRange[0]
            : ""
        }
        ${
          priceRange[0] > 0 || priceRange[1] < 200000
            ? "&max_price=" + priceRange[1]
            : ""
        }
        ${sort_by !== "" ? "&sort_by=" + sort_by : ""}
        ${availability !== "" ? "&availability=" + availability : ""}`
      );
      setProducts(response.data?.data?.rows);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  let timeOutId: any = 0;
  useEffect(() => {
    if (timeOutId === 0) {
      timeOutId = setTimeout(() => {
        fetchData();
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [
    limit,
    page,
    çategories,
    searchParams,
    priceRange,
    sortBy,
    availabilities,
  ]);

  const handleMultipleCategory = (title: string, removeUnselected: boolean) => {
    if (removeUnselected) {
      setCategories((prevState) =>
        prevState?.find((item) => item === title)
          ? prevState.filter((item) => item !== title)
          : [...prevState]
      );
      return;
    }
    setCategories((prevState) =>
      prevState?.find((item) => item === title)
        ? prevState.filter((item) => item !== title)
        : [...prevState, title]
    );
  };

  const handleAvailability = (event: any) => {
    setAvailabilities((prevState) =>
      prevState?.find((item) => item === event.target.value)
        ? prevState.filter((item) => item !== event.target.value)
        : [...prevState, event.target.value]
    );
  };

  return (
    <main>
      <section className=" hidden md:block">
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-3">
            <Link href={"/"}>Home</Link>
            {searchParams.get("category")?.trim() !== "" &&
            çategories?.length == 0 ? (
              <>
                <RiArrowDropRightLine className=" text-xl" />
                <Link href={"/bathware"}>
                  {" "}
                  {searchParams.get("category")?.trim()}{" "}
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <section className=" pb-12">
        <div className="container">
          <div className="flex justify-between">
            <div className=" hidden md:block md:w-[250px]">
              <FilterBox title="Category">
                <CategoryFilter
                  categoryFilterItems={categoryFilterItems}
                  handleMultipleCategory={handleMultipleCategory}
                />
              </FilterBox>

              <FilterBox title="Availability">
                <div className="flex mb-2">
                  <input
                    type="checkbox"
                    name="stock"
                    id="stock"
                    value={1}
                    onChange={handleAvailability}
                  />
                  <label
                    className="ml-2 font-gotham font-normal text-sm hover:text-primary transition-all"
                    htmlFor="stock"
                  >
                    In Stock
                  </label>
                </div>
                <div className="flex mb-2">
                  <input
                    type="checkbox"
                    name="stock-out"
                    id="stockout"
                    value={2}
                    onChange={handleAvailability}
                  />
                  <label
                    className="ml-2 font-gotham font-normal text-sm hover:text-primary"
                    htmlFor="stockout"
                  >
                    Out of Stock
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="checkbox"
                    name="instock"
                    id="upcoming"
                    value={3}
                    onChange={handleAvailability}
                  />
                  <label
                    className="ml-2 font-gotham font-normal text-sm hover:text-primary"
                    htmlFor="upcoming"
                  >
                    Up Coming
                  </label>
                </div>
              </FilterBox>
              <FilterBox title="Price">
                <div className="double-slider-container">
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    value={priceRange}
                    min={0}
                    max={50000}
                    step={1} // Adjust step size as needed
                    minDistance={500}
                    onChange={handlePriceChange}
                  />
                </div>
                <div className="flex w-full justify-between mt-2">
                  <input
                    className="price-input font-gotham font-medium text-xs"
                    type="number"
                    min={0}
                    value={priceRange[0]}
                    onChange={handleMinPrice}
                  />
                  <input
                    className="price-input font-gotham font-medium text-xs"
                    type="number"
                    value={priceRange[1]}
                    onChange={handleMaxPrice}
                  />
                </div>
              </FilterBox>
            </div>
            <div className="md:w-[925px] ">
              <div className="category-banner mb-5">
                <div className="h-[235px]">
                  <Image
                    className="w-full h-full"
                    src={"/assets/images/banner/categorybanner.png"}
                    width={400}
                    height={300}
                    alt="gazi category-banner"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center filter-bar py-2 px-5 mb-5 shadow-sm">
                <div className=" flex items-center">
                  <span
                    className={`${isRow ? "active" : null} p-1 mr-2 `}
                    onClick={() => setIsRow(true)}
                  >
                    <PiDotsNineBold className="text-xl icon" />
                  </span>
                  <span
                    className={`${!isRow ? "active" : null} p-1 `}
                    onClick={() => setIsRow(false)}
                  >
                    <AiOutlineBars className="text-xl icon" />
                  </span>
                </div>
                <div className="action flex items-center">
                  <div>
                    <ActionButton title={sortBy}>
                      <ul>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleSortBy}
                        >
                          Newest
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleSortBy}
                        >
                          Oldest
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleSortBy}
                        >
                          Price low to high
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleSortBy}
                        >
                          Price high to low
                        </li>
                      </ul>
                    </ActionButton>
                  </div>

                  <div className="ml-2">
                    <ActionButton title={showTitle}>
                      <ul>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleShow}
                        >
                          12
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleShow}
                        >
                          16
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleShow}
                        >
                          20
                        </li>
                        <li
                          className="py-1 cursor-pointer action-item px-1 font-gotham text-xs font-normal"
                          onClick={handleShow}
                        >
                          24
                        </li>
                      </ul>
                    </ActionButton>
                  </div>
                  <div className="flex items-center ml-2">
                    <div
                      className=" cursor-pointer p-1"
                      onClick={decrementPage}
                    >
                      <IoMdArrowDropleft />
                    </div>
                    <div className=" font-gotham font-normal text-xs flex items-center">
                      <div className="active w-[30px] h-[26px] mr-[6px] flex items-center justify-center ">
                        {page}
                      </div>
                      <p>of 2</p>
                    </div>
                    <div
                      className=" cursor-pointer p-1"
                      onClick={incrementPage}
                    >
                      <IoMdArrowDropright />
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-products px-2 md:px-0">
                {isRow ? (
                  <div className="grid md:grid-cols-4 grid-cols-2 gap-1 mb-5">
                    {products?.length > 0 ? (
                      products?.map((product, i) => (
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
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 mb-5">
                    {products?.length > 0 ? (
                      products?.map((product, i) => (
                        <ListCard key={i} product={product} />
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                )}
              </div>

              <Pagination
                page={page}
                incrementPage={incrementPage}
                decrementPage={decrementPage}
                showTitle={showTitle}
                handleShow={handleShow}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Category;
