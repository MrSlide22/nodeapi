'use strict';

const mongoose = require('mongoose');

// creamos un esquema
const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    clave: String
});

// creamos el modelo de usuario
var Usuario = mongoose.model('Usuario', usuarioSchema);

// no necesitamos exportal el modelo porque
// podemos recuperarlo donde queramos con   
// mongoose.model('Usuario');