/**
 * Created by jaime on 24/04/2018.
 */
var arregloNumeros = [1, 2, 3, 4, 5];
//let arregloUsuarios: Array<UsuarioArreglo> =[
var arregloUsuarios = [
    {
        nombre: 'jaime',
        edad: 28
    },
    {
        nombre: 'gustavo',
        edad: 10
    },
    {
        nombre: 'lizeth',
        edad: 70
    },
    {
        nombre: 'marcia',
        edad: 32
    },
    {
        nombre: 'bryan',
        edad: 25
    },
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (arregloDeNumeros) {
};
var facultades1 = function () {
    return ['facultad1', 'facultad2'];
};
var facultades = function (a) { return ['Facultade1', 'Facultad2']; };
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
});
var sumar = 0;
var resultadoForEachDos = arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadoDeLaSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo;
}, 0);
console.log('resultado de la suma', resultadoDeLaSuma);
var resultadoDeLaResta = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultado de la resta', resultadoDeLaResta);
var resultadoDeLasEdades = arregloUsuarios.reduce(function (totalEdadAcumulada, usuarioArreglo) {
    return totalEdadAcumulada + usuarioArreglo.edad;
}, 20);
console.log('resultado de las edades', resultadoDeLasEdades);
