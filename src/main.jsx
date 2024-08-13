import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header/index.jsx'

import { HomeRoute, VidaMarinhaRoute, MeioAmbienteRoute } from './Routes/pagesRoute/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Footer from './components/Structural/footer/footer.jsx';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing:border-box;
  max-height: 100vh;
  max-width: 100vw;
}
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: linear-gradient(90deg, #fff 10%, #9cf09c 30%, #00ff50);
    
  }
  ::-webkit-scrollbar {
        width: 0px;
      }
  code {
    font-family: "Open Sans", sans-serif;
  }

  li {
    list-style: none;    
  }
  a {
    text-decoration: none;
  }
  `

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/MeioAmbiente" element={<MeioAmbienteRoute />} />
        <Route path='/VidaMarinha' element={<VidaMarinhaRoute />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>

)
