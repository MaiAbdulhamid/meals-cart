import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
  isCartModalOpen: false,
  onOpenCartModal: () => {},
  onCloseCartModal: () => {},
  cartItems: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeItemFromCart: (id) => {},
});
const initialCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedCartItems;
    if(existingCartItem){
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }

      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }else{
      updatedCartItems = state.items.concat(action.item);
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "DELETE"){
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingCartItem.amount;
    let updatedCartItems;

    if(existingCartItem.amount === 1){
      updatedCartItems = state.items.filter(item => item.id !== action.id)
    }else{
      const updatedCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }

      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };

  }
  return initialCartState;
};
export const CartContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, dispatchCartItems] = useReducer(
    cartReducer,
    initialCartState
  );

  const openModalHandler = () => {
    setIsOpen(true);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };
  const addItem = (item) => {
    dispatchCartItems({ type: "ADD", item });
  };

  const removeItem = (id) => {
    dispatchCartItems({ type: "DELETE", id });
  };

  return (
    <CartContext.Provider
      value={{
        isCartModalOpen: isOpen,
        onOpenCartModal: openModalHandler,
        onCloseCartModal: closeModalHandler,
        cartItems: cartItems.items,
        totalAmount: cartItems.totalAmount,
        addItemToCart: addItem,
        removeItemFromCart: removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
