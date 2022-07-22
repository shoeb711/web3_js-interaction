import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LiquidityPool from './components/LiquidityPool';
import Header from './components/Header';
import Voter from './components/Voter';

function App() {
  useEffect(() => {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
      // @ts-ignore
      iframes[i].parentNode.removeChild(iframes[i]);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LiquidityPool />} />
        <Route path='/liquidity-pool' element={<LiquidityPool />} />
        <Route path='/voter' element={<Voter />} />
      </Routes>
    </>
  );
}

export default App;
