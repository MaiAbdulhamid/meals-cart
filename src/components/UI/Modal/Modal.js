import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../../store/cart-context";
import classes from "./Modal.module.css";

const Backdrop = () => {
  const { onCloseCartModal } = useContext(CartContext);

  return <div className={classes.backdrop} onClick={onCloseCartModal} />;
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default function Modal({ children }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
