'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
// le pedimos a mongoose el modelo de agente
const Agente = mongoose.model('Agente');

const jwtAuth = require('../../lib/jwtAuth');
router.use(jwtAuth);

//const basicAuth = require('../../lib/basicAuth');
// router.use(basicAuth('admin', 'god'));

// GET /apiv1/agente
router.get('/', (req, res, next) => {

    console.log('usuario autenticado con _id:', req.usuario_id);

    // recogemos parametros de busqueda
    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const select = req.query.select;
    const sort = req.query.sort;

    const criterios = {};

    if (name) {
        criterios.name = name;
    }

    if (age) {
        criterios.age = age;
    }

    // recuperamos una lista de agentes
    Agente.list(criterios, skip, limit, select, sort, (err, agentes) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: agentes });
    });
});

// GET /apiv1/agentes/:id
router.get('/:id', (req, res, next) => {

    const _id = req.params.id;

    Agente.findOne({ _id: _id }).exec((err, agente) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: agente });
    });
});

// POST /apiv1/agentes
router.post('/', (req, res, next) => {

    const datosAgente = req.body;
    const agente = new Agente(datosAgente);

    agente.save((err, agenteCreado) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true, result: agenteCreado });
    });
});

// PUT /apiv1/agentes
router.put('/:id', (req, res, next) => {

    const _id = req.params.id;
    const datosAgente = req.body;

    Agente.update({ _id: _id }, datosAgente, (err) => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true });
    });
});

// DELETE /apiv1/agentes
router.delete('/:id', (req, res, next) => {

    const _id = req.params.id

    Agente.remove({ _id: _id }, err => {
        if (err) {
            next(err);
            return;
        }

        res.json({ success: true });
    });
});

module.exports = router;