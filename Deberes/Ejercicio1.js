/**
 * Created by jaime on 23/04/2018.
 */

function validarNumeroDeStringsEnArreglo(arreglo) {




    var aux = 0

    for(var i=0;i<arreglo.length;i++){

        if (typeof arreglo[i] == 'string') {
            aux++;
        }
    }

    console.log(aux)
}

console.log(validarNumeroDeStringsEnArreglo(['uno',1,'dos',2,'tres','cuatro']));