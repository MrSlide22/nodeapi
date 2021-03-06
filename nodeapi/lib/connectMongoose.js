'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('err', err => {
    console.log('Error de conexion', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conexion establecida con MongoDB');
});

// Realizamos la conexion
mongoose.connect('mongodb://localhost/cursonode');

// no necesitamos exportar la conexion ya que mongoose la gestiona por nosotros