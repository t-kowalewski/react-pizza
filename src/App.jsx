import Header from './components/Layout/Header/Header';
import HeroImg from './components/UI/HeroImg/HeroImg';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <HeroImg />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
