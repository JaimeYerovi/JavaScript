/**
 * Created by jaime on 24/04/2018.
 */


let arregloNumeros = [1,2,3,4,5];

//let arregloUsuarios: Array<UsuarioArreglo> =[
let arregloUsuarios: UsuarioArreglo[] = [

    {
        nombre: 'jaime',
            edad : 28
    },
    {
        nombre: 'gustavo',
        edad : 10
    },
    {
        nombre: 'lizeth',
        edad : 70
    },
    {
        nombre: 'marcia',
        edad : 32
    },
    {
        nombre: 'bryan',
        edad : 25
    },

];

let sumarDosNumeros = (numeroUno: number, numeroDos:number)=>{ //fat arrow function

    return numeroUno + numeroDos;

};

let totalEdades = arregloDeNumeros =>{


};



let facultades1 = function () {
    return ['facultad1', 'facultad2']
}

let facultades = a=>['Facultade1','Facultad2'];





let resultadoForEach = arregloNumeros.forEach(
    (valor,indice,arreglo)=>{
        console.log('valor', valor);
        console.log('indice', indice);
        console.log('arreglo', arreglo);
    }

);



let sumar = 0;

let resultadoForEachDos = arregloNumeros.forEach(
    (valor,indice,arreglo)=>{
        sumar = sumar + valor
        console.log(sumar);
    }
);

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo)=>{
        return totalAcumulado+ valorArreglo;
    },

    0
);
console.log('resultado de la suma', resultadoDeLaSuma);

let resultadoDeLaResta = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo)=>{
        return totalAcumulado - valorArreglo;
    },

    20
);

console.log('resultado de la resta', resultadoDeLaResta);


let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalEdadAcumulada, usuarioArreglo:UsuarioArreglo)=>{
        return totalEdadAcumulada + usuarioArreglo.edad;
    },

    20
);
console.log('resultado de las edades', resultadoDeLasEdades);


interface UsuarioArreglo {

    nombre: string;
    edad: number;

}

