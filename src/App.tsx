import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AddLiquidity from './components/AddLiquidity';
import Header from './components/Header';
import Voter from './components/Voter';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AddLiquidity />} />
        <Route path='/liquidity-pool' element={<AddLiquidity />} />
        <Route path='/voter' element={<Voter />} />
      </Routes>
    </>
  );
}

export default App;
