import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Global from './Global/Global'

import  Routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes/>
        <Sidebar/>
      </BrowserRouter>
      <Global/>
    </>
  );
}

export default App;
