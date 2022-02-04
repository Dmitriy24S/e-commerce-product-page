import { useState } from "react";
import "./App.css";
import HamburgerMenuIcon from "./images/icon-menu.svg";
import HamburgerMenuCloseIcon from "./images/icon-close.svg";
import CompanyLogo from "./images/logo.svg";
import CartIcon from "./images/icon-cart.svg";
import CustomerIcon from "./images/image-avatar.png";
import LeftArrow from "./images/icon-previous.svg";
import RightArrow from "./images/icon-next.svg";
import { SliderImagesData } from "./SliderImagesData";

function App() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? SliderImagesData.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setCurrentIndex(currentIndex === SliderImagesData.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header flex justify-between">
        {/* Left Header */}
        <div
          className={
            isHamburgerMenuOpen
              ? "show header-left flex items-center gap-4 pt-4  p-2 pb-5 sm:p-10 sm:pt-4 sm:pb-5"
              : "header-left flex items-center gap-4 p-2 pt-4  pb-5 sm:pt-4 sm:p-10 sm:pb-5"
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
            <ul className="flex flex-col gap-4 items-start font-bold md:flex-row md:font-normal">
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
        <div className="image-container relative">
          {SliderImagesData.map((image, index) => {
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
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        {/* Bottom Main */}
        {/*  */}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
}

export default App;
