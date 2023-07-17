import React, { useContext, useEffect, useState } from "react";
import { CartIcon } from "../../../assets/svgs";
import CartContext from "../../../store/cart-context";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const { onOpenCartModal, cartItems } = useContext(CartContext);
  const [btnIsBump, setBtnIsBump] = useState(false);

  const numberOfCartItems = cartItems.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  useEffect(() => {
    if(cartItems.length === 0){
      return;
    }
    setBtnIsBump(true);

    const timer = setTimeout(() => {
      setBtnIsBump(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }

  }, [cartItems])
  return (
    <button className={`${classes.button} ${btnIsBump ? classes.bump : ''}`} onClick={onOpenCartModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
