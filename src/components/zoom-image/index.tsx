import ImageZoom from 'react-image-zoom';

const ZoomImage = ({ image }: { image: string }) => {
  const zoomProps = {
    width: 400,
    height: 400,
    zoomWidth: 500,
    zoomPosition: 'original',
    zoomStyle: 'opacity: 1;background-color: #fff',
    img: image,
  };

  return <ImageZoom {...zoomProps} />;
};

export default ZoomImage;
