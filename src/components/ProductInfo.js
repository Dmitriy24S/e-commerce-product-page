import React from "react";
import PlusIcon from "../images/icon-plus.svg";
import MinusIcon from "../images/icon-minus.svg";

const ProductInfo = ({ ProductData, setCartAmount, cartAmount, setCartItems, cartItems }) => {
  const addToCart = (product) => {
    if (cartAmount >= 1) {
      if (cartItems.length !== 0) {
        cartItems.forEach((item, index) => {
          if (item.name === product.product_name) {
            const newCart = [...cartItems];
            newCart[index] = {
              ...item,
              amount: cartAmount,
              total: parseInt(product.discounted_price) * parseInt(cartAmount),
            };
            setCartItems(newCart);
          } else {
            setCartItems([
              ...cartItems,
              {
                name: product.product_name,
                discounted_price: product.discounted_price,
                price: product.price,
                img: product.images[0].image,
                amount: cartAmount,
                total: parseInt(product.discounted_price) * parseInt(cartAmount),
              },
            ]);
          }
        });
      } else {
        setCartItems([
          ...cartItems,
          {
            name: product.product_name,
            discounted_price: product.discounted_price,
            price: product.price,
            img: product.images[0].image,
            amount: cartAmount,
            total: parseInt(product.discounted_price) * parseInt(cartAmount),
          },
        ]);
      }
    }
  };

  return (
    <>
      {/* product info */}
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
                {`$${Number(ProductData[0].discounted_price).toFixed(2)}`}
              </div>
              <div className="discount font-bold px-1.5 py-0.5 rounded-lg">
                {ProductData[0].discount}
              </div>
            </div>
            <div className="price font-bold line-through flex items-center ">
              {`$${Number(ProductData[0].price).toFixed(2)}`}
            </div>
          </>
        ) : (
          <div className="price">{`$${Number(ProductData[0].price).toFixed(2)}`}</div>
        )}
      </div>
      {/* button container  */}
      <div className="btn-container flex flex-col gap-4 md:flex-row">
        <div className="amount-container flex justify-between py-3 px-0 rounded-lg mt-2 gap-2 md:mt-0 md:min-w-fit">
          <button
            className="remove-amount-btn px-4 py-1"
            onClick={() => setCartAmount(cartAmount > 1 ? cartAmount - 1 : 1)}
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
        <button
          className="cart-btn py-3 px-4 rounded-lg font-semibold  "
          onClick={() => addToCart(ProductData[0])}
        >
          Add to cart
        </button>
      </div>
      {/* end button container */}
    </>
  );
};

export default ProductInfo;
