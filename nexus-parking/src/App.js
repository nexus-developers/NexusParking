import React from 'react';

import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import store from './store'

import Routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'
import Global from './Global/Global'

export default function App() {
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


