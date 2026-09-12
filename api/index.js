const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const mensaje = process.env.MESSAGE || 'Hola desde la API por defecto';
  res.json({ message: mensaje });
});

app.listen(puerto, () => {
  console.log(`Servidor iniciado en puerto ${puerto}`);
});