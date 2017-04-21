'use strict';

const mongoose = require('mongoose');

// creamos un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        index: true
    }
});

// creamos metodo estatico en el modelo
// para recuperar lista de agentes con filtros
agenteSchema.statics.list = function (
    criterios, skip, limit, select, sort,
    callback) {

    const query = Agente.find(criterios);
    query.skip(skip);
    query.limit(limit);
    query.select(select);
    query.sort(sort);
    query.exec(callback);
}

// creamos el modelo de agente
var Agente = mongoose.model('Agente', agenteSchema);

// no necesitamos exportal el modelo porque
// podemos recuperarlo donde queramos con
// mongoose.model('Agente');