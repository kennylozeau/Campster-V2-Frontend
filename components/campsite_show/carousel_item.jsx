import React from 'react';

const CarouselItem = props => {

  const { imageUrl } = props;

  return (
    <img className="carousel-img" src={imageUrl} />
  )
}

export default CarouselItem;