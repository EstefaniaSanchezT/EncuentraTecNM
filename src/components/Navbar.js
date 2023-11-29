// frontend/src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

function Navbar({ onSearchChange }) {
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearchChange(searchTerm);
  };

  return (
    <div className="navbar-container">
      {/* Otros elementos de la barra de navegación */}
      <h2>EncuentraTecNM</h2>
      <input
        type="text"
        placeholder="Buscar"
        onChange={handleSearchChange}
        className="searchInput"
      />
    </div>
  );
}

export default Navbar;
