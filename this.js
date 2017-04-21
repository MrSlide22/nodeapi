
function Coche(){
    this.ruedas = 4;
    this.cuantasRuedas = function(){
        console.log('tiene', this.ruedas);
    }
}

const coche = new Coche();

coche.cuantasRuedas();

const numRuedas = coche.cuantasRuedas;