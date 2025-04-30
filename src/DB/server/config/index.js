const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db'); 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/articulos', (req, res) => {
  const { name, price, image, description, estado, serie, category, longDescription } = req.body;

  const sql = `
    INSERT INTO articulos 
    (NombreArt, PrecioArt, ImagenArt, DescripcionArt, EstadoArt, IdVen, Tipo_oferta, Fecha_PublicacionArt, CantidadArt)
    VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?)
  `;

  const values = [
    name,
    price,
    image,
    description,
    estado,
    1,
    price == 0 ? 'donacion' : 'venta',
    1 
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      return res.status(500).json({ error: 'Error al insertar en la base de datos' });
    }

    res.status(201).json({ message: 'Artículo insertado correctamente' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
