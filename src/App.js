// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DetallesLugar from './components/DetallesLugar';
	

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<DetallesLugar />} />
      </Routes>
    </Router>
  );
}

export default App;
