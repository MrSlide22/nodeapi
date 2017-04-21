'use strict';

function suma(a, b, callback) {
    const resultado = a + b;

    setTimeout(function () {
        callback(resultado);
    }, 2000);
}


suma(1, 2, function (res) {
    console.log(res);
});

console.log('fin');