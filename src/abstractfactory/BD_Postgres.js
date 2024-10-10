const IProductoDAO = require('./IProductoDAO');
const Producto = require('../models/Producto');

class BD_Postgres extends IProductoDAO {
    constructor() {
        super();
        this.productos = new Set();
        // Datos por defecto
        this.productos.add(new Producto(1, 'Producto Postgres 1', 120.0));
        this.productos.add(new Producto(2, 'Producto Postgres 2', 220.0));
    }

    agregarProducto(producto) {
        this.productos.add(producto);
    }

    obtenerProducto(id) {
        return [...this.productos].find(p => p.id === id) || null;
    }

    actualizarProducto(producto) {
        this.eliminarProducto(producto.id);
        this.agregarProducto(producto);
    }

    eliminarProducto(id) {
        this.productos = new Set([...this.productos].filter(p => p.id !== id));
    }
}

module.exports = BD_Postgres;
