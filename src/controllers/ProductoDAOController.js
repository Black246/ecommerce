const express = require('express');
const router = express.Router();
const ConfiguracionBD = require('../config/ConfiguracionBD');
const Producto = require('../models/Producto');

// Configurar la base de datos (puedes cambiar el motor aquí: mysql, oracle, postgres)
ConfiguracionBD.configureAdapterDB('postgres');
const productoDAO = ConfiguracionBD.getProductoDAO();

// Agregar un producto
router.post('/', (req, res) => {
    const { id, descripcion, precio } = req.body;
    const producto = new Producto(id, descripcion, precio);
    productoDAO.agregarProducto(producto);
    res.status(201).send('Producto agregado exitosamente');
});

// Obtener un producto por ID
router.get('/:id', (req, res) => {
    const producto = productoDAO.obtenerProducto(parseInt(req.params.id));
    if (!producto) return res.status(404).send('Producto no encontrado');
    res.json(producto);
});

// Actualizar un producto
router.put('/', (req, res) => {
    const { id, descripcion, precio } = req.body;
    const producto = new Producto(id, descripcion, precio);
    productoDAO.actualizarProducto(producto);
    res.send('Producto actualizado exitosamente');
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
    productoDAO.eliminarProducto(parseInt(req.params.id));
    res.status(204).send('Producto eliminado exitosamente');
});

module.exports = router;
