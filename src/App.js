import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/About'; // Komponen Tentang
import Contact from './components/contact'; // Komponen Kontak
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/tentang">Tentang</Link></li>
          <li><Link to="/kontak">Kontak</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/tentang">
          <About />
        </Route>
        <Route path="/kontak">
          <Contact />
        </Route>
        <Route path="/">
          <MainContent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
