/**
 * Created by jaime on 23/04/2018.
 */


totalOsos=0;

function calculoOsos(meses) {

    for (j = 4; j < meses; j++) {

        totalOsos += (meses*4);

    }

    if(totalOsos>10000){
        totalOsos = (totalOsos/2)
        console.log('Removiendo '+totalOsos+' osos de anteojos de la poblacion')
        console.log('Van a existir '+ totalOsos +' osos de anteojos en el mes ' +meses);
    }else{
        console.log('Van a existir '+ totalOsos +' osos de anteojos en el mes ' +meses);

    }

}

console.log(calculoOsos(52))