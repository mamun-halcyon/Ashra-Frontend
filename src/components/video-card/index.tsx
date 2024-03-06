"use client";
import { useState } from "react";
import "./index.scss";
interface IProps {
  url: string;
  title: string;
}

const VideoCard: React.FC<IProps> = ({ url, title }) => {
  const [videUrl, setVideUrl] = useState<string>(url);
  const handlePlay = () => setVideUrl(`${url}?autoplay=1`);

  return (
    <div className="video-card shadow">
      <iframe
        height="200"
        src={videUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <div className="p-4">
        <h3
          className="video-title font-bold font-gotham text-[15px] black-text mt-4"
          onClick={handlePlay}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
