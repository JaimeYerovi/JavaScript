/**
 * Created by jaime on 20/04/2018.
 */

let segundoNombre: string = 'Gustavo';

const cedula = '1717216616';

segundoNombre = 'Jaime';

const URL_POLI = 'http://www.epn.edu.ec';


//segundoNombre = 123; //Duck Typing

let nombre: String;

let edad: Number = 28;

let fecha: Date = new Date();

let casado: boolean = false;

//let mascotas: object = {};


class Usuario {

    public mNombre: String;
    private mEdad: Number;
    protected mCedula: String;


    constructor(nombre: String,
                edad: Number,
                cedula: String) {

        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    public imprimirEnConsola() {
        //template springs
        console.log(`El usuario se llama ${this.mNombre} la cedula del usuario es :${this.mCedula}, la edad del usuario es: ${this.mEdad}`);
    }


}

let usuarios: Usuario = new Usuario('Jaime', 23, '1717216616');


let usuarioOtro ={

    mNombre: 'Jaime',
    mEdad: 23,
    mCeduca: '1717216616'

};

console.log(usuarios.imprimirEnConsola());
console.log(usuarioOtro);

function noHagoNada(){}
console.log('no hago nada', noHagoNada())

let usuarioTres:Usuario;

interface UsuarioDos{

    mNombre: String;
    mEdad: Number;
    mCedula: String;

    imprimirEnConsola(nombre:String):void;

}

let usuarioCuatro: UsuarioDos;

usuarioCuatro = {



}