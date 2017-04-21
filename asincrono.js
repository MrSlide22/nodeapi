'use strict';

// hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2Segundos("Hola mundo", function () {
    escribeTras2Segundos("Wake up neo...", function () {
        console.log('fin');
    });
});
