/**
 * Created by jaime on 17/04/2018.
 */


var nombre = "23";
var edad = 23;
var fecha = new Date();
var casado = false;
var casa = undefined;
var carro = null;


var arreglo = []

console.log(fecha);

console.log(casa? "Verdadero" : "Falso");

console.log(carro? "Verdadero" : "Falso");

console.log(arreglo? "Verdadero" : "Falso");

console.log(1? "Verdadero" : "Falso");

console.log(0? "Verdadero" : "Falso");

console.log(-1? "Verdadero" : "Falso");

if (nombre === edad) {
    console.log("verdadero")
} else {
    console.log("Falso")
}

var usuario = {

    "nombre":"Jaime",
    apellido:"Yerovi",
    cedula:'1717216616',

    imprimirEnConsola: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.cedula)
    }

};


console.log( usuario.imprimirEnConsola());

function sumarDosNumeros(numeroUno, numeroDos) {
    return numeroUno+numeroDos;
};

var sumarDosNumerosV2 = function amigo(numeroUno, numeroDos) {
    return numeroUno+numeroDos;
};

console.log(sumarDosNumeros(1,2));

console.log(sumarDosNumerosV2(1,2));
