import React from "react";
import { useState } from "react";
import CompanyLogo from "../images/logo.svg";
import CartIcon from "../images/icon-cart.svg";
import CustomerIcon from "../images/image-avatar.png";
import HamburgerMenuIcon from "../images/icon-menu.svg";
import HamburgerMenuCloseIcon from "../images/icon-close.svg";
import Cart from "./Cart";

const Header = ({ setIsCartOpen, isCartOpen, setCartItems, cartItems }) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <header className="App-header flex justify-between md:border-b-2 md:border-slate-200	">
      {/* Left side */}
      <div
        className={
          isHamburgerMenuOpen
            ? "show header-left flex items-center gap-4 px-2  sm:px-10 md:gap-10"
            : "header-left flex items-center gap-4 px-2 sm:px-10 md:gap-10"
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
      {/* Right side */}
      <div className="header-right flex items-center gap-6 p-2 pt-4 pb-5 sm:p-10 sm:pt-4 sm:pb-5">
        <img
          src={CartIcon}
          className="cart-icon cursor-pointer transition"
          alt="cart"
          onClick={() => setIsCartOpen(!isCartOpen)}
        />
        <img src={CustomerIcon} alt="customer" className="customer-icon w-8 cursor-pointer" />
      </div>
      {/* Cart overlay */}
      {isCartOpen && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
      {/* end cart overlay */}
    </header>
  );
};

export default Header;
