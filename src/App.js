import { useState, useEffect } from "react";
import "./App.css";
import { ReactComponent as RightArrow } from "./images/icon-next.svg";
import { ReactComponent as LeftArrow } from "./images/icon-previous.svg";
import { ProductData } from "./SliderImagesData";
import Header from "./components/Header";
import ProductFullscreenOverlay from "./components/ProductFullscreenOverlay";
import ProductThumbnail from "./components/ProductThumbnail";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartAmount, setCartAmount] = useState(1);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? ProductData[0].images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === ProductData[0].images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 767) {
        setIsImageFullscreen(false);
      }
    });
  }, []);

  return (
    <div className="App relative">
      {/* Header */}
      <Header
        setIsCartOpen={setIsCartOpen}
        isCartOpen={isCartOpen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      {/* Main */}
      <main>
        {/* Fullscreen image overlay */}
        {isImageFullscreen && (
          <ProductFullscreenOverlay
            setIsImageFullscreen={setIsImageFullscreen}
            isImageFullscreen={isImageFullscreen}
            ProductData={ProductData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        )}
        {/* end fullscreen image overlay */}

        {/* image container */}
        <div className="image-container relative flex flex-col gap-4 overflow-hidden">
          <div className="arrow-wrapper">
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
            <div className="left-arrow" onClick={prevSlide}>
              <LeftArrow onClick={nextSlide} />
            </div>
            <div className="right-arrow" onClick={nextSlide}>
              <RightArrow />
            </div>
          </div>
          {/* Thumbnails */}
          <div className="image-previews hidden md:flex md:gap-3 justify-center mb-4 mt-2">
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
          {/* end thumbnails */}
        </div>
        {/* end image container */}

        {/* product info */}
        <div className="product-info text-left p-5 pt-4 flex flex-col gap-4 pb-10">
          <ProductInfo
            ProductData={ProductData}
            cartAmount={cartAmount}
            setCartAmount={setCartAmount}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
        {/* end product info */}
      </main>
    </div>
  );
}

export default App;
