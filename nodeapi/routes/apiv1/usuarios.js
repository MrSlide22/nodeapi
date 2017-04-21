'use strict';

const config = require('../../config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

router.post('/login', (req, res, next) => {
    // recibimos credenciales
    const email = req.body.email;
    const clave = req.body.clave;

    // buscamos el usuario en la base de datos
    Usuario.findOne({ email: email }).exec((err, usuario) => {
        if (err) {
            next(err);
            return;
        }

        if (!usuario || clave !== usuario.clave) {
            res.json({ success: false, error: 'Credenciales incorrectas' });
            return;
        }

        // Creamos un token JWT
        jwt.sign({ usuario_id: usuario._id }, config.jwtSecret, config.jwtConfig,
            (err, token) => {
                if (err) {
                    next(err);
                    return;
                }

                // Se lo devolvemos
                res.json({ success: true, token: token });
            });
    });
});

module.exports = router;