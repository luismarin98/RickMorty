import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllCharacters, IDCharacter, NameCharacter } from './routes';
import Navbar from './components/Navbar';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/name-character' element={<NameCharacter />} />
        <Route path='/all-character' element={<AllCharacters />} />
        <Route path='/id-character' element={<IDCharacter />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
