import dynamic from 'next/dynamic';
const VideoCard = dynamic(() => import('@/components/video-card'));
import { videoData } from '@/static/video';
import './page.scss';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';
// import VideoCard from '@/components/video-card';

function Videos() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="flex items-center font-gotham font-normal text-sm mt-3 mb-5">
            <Link href={'/'}>Home</Link>
            <RiArrowDropRightLine className=" text-xl" />
            <Link href={'/videos'}> Videos </Link>
          </div>
        </div>
      </section>
      <div className="videos-section mt-6">
        <section>
          <div className="container">
            <div className="grid grid-cols-3 gap-4">
              {videoData.map((video, index) => (
                <VideoCard url={video.url} title={video.title} key={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Videos;
