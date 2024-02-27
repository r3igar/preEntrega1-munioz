import React from 'react';
import cart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <button>
      <img src={cart} alt="Cart"/>
      0
    </button>
  );
}

export default CartWidget;
