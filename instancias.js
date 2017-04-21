'use strict';

// creamos un consturctor de objetos
function Fruta(){
    let nombre;
    this.setNombre = function(val){ nombre = val};
    this.getNombre = function(){ return nombre};
}

// creamos objeto fruta
const fruta = new Fruta();

fruta.setNombre('Limón');

console.log(fruta, fruta.getNombre());