import ImageZoom from 'react-image-zoom';
import './index.scss';

const ZoomImage = ({ image }: { image: string }) => {
  const zoomProps = {
    width: 600,
    height: 500,
    zoomWidth: 1200,
    zoomPosition: 'original',
    zoomStyle: 'opacity: 1;background-color: #fff',
    img: image,
    zoom: '1000',
  };

  return <ImageZoom className="gallery-img" {...zoomProps} />;
};

export default ZoomImage;
