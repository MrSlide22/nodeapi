'use strict';

function Persona(nombre){
    this.nombre = nombre;
}

const persona = new Persona('Neo');

// asignamos un metodo al prototipo de todas las personas
Persona.prototype.saluda = function(){
    console.log('Hola me llamo', this.nombre);
}

persona.saluda();

// -------- HERENCIA

function Agente(nombre){
    // Ejecuta el constructor de Persona con el this de Agente
    Persona.call(this, nombre);
}

// Asignamos como prototipo una persona
Agente.prototype = new Persona('soy un prototipo');

const agente = new Agente('Smith');

agente.saluda();

// ----------- HERENCIA MULTIPLE

function SuperHeroe(){
    this.vuela = function(){
        console.log(this.nombre, 'vuela');
    };
    this.esquivaBalas = function(){
        console.log(this.nombre, 'esquiva balas');
    };
}

// asignar todas las propiedades (y metodos) de un superheroe al
// prototipo de agente

Object.assign(Agente.prototype, new SuperHeroe);

agente.vuela();
agente.esquivaBalas();