const IProductoDAO = require('./IProductoDAO');
const Producto = require('../models/Producto');

class BD_Oracle extends IProductoDAO {
    constructor() {
        super();
        this.productos = new Map();
        // Datos por defecto
        this.productos.set(1, new Producto(1, 'Producto Oracle 1', 150.0));
        this.productos.set(2, new Producto(2, 'Producto Oracle 2', 250.0));
    }

    agregarProducto(producto) {
        this.productos.set(producto.id, producto);
    }

    obtenerProducto(id) {
        return this.productos.get(id) || null;
    }

    actualizarProducto(producto) {
        this.productos.set(producto.id, producto);
    }

    eliminarProducto(id) {
        this.productos.delete(id);
    }
}

module.exports = BD_Oracle;
