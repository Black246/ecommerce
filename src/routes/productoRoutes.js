const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El ID del producto
 *         descripcion:
 *           type: string
 *           description: La descripción del producto
 *         precio:
 *           type: number
 *           description: El precio del producto
 *       example:
 *         id: 1
 *         descripcion: Producto de ejemplo
 *         precio: 100.0
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtiene todos los productos
 *     responses:
 *       200:
 *         description: Lista de todos los productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
    router.get('/', (req, res) => {
        // Lógica para obtener productos
    });

    /**
   * @swagger
   * /productos/{id}:
   *   get:
   *     summary: Obtiene un producto por ID
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: El ID del producto
   *     responses:
   *       200:
   *         description: El producto solicitado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Producto'
   *       404:
   *         description: Producto no encontrado
   */
    router.get('/:id', (req, res) => {
        // Lógica para obtener un producto por ID
    });

    /**
   * @swagger
   * /productos:
   *   post:
   *     summary: Agrega un nuevo producto
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Producto'
   *     responses:
   *       201:
   *         description: Producto agregado exitosamente
   */
    router.post('/', (req, res) => {
        // Lógica para agregar un producto
    });

    /**
   * @swagger
   * /productos/{id}:
   *   delete:
   *     summary: Elimina un producto
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: integer
   *         required: true
   *         description: El ID del producto
   *     responses:
   *       200:
   *         description: Producto eliminado exitosamente
   */
    router.delete('/:id', (req, res) => {
        // Lógica para eliminar un producto
    });  
    
module.exports = router;