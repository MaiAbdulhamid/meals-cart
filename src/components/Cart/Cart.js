import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, totalAmount, addItemToCart, removeItemFromCart, onCloseCartModal } = useContext(CartContext);
  const amount = `$${totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    addItemToCart(item)
  };
  const removeItemHandler = (id) => {
    removeItemFromCart(id)
  };

  const items = cartItems.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={() => addItemHandler(item)}
      onRemove={() => removeItemHandler(item.id)}
    />
  ));
  return (
    <Modal>
      <ul className={classes["cart-item"]}>{items}</ul>
      <div className={classes.total}>
        <span>Total</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCartModal}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
