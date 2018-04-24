/**
 * Created by jaime on 20/04/2018.
 */
var segundoNombre = 'Gustavo';
var cedula = '1717216616';
segundoNombre = 'Jaime';
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123; //Duck Typing
var nombre;
var edad = 28;
var fecha = new Date();
var casado = false;
//let mascotas: object = {};
var Usuario = (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //template springs
        console.log("El usuario se llama " + this.mNombre + " la cedula del usuario es :" + this.mCedula + ", la edad del usuario es: " + this.mEdad);
    };
    return Usuario;
}());
var usuarios = new Usuario('Jaime', 23, '1717216616');
var usuarioOtro = {
    mNombre: 'Jaime',
    mEdad: 23,
    mCeduca: '1717216616'
};
console.log(usuarios.imprimirEnConsola());
console.log(usuarioOtro);
function noHagoNada() {
}
console.log('no hago nada', noHagoNada());
var usuarioTres;
var usuarioCuatro;
var UsuarioTres = (function () {
    function UsuarioTres(mNombre, mEdad, mCedula) {
    }
    return UsuarioTres;
}());
