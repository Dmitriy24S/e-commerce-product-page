import React from "react";
import { useState, useEffect } from "react";
import CompanyLogo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import CustomerIcon from "../images/image-avatar.png";
import HamburgerMenuIcon from "../images/icon-menu.svg";
import HamburgerMenuCloseIcon from "../images/icon-close.svg";
import Cart from "./Cart";

const Header = ({ setIsCartOpen, isCartOpen, setCartItems, cartItems }) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu open - v1
  useEffect(() => {
    if (isHamburgerMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [isHamburgerMenuOpen]);

  // Prevent scrolling when mobile menu open - v2
  //   useEffect(() => {
  // if (isHamburgerMenuOpen) {
  //   document.body.addEventListener("wheel", preventScroll, { passive: false });
  //   function preventScroll(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     return false;
  //   }
  // }
  //   }, [isHamburgerMenuOpen]);

  // Disable mobile menu on resize to tablet/desktop width
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 767) {
        setIsHamburgerMenuOpen(false);
      }
    });
  }, []);

  return (
    <header className="App-header md:border-b-2 md:border-slate-200	">
      <div className="header-wrapper flex justify-between">
        {/* Left side */}
        <div
          className={
            isHamburgerMenuOpen
              ? "show header-left flex items-center gap-4 px-2  sm:px-10 md:gap-10"
              : "header-left flex items-center gap-4 px-2 sm:px-10 md:gap-10"
          }
        >
          <div className="nav-dark-overlay" onClick={() => setIsHamburgerMenuOpen(false)}></div>
          {/* Left side - nav menu btn*/}
          <button
            className="z-20 border-none bg-transparent nav-btn"
            onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
            aria-controls="primary-navigation"
          >
            {isHamburgerMenuOpen ? (
              <>
                <span class="sr-only" aria-expanded="true">
                  Menu
                </span>
                <img src={HamburgerMenuCloseIcon} alt="menu" />
              </>
            ) : (
              <>
                <span class="sr-only" aria-expanded="false">
                  Menu
                </span>
                <img src={HamburgerMenuIcon} alt="menu" />
              </>
            )}
          </button>
          {/* Left side - company logo */}
          <img src={CompanyLogo} alt="company logo" />
          {/* Left side - nav menu */}
          <nav className="fixed  h-screen top-0 left-0 p-10 pt-24 z-10 bg-white w-60 flex justify-center md:relative md:p-0 md:w-auto md:h-auto">
            <ul
              className="flex flex-col gap-4 items-start font-bold md:flex-row md:font-normal md:gap-6"
              id="primary-navigation"
            >
              <li>
                <a href="#/">Collections</a>
              </li>
              <li>
                <a href="#/">Men</a>
              </li>
              <li>
                <a href="#/">Women</a>
              </li>
              <li>
                <a href="#/">About</a>
              </li>
              <li>
                <a href="#/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right side */}
        <div className="header-right flex items-center gap-6 px-2 pt-2 pb-2 sm:px-10 sm:pt-2 sm:pb-2 ">
          <div className="cart-container relative">
            {cartItems.length > 0 && (
              <div className="cart-amount-number">
                {cartItems.map((item) => {
                  return item.amount;
                })}
              </div>
            )}
            <a href="#/" onClick={() => setIsCartOpen(!isCartOpen)}>
              <span class="sr-only" aria-expanded="false">
                Cart
              </span>
              <img src={CartIcon} className="cart-icon cursor-pointer p-1 relative" alt="cart" />
            </a>
          </div>
          <a href="#/">
            <span class="sr-only" aria-expanded="false">
              Customer
            </span>
            <img src={CustomerIcon} alt="customer" className="customer-icon w-8 cursor-pointer" />
          </a>
        </div>
        {/* Cart overlay */}
        {isCartOpen && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
        {/* end cart overlay */}
      </div>
    </header>
  );
};

export default Header;
