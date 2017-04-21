'use strict';

const basicAuth = require('basic-auth');

module.exports = (us, pss) => {


    return (req, res, next) => {
        
        // pedimos a basicauth que intente sacar credenciales
        const user = basicAuth(req);

        if (!user || user.name !== us || user.pass !== pss) {
            // si no tengo credenciales, respuesta con cabeceras pidiendolas
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.sendStatus(401);
            return;
        }
        next();
    };
}

