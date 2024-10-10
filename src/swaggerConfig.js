const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'Ecommerce API',
        version: '1.0.0',
        description: 'API de ejemplo para gestionar productos',
        },
        servers: [
        {
            url: 'http://localhost:3000', // URL base de tu API
        },
        ],
    },
  apis: ['./src/routes/*.js'], // Aquí puedes definir la ruta donde Swagger encontrará tus rutas y anotaciones
};

const swaggerSpecs = swaggerJsdoc(options);

module.exports = swaggerSpecs;
