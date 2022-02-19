import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About'

function App () {
  return (
    <div>
      <section>
        <Header></Header>
      </section>
      {/* <Nav></Nav> */}
      <main>
        
        <About></About>
        
      </main>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App;