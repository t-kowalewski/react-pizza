import Header from './components/Layout/Header/Header';
import HeroImg from './components/UI/HeroImg/HeroImg';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { useState, createContext } from 'react';

export const AppContext = createContext(null);

function App() {
  // move AppContext logic to 'store' folder
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <AppContext.Provider value={{ openCartHandler, closeCartHandler }}>
      <CartProvider>
        <Header />
        <HeroImg />

        <main>
          <Meals />
        </main>

        {showCart && <Cart />}
      </CartProvider>
    </AppContext.Provider>
  );
}

export default App;
