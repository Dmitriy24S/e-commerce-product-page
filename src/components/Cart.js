import React from "react";
import TrashIcon from "../images/icon-delete.svg";

const Cart = ({ cartItems, setCartItems }) => {
  const deleteItem = (name) => {
    let newCartItems = cartItems.filter((item) => {
      return item.name !== name;
    });
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-overlay absolute w-80 right-0 top-0 px-4 py-4 pb-8 rounded-md shadow-xl flex flex-col sm:right-4 sm:w-96 ">
      <div className="cart-overlay__header font-bold text-left border-b-2 pb-4">Cart</div>
      <div className="cart-product-preview pt-8 h-full flex flex-col gap-8">
        {cartItems.length === 0 ? (
          <div className="empty-cart-container font-bold flex items-center justify-center h-full">
            Your cart is empty
          </div>
        ) : (
          <>
            {cartItems.map((product, index) => {
              return (
                <article key={index}>
                  <div className="cart-data-container flex gap-3 items-center justify-between">
                    <div className="cart-left flex gap-3">
                      {/* product preview img */}
                      <div className="cart-product-preview_img">
                        <img
                          src={process.env.PUBLIC_URL + product.img}
                          alt="product preview"
                          className="cart-product-preview-img"
                        />
                      </div>
                      {/* cart product info */}
                      <div className="cart-product-preview__info flex flex-col items-start justify-center">
                        {product.name}
                        <div className="cart-total-container">
                          {`$${product.price} x ${product.amount}`}
                          <span className="cart-total font-bold">{`$${product.total}`}</span>
                        </div>
                      </div>
                    </div>

                    <img
                      src={TrashIcon}
                      alt="delete"
                      className="cursor-pointer"
                      onClick={() => deleteItem(product.name)}
                    />
                  </div>
                </article>
              );
            })}
            <button className="cart-btn checkout-btn py-3 px-4 rounded-lg font-semibold  ">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
