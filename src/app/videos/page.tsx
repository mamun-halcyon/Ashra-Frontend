"use client";
import dynamic from "next/dynamic";
const VideoCard = dynamic(() => import("@/components/video-card"));
import "./page.scss";
import Link from "next/link";
import { RiArrowDropRightLine } from "react-icons/ri";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";
import Image from "next/image";
import { API_URL } from "@/constant";
import { IVideo } from "@/types/video";
import axios from "axios";
import { IBanner } from "@/types/banner";

function Videos() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number | string>(16);
  const [showTitle, setShowTitle] = useState<string>("Show");
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [adsBanner, setAdsBanner] = useState<IBanner>({} as IBanner);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  async function adBanner() {
    try {
      const data = await axios.get(`${API_URL}/banners/video`);
      setAdsBanner(data.data?.data[0]);
    } catch (error) {
      console.log("category ads banner" + error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}/videos?page=${page}&limit=${limit}`
        );
        const data = await response.json();
        setCount(data.data?.count);
        setVideos(data.data?.rows);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  /*  useEffect(() => {
    dispatch(getProducts({}));
  }, []); */
  useEffect(() => {
    adBanner();
  }, []);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handleShow = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const clickedElement = event.target as HTMLLIElement;
    const innerText = clickedElement.innerText;
    setShowTitle(`Show ${innerText}`);
    setLimit(innerText);
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="md:flex items-center font-gotham font-normal text-sm mt-3 mb-3 hidden ">
            <Link href={"/"}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={"/videos"}> Videos </Link>
          </div>
        </div>
      </section>

      <section className="md:mt-8 md:mb-5 mt-3 mb-2">
        {adsBanner?.image && (
          <div className="container">
            <Link href={"/"}>
              <Image
                className="w-full"
                src={"/assets/images/ads/Group 9.png"}
                width={400}
                height={300}
                alt="ads"
              />
            </Link>
          </div>
        )}
      </section>

      <div className="videos-section">
        <section>
          <div className="container px-2 md:px-0">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {!isLoading &&
                videos.map((video, index) => (
                  <VideoCard key={index} url={video.url} title={video.title} />
                ))}
            </div>
          </div>
        </section>
        <div className="container">
          <Pagination
            page={page}
            totalPage={Math.ceil(count / Number(limit))}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            showTitle={showTitle}
            handleShow={handleShow}
          />
        </div>
      </div>
    </main>
  );
}

export default Videos;
