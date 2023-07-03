import React from 'react'
import { AboutUs, Awards, Chef, FindUs, Footer, Gallery, Header, Intro, Menu} from './container';
import { NavBar } from './components';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Awards />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App
