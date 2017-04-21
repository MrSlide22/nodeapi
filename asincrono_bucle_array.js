'use strict';

// hacemos funcion asincrona
function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log('texto' + texto);
        callback();
    }, 2000);
}

// funcion auxiliar para bucle en serie
function serie(arr, fn, callback) {

    if (arr.length === 0) {
        callback();
        return;
    }

    fn(arr.shift(), function () {
        serie(arr, fn, callback);
    });
}

serie([1, 'hola', 3, 4], escribeTras2Segundos, function () {
    console.log('fin');
});