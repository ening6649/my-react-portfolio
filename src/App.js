import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'
import Project from './components/Project';

function App () {
  return (
    <div>
      <section>
        <Header></Header>
      </section>
      {/* <Nav></Nav> */}
      <main>
        
        <About></About>
        <Project></Project>
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App;