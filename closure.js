'use strict;'

const creaAgente = function(nombre){
    let edad = 0;
    return {
        setNombre: function(val){
            nombre = val;
        },
        getNombre: function(val){
            return nombre;
        },
        saluda: function(){
            console.log('Hola, soy', nombre);
        }
    }
};

const neo = creaAgente('neo');

console.log(neo.getNombre());

const trinity = creaAgente('trinity');

console.log(neo.getNombre(), trinity.getNombre());

setTimeout(neo.saluda, 2000);