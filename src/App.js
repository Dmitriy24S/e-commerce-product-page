import { useState } from "react";
import "./App.css";
import HamburgerMenuIcon from "./images/icon-menu.svg";
import HamburgerMenuCloseIcon from "./images/icon-close.svg";
import CompanyLogo from "./images/logo.svg";
import CartIcon from "./images/icon-cart.svg";
import CustomerIcon from "./images/image-avatar.png";
import LeftArrow from "./images/icon-previous.svg";
import RightArrow from "./images/icon-next.svg";
import PlusIcon from "./images/icon-plus.svg";
import MinusIcon from "./images/icon-minus.svg";
import { ProductData } from "./SliderImagesData";

function App() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartAmount, setCartAmount] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? ProductData[0].images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === ProductData[0].images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header flex justify-between">
        {/* Left Header */}
        <div
          className={
            isHamburgerMenuOpen
              ? "show header-left flex items-center gap-4 pt-4 p-2 pb-5 sm:p-10 sm:pt-4 sm:pb-5 md:gap-10"
              : "header-left flex items-center gap-4 p-2 pt-4 pb-5 sm:pt-4 sm:p-10 sm:pb-5 md:gap-10"
          }
        >
          <button
            className="z-20 border-none bg-transparent"
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
          >
            {isHamburgerMenuOpen ? (
              <img src={HamburgerMenuCloseIcon} alt="menu" />
            ) : (
              <img src={HamburgerMenuIcon} alt="menu" />
            )}
          </button>
          <img src={CompanyLogo} alt="company logo" />
          <nav className="fixed  h-screen top-0 left-0 p-10 pt-24 z-10 bg-white w-60 flex justify-center md:relative md:p-0 md:w-auto md:h-auto">
            <ul className="flex flex-col gap-4 items-start font-bold md:flex-row md:font-normal md:gap-6">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        {/* Right Header */}
        <div className="header-right flex items-center gap-4 p-2 pt-4 pb-5 sm:p-10 sm:pt-4 sm:pb-5">
          <img src={CartIcon} alt="cart" />
          <img src={CustomerIcon} alt="customer" className="w-6" />
        </div>
      </header>

      {/* Main */}
      <main>
        {/* image container */}
        <div className="image-container relative flex flex-col gap-4 overflow-hidden">
          {ProductData[0].images.map((image, index) => {
            return (
              <img
                src={process.env.PUBLIC_URL + image.image}
                alt="sneaker"
                className={currentIndex === index ? "block product-image" : "hidden"}
                key={index}
              />
            );
          })}
          <img src={LeftArrow} alt="left arrow" className="left-arrow" onClick={prevSlide} />
          <img src={RightArrow} alt="right arrow" className="right-arrow" onClick={nextSlide} />

          {/* Thumbnails */}
          <div className="image-previews hidden md:flex md:gap-3 justify-center mb-4 mt-2">
            {ProductData[0].images.map((image, index) => {
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
                      currentIndex === index
                        ? "product-thumbnail active-thumbnail"
                        : "product-thumbnail"
                    }
                    key={index}
                  />
                </div>
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
          {/* start price container */}
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
          {/* start button container  */}
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
