import React, { useState } from 'react';
import CarouselItem from './carousel_item';

function Carousel(props) {
  const [imageUrls, setImageUrls] = useState(props.imageUrls);

  function goBack() {
    let newArray = [...imageUrls];
    newArray.push(newArray.shift());
    setImageUrls(newArray);
  }

  function goForward() {
    let newArray = [...imageUrls];
    newArray.unshift(newArray.pop());
    setImageUrls(newArray);
  }

  return (
    <>
      <div className="go-back" onClick={() => goBack()}>❮</div>
      <div className="carousel-container">
        <CarouselItem imageUrl={imageUrls[0]} />
        <CarouselItem imageUrl={imageUrls[1]} />
        <CarouselItem imageUrl={imageUrls[2]} />
      </div>
      <div className="go-forward" onClick={() => goForward()}>❯</div>
    </>
    ) 
}

export default Carousel;