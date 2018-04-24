/**
 * Created by jaime on 23/04/2018.
 */

function generador(megawatts, estado) {

    this.megawatts = megawatts;

    this.estado = estado;

}


var generadores = [];


var i;


for (i = 0; i < 4; i++) {

    generadores.push(new generador(62, 'prendido'));

}


var j;


for (j = 4; j < 19; j++) {

    generadores.push(new generador(124, 'prendido'));

}


var totalMW = 0;


function apagarPares() {

    var i;


    for (i = 1; i < generadores.length; i += 2) {

        generadores[i].estado = 'apagado'

    }

}


function apagarImpares() {

    var i;


    for (i = 0; i < generadores.length; i += 2) {

        generadores[i].estado = 'apagado'

    }

}


function cambio(opcion) {

    switch (opcion) {

        case 1: {

            apagarPares();

            break;

        }

        case 2: {

            apagarImpares();

            break;

        }

        default: {
            break;
        }

    }


    var i = 0;


    while (i < 4) {

        if (generadores[i].estado == 'prendido') {

            totalMW += generadores[i].megawatts;

            console.log('Generador #' + (i + 1) + ' está ' + generadores[i].estado + ', añadiendo ' + generadores[i].megawatts + ' MW para un total de ' + totalMW + ' MW.');

        } else {

            console.log('Generador #' + (i + 1) + ' está ' + generadores[i].estado + '.');

        }

        i++;

    }


    var j;


    for (j = 4; j < generadores.length; j++) {

        if (generadores[j].estado == 'prendido') {

            totalMW += generadores[j].megawatts;

            console.log('Generador #' + (j + 1) + ' está ' + generadores[j].estado + ', añadiendo ' + generadores[j].megawatts + ' MW para un total de ' + totalMW + ' MW.');

        } else {

            console.log('Generador #' + (j + 1) + ' está ' + generadores[j].estado + '.');

        }

    }

}


cambio();