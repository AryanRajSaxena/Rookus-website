import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Platform from './components/Platform';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Platform />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;