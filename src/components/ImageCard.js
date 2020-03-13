import React, { useState, useEffect, useRef } from 'react';

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const imageRef = useRef(null);

  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imageRef.current.addEventListener('load', setNewSpans);
  }, []);

  const setNewSpans = () => {
    if (imageRef.current.clientHeight) {
      const height = imageRef.current.clientHeight;
      const newLocalSpans = Math.ceil(height / 10 + 1);

      setSpans(newLocalSpans);
    }
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  )
}

export default ImageCard;