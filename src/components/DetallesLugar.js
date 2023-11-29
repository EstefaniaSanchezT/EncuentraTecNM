import React from 'react';
import '../styles/DetallesLugar.css';

// Función ficticia para obtener la ruta del gif


function DetallesLugar({ lugar, onClose }) {

  const gifPath = lugar && lugar.Gif;

  function obtenerRutaGif(lugarId) {

    return `http://localhost:5000/${lugar.Gif}`;
  }
  return (
    <div className="detalles-container">
      <div className="detalles-content">
        <h2>{lugar.Nombre}</h2>
        <p>Horario: {lugar.Horario}</p>
        <p>Descripción: {lugar.Descripción}</p>
        <p>Observaciones: {lugar.Observaciones}</p>
        {gifPath && <img src={obtenerRutaGif(lugar.id)} alt="GIF" className="detalles-gif" />}
        <button onClick={onClose} className="close-button">Cerrar Detalles</button>
      </div>
    </div>
  );
}

export default DetallesLugar;
