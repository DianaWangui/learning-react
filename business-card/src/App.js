import React from 'react';
import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Footer />
    </div>
  );
}

export default App;
