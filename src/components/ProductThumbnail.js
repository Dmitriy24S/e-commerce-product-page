import React from "react";

const ProductThumbnail = ({ currentIndex, index, setCurrentIndex, image }) => {
  return (
    <div
      className={
        currentIndex === index
          ? "product-thumbnail active-thumbnail cursor-pointer"
          : "product-thumbnail cursor-pointer"
      }
      onClick={() => setCurrentIndex(index)}
    >
      <img
        src={process.env.PUBLIC_URL + image.thumbnail}
        alt="sneaker preview"
        className={
          currentIndex === index ? "product-thumbnail active-thumbnail" : "product-thumbnail"
        }
        key={index}
      />
    </div>
  );
};

export default ProductThumbnail;
