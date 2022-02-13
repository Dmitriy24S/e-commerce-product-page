import { useState, useEffect } from "react";
import "./App.css";
import LeftArrow from "./images/icon-previous.svg";
import RightArrow from "./images/icon-next.svg";
import PlusIcon from "./images/icon-plus.svg";
import MinusIcon from "./images/icon-minus.svg";
import { ProductData } from "./SliderImagesData";
import Header from "./components/Header";
import ProductFullscreenOverlay from "./components/ProductFullscreenOverlay";
import ProductThumbnail from "./components/ProductThumbnail";
import ProductImage from "./components/ProductImage";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);
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
            <img src={LeftArrow} alt="left arrow" className="left-arrow" onClick={prevSlide} />
            <img src={RightArrow} alt="right arrow" className="right-arrow" onClick={nextSlide} />
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
          <div className="brand uppercase font-bold">{ProductData[0].brand}</div>
          <div className="product-name font-bold text-3xl">
            <h3>{ProductData[0].product_name}</h3>
          </div>
          <div className="product-description">
            <p>{ProductData[0].description}</p>
          </div>
          {/* price container */}
          <div className="price-container flex justify-between">
            {ProductData[0].discount ? (
              <>
                <div className="discount-container flex gap-4 items-center">
                  <div className="discounted-price font-bold text-3xl">
                    {ProductData[0].discounted_price}
                  </div>
                  <div className="discount font-bold px-1.5 py-0.5 rounded-lg">
                    {ProductData[0].discount}
                  </div>
                </div>
                <div className="price font-bold line-through flex items-center ">
                  {ProductData[0].price}
                </div>
              </>
            ) : (
              <div className="price">{ProductData[0].price}</div>
            )}
          </div>
          {/* end price container */}
          {/* button container  */}
          <div className="btn-container flex flex-col gap-4 md:flex-row">
            <div className="amount-container flex justify-between py-3 px-0 rounded-lg mt-2 gap-2 md:mt-0 md:min-w-fit">
              <button
                className="remove-amount-btn px-4 py-1"
                onClick={() => setCartAmount(cartAmount > 0 ? cartAmount - 1 : 0)}
              >
                <img src={MinusIcon} alt="minus" />
              </button>
              <div className="amount-selected font-bold text-xl px-4 py-1">{cartAmount}</div>
              <button
                className="add-amount-btn px-4 py-1"
                onClick={() => setCartAmount(cartAmount + 1)}
              >
                <img src={PlusIcon} alt="plus" />
              </button>
            </div>
            <button className="cart-btn py-3 px-4 rounded-lg font-semibold  ">Add to cart</button>
          </div>
          {/* end button container */}
        </div>
        {/* end product info */}
      </main>
    </div>
  );
}

export default App;
