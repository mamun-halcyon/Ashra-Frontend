import ImageZoom from 'react-image-zoom';

const ZoomImage = ({ image }: { image: string }) => {
  const zoomProps = {
    width: 600,
    height: 500,
    zoomWidth: 500,
    zoomPosition: 'original',
    zoomStyle: 'opacity: 1;background-color: #fff',
    img: image,
    zoom: '200',
  };

  return <ImageZoom {...zoomProps} />;
};

export default ZoomImage;
