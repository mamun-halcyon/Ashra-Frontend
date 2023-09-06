import dynamic from 'next/dynamic';
const VideoCard = dynamic(() => import('@/components/video-card'));
import { videoData } from '@/static/video';
import './page.scss';
// import VideoCard from '@/components/video-card';

function Videos() {
  return (
    <div className="videos-section mt-6">
      <section>
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            {videoData.map((video, index) => (
              <VideoCard url={video.url} title={video.title} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videos;
