import './index.scss';

const VideoCard = () => {
  return (
    <div className="video-card">
      <iframe
        height="200"
        src="https://youtube.com/embed/6FxZnI01JCs"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      <h3 className=" font-gotham font-bold text-lg text-black text-center mt-8">
        Gazi Smiss Gas Stove | EG 750S | Gazi Home Appliance
      </h3>
    </div>
  );
};

export default VideoCard;
