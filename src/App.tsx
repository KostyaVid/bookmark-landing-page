import { createContext, useEffect, useState } from 'react';
import './App.scss';
import Extension from './components/Extension/Extension';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Questions from './components/Questions/Questions';

export const MobileSizeContext = createContext(true);

function App() {
  const [mobileSize, setMobileSize] = useState(document.body.clientWidth < 992 ? true : false);

  useEffect(() => {
    function resize() {
      if (document.body.clientWidth < 992) {
        setMobileSize(true);
      } else {
        setMobileSize(false);
      }
    }
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [mobileSize]);
  return (
    <div className="App">
      <MobileSizeContext.Provider value={mobileSize}>
        <Header />
        <main>
          <Hero />
          <Features />
          <Extension />
          <Questions />
        </main>
        <Footer />
      </MobileSizeContext.Provider>
    </div>
  );
}

export default App;
