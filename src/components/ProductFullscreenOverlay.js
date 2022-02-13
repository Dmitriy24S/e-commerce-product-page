import React from "react";
import LeftArrow from "../images/icon-previous.svg";
import RightArrow from "../images/icon-next.svg";
import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import ProductThumbnail from "./ProductThumbnail";
import ProductImage from "./ProductImage";

const ProductFullscreenOverlay = ({
  setIsImageFullscreen,
  isImageFullscreen,
  ProductData,
  setCurrentIndex,
  currentIndex,
  prevSlide,
  nextSlide,
}) => {
  return (
    <div className="fullscreen-image-overlay">
      <div className="dark-overlay" onClick={() => setIsImageFullscreen(false)}></div>
      <div className="content-wrapper">
        <CloseIcon
          className="fullscreen-img-close-btn"
          fill="white"
          stroke="orange"
          onClick={() => setIsImageFullscreen(!isImageFullscreen)}
        />
        {/* fullscreen image container */}
        <div className="image-container relative flex flex-col gap-4 overflow-hidden">
          {/* Image */}
          {ProductData[0].images.map((image, index) => {
            return (
              <ProductImage
                image={image}
                currentIndex={currentIndex}
                index={index}
                setIsImageFullscreen={setIsImageFullscreen}
                isImageFullscreen={isImageFullscreen}
                key={index}
              />
            );
          })}
          <img src={LeftArrow} alt="left arrow" className="left-arrow" onClick={prevSlide} />
          <img src={RightArrow} alt="right arrow" className="right-arrow" onClick={nextSlide} />
        </div>
      </div>
      {/* fullscreen thumbnails container*/}
      <div className="image-previews hidden md:flex md:gap-3 justify-center mb-4 mt-2">
        {/* thumbnails */}
        {ProductData[0].images.map((image, index) => {
          return (
            <ProductThumbnail
              currentIndex={currentIndex}
              index={index}
              setCurrentIndex={setCurrentIndex}
              image={image}
              key={index}
            />
          );
        })}
      </div>
      {/* end fullscreen image container */}
    </div>
  );
};

export default ProductFullscreenOverlay;
