'use client';
import dynamic from 'next/dynamic';
const VideoCard = dynamic(() => import('@/components/video-card'));
import { videoData } from '@/static/video';
import './page.scss';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Pagination from '@/components/pagination';
import { useState } from 'react';
import Image from 'next/image';

function Videos() {
  const [page, setPage] = useState(1);
  const [showTitle, setShowTitle] = useState<string>('Show');

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
          <div className="container">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
              {videoData.map((video, index) => (
                <VideoCard url={video.url} title={video.title} key={index} />
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
