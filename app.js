const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/swaggerConfig'); // Archivo de configuración que acabas de crear
const productoRoutes = require('./src/routes/productoRoutes'); // Asegúrate de tener tu archivo de rutas

const app = express();

app.use(express.json());

// Rutas de tu API
app.use('/productos', productoRoutes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
