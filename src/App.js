import React from 'react'
import { AboutUs, Awards, FindUs, Footer, Gallery, Header, Intro, Menu} from './container';
import { NavBar } from './components';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <Intro />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
