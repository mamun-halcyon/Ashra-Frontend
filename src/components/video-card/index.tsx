import './index.scss';
interface IProps {
  url: string;
  title: string;
}

const VideoCard: React.FC<IProps> = ({ url, title }) => {
  return (
    <div className="video-card">
      <iframe
        height="200"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <h3 className="video-title font-gotham font-bold text-base text-black text-center mt-8">
        {title}
      </h3>
    </div>
  );
};

export default VideoCard;
