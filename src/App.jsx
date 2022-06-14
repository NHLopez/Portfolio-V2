import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/Navbar'
import Home from './routes/Home/Home'
import Contact from './routes/Contact/Contact'
import Portfolio from './routes/Portfolio/Portfolio'
import ParticleBackground from './components/Particles/ParticleBackground'




function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <ParticleBackground/>
      
    </BrowserRouter>
      
  );
}

export default App;
