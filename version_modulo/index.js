'use strict';

const fs = require('fs');
const async = require('async');
// require usa una ruta relativa a este fichero js
const vMod = require('./versionModulo');

function versionModulos(callback) {
    // Esta ruta es relativa a la raiz del proyecto
    fs.readdir('./node_modules', function (err, lista) {
        if (err) {
            callback(err);
            return;
        }

        console.log(lista);

        // para cada elemento de la lista ejecutamos vMod
        // concat recibe: un array, la funcion a eecutar en cada elemento y un callback final
        async.concat(lista,
            // iterador
            function iterador(elemento, callbackIterador) {
                if (elemento === '.bin') {
                    callbackIterador(null);
                    return;
                }

                vMod(elemento, function (err, version) {
                    if (err) {
                        callbackIterador(err);
                        return;
                    }

                    callbackIterador(null, { modulo: elemento, version: version });
                    return;
                });
            },
            // finalizador
            callback
        );
    });
}

versionModulos(function (err, datos) {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Los modulos son:', datos);
});