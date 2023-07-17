import React, { useContext, useRef, useState } from "react";
import { DUMMY_MEALS } from "../../../../services/meals";
import CartContext from "../../../../store/cart-context";
import Input from "../../../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm({ id }) {
  const [isValid, setIsValid] = useState(true);
  const amountRef = useRef();
  const { addItemToCart } = useContext(CartContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const addedItem = DUMMY_MEALS.find(item => item.id === id);
    const enteredAmount = Number(amountRef.current.value);

    if(enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5){
      setIsValid(false);

      return;
    }
    addItemToCart({
      ...addedItem,
      amount: enteredAmount
    });
  }
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <Input
        ref={amountRef}
        label="Amout"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please Enter a Valid Amount (1-5)</p>}
    </form>
  );
}
