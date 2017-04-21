'use strict';

// hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log('texto' + texto);
        callback();
    }, 2000);
}

// funcion auxiliar para bucle en serie
function serie(n, fn, callback) {

    if (n == 0) {
        callback();
        return;
    }

    n--;

    fn(n, function () {
        serie(n, fn, callback);
    });
}

serie(5, escribeTras2Segundos, function () {
    console.log('fin');
});