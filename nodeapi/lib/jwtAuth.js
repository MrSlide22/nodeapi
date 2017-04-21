'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {

    // recogemos el token jwt
    const token = req.body.token || req.query.token || req.get('x-access-token');

    // si no llega el token responder no autorizado
    if(!token){
        const error = new Error('Auth token not found');
        error.status = 401;
        next(error);
        return;
    }

    // validar el token
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err){
            const error = new Error('Token invalid');
            error.status = 401;
            return next(error);
        }

        req.usuario_id = decoded.usuario_id;
        next();
    });
};
