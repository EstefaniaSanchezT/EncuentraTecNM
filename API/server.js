const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const config = require('./config');

const app = express();
const port = 5000;

// Configuración para servir archivos estáticos desde la carpeta 'img'
app.use('/img', express.static('img'));

const db = mysql.createConnection({
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DB
});

db.connect();

app.use(cors());
app.use(bodyParser.json());

app.get('/lugares', (req, res) => {
  db.query('SELECT * FROM lugares', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.json({ lugares: results });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
