const BD_MySQL = require('../abstractfactory/BD_MySQL');
const BD_Oracle = require('../abstractfactory/BD_Oracle');
const BD_Postgres = require('../abstractfactory/BD_Postgres');

let productoDAO = null;

const ConfiguracionBD = {
    configureAdapterDB: (motorDB) => {
        switch (motorDB.toLowerCase()) {
            case 'mysql':
                productoDAO = new BD_MySQL();
                break;
            case 'oracle':
                productoDAO = new BD_Oracle();
                break;
            case 'postgres':
                productoDAO = new BD_Postgres();
                break;
            default:
                throw new Error('Motor de base de datos no soportado.');
        }
    },

    getProductoDAO: () => {
        if (!productoDAO) {
            throw new Error('No se ha configurado ningún motor de base de datos.');
        }
        return productoDAO;
    }
};

module.exports = ConfiguracionBD;
