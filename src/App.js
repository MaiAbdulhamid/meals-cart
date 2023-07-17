import { useContext } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";

function App() {
  const { isCartModalOpen } = useContext(CartContext);

  return (
    <>
      <Header />
      {isCartModalOpen && <Cart />}
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
