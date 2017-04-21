'use strict';

const fs = require('fs');
const path = require('path');

// funccion que lea la version de un modulo
function versionModulo(nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    // if (fs.existsSync(fichero)) {
    fs.readFile(fichero, 'utf8', function (err, datos) {
        if (err) {
            callback(err);
            return;
        }

        const packageJSON = JSON.parse(datos);
        callback(null, packageJSON.version);
    });
    // }
}

// llamamos a la funccion
/*versionModulo('chance', function (err, version) {
    if (err) { 
        console.log('Error!', err);
        return;
    }

    console.log('Version de chance es:', version);
});*/

module.exports = versionModulo;