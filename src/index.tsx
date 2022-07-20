import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { BrowserRouter } from 'react-router-dom';

const getLibrary = (provider: provider) => {
  return new Web3(provider);
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
