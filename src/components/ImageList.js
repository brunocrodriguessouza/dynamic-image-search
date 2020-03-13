import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const { images } = props;

  return (
    <div className="image-list">
      {
        images.map((image) =>
          <ImageCard key={image.id} image={image} />)
      }
    </div>)
};

export default ImageList;