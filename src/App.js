import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      {isCartOpen && <Cart onToggleCart={toggleCart} />}
      <Header onToggleCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
