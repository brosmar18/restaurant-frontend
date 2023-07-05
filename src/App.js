import React from 'react'
import { AboutUs, Awards, FindUs, Footer, Gallery, Header, Intro, Menu } from './container';
import { NavBar } from './components';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuPage } from './pages';


const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </Router>
      {/* <Header />
      <AboutUs />
      <Menu />
      <Intro />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer /> */}
    </div>
  )
}

export default App;