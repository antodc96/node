const express = require('express');
const router = express.Router();

const productos = require('../productos');
const connection = require('../db');

 router.get('/productos', (req, res) => {
  connection.query('SELECT *FROM productos', (error, results) =>{
    if (error) {throwerror}

    res.render('productos/index', {productos: productos.all()});
  });
 })

router.get('/productos/:id', (req, res) => {
   res.render('productos/show', { producto: productos.find(req.params.id) });
});


module.exports = router;