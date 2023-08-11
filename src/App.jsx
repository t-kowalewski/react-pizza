import Header from './components/Layout/Header/Header';
import HeroImg from './components/UI/HeroImg/HeroImg';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState, createContext } from 'react';

export const AppContext = createContext(null);

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <AppContext.Provider value={{ openCartHandler, closeCartHandler }}>
      <Header />
      <HeroImg />

      <main>
        <Meals />
      </main>

      {showCart && <Cart />}
    </AppContext.Provider>
  );
}

export default App;
