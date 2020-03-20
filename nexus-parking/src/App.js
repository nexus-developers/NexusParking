import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Global from './Global/Global'

import Routes from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <Global/>
    </>
  );
}

export default App;
