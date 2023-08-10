import Header from './components/Layout/Header/Header';
import HeroImg from './components/UI/HeroImg/HeroImg';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Header />
      <HeroImg />

      <main>
        <Meals />
      </main>

      <Cart />
    </>
  );
}

export default App;
