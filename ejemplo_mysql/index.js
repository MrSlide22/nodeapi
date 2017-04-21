'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

conn.connect();

conn.query('SELECT * FROM agentes', function (err, rows, fields) {
    if(err){
        console.log('Error', err);
        process.exit(1);
    }

    rows.forEach(function(agente){
        console.log(agente.idagentes, agente.name, agente.age);
    });

    conn.end();
});