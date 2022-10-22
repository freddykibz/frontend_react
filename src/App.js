import React from 'react';
import { About, Footer, Skills, Works, Testimonial,Header,} from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}
export default App