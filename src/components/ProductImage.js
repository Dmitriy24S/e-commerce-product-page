import React from "react";

const ProductImage = ({ image, currentIndex, index, setIsImageFullscreen, isImageFullscreen }) => {
  return (
    <img
      src={process.env.PUBLIC_URL + image.image}
      alt="sneaker"
      className={
        currentIndex === index
          ? `blockblock product-image  ${!isImageFullscreen && "md:cursor-pointer"}`
          : "hidden"
      }
      onClick={() => !isImageFullscreen && setIsImageFullscreen(!isImageFullscreen)}
    />
  );
};

export default ProductImage;
