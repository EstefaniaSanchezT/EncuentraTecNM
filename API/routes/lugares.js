// backend/routes/lugares.js

// Función ficticia para obtener la ruta del gif
function obtenerRutaGif(lugarId) {
  // Implementa la lógica para obtener la ruta del gif basada en el lugarId
  return `${lugarId}`;
}

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DB
});

router.get('/', (req, res) => {
  const searchTerm = req.query.search;

  let query = 'SELECT * FROM lugares';

  if (searchTerm) {
    query += ` WHERE Nombre LIKE '%${searchTerm}%'`;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Modificación para incluir la propiedad "Gif" en cada lugar
      const lugaresConGif = results.map(lugar => ({
        ...lugar,
        Gif: obtenerRutaGif(lugar.id) // Asume que hay una función obtenerRutaGif que devuelve la ruta del gif
      }));

      res.json({ lugares: lugaresConGif });
    }
  });
});

module.exports = router;
