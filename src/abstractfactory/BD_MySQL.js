const IProductoDAO = require('./IProductoDAO');
const Producto = require('../models/Producto');

class BD_MySQL extends IProductoDAO {
    constructor() {
        super();
        this.productos = [
            new Producto(1, 'Producto MySQL 1', 100.0),
            new Producto(2, 'Producto MySQL 2', 200.0)
        ];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProducto(id) {
        return this.productos.find(p => p.id === id) || null;
    }

    actualizarProducto(producto) {
        const index = this.productos.findIndex(p => p.id === producto.id);
        if (index !== -1) {
            this.productos[index] = producto;
        }
    }

    eliminarProducto(id) {
        this.productos = this.productos.filter(p => p.id !== id);
    }
}

module.exports = BD_MySQL;
