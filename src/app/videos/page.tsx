'use client';
import dynamic from 'next/dynamic';
const VideoCard = dynamic(() => import('@/components/video-card'));
import { videoData } from '@/static/video';
import './page.scss';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Pagination from '@/components/pagination';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { API_URL } from '@/constant';
import { IVideo } from '@/types/video';

function Videos() {
  const [page, setPage] = useState(1);
  const [showTitle, setShowTitle] = useState<string>('Show');
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/videos?page=${page}&limit=16`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.count);
        setVideos(data.data.rows);
        setLoading(false);
      });
  }, [page]);

  /*  useEffect(() => {
    dispatch(getProducts({}));
  }, []); */

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
  };

  return (
    <main>
      <section>
        <div className="container">
          <div className="md:flex items-center font-gotham font-normal text-sm mt-3 mb-3 hidden ">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/videos'}> Videos </Link>
          </div>
        </div>
      </section>

      <section className="md:mt-8 md:mb-5 mt-3 mb-2">
        <div className="container">
          <Image
            className="w-full"
            src={'/assets/images/ads/Group 9.png'}
            width={400}
            height={300}
            alt="ads"
          />
        </div>
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
