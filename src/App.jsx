import Header from './components/Layout/Header/Header';
import HeroImg from './components/Layout/HeroImg/HeroImg';
import Meals from './components/Meals/Meals';
import AppProvider from './store/AppProvider';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <AppProvider value={{ openCartHandler, closeCartHandler }}>
      <CartProvider>
        <Header />
        <HeroImg />

        <main>
          <Meals />
        </main>

        {showCart && <Cart />}
      </CartProvider>
    </AppProvider>
  );
}

export default App;
