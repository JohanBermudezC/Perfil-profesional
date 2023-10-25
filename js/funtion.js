console.log("prueba de conexion");
// ********************************TIPO DE VARIABLES
// const PARA VARIABLES CONSTANTES 
const pi = 3.1416;
const pul = 2.54;
const name = "Johan Sebastian Bermudez Contreras";
// var PARA VARIABLES GLOBALES
var cal_days= 13;
// ler PARA VARIABLES DE BLOQUE O LOCALES 
let j = 0;
let counter = 0;


// ********************************FORMAS DE IMPRESION 
// alert 
// alert(name);
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);
// pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Johan Bermudez</h1>";
document.getElementById("box_two").innerText = "<h1>Johan Bermudez</h1>";
// LIBRERIAS
Swal.fire({
    icon: 'info',
    title: 'Johan Bermudez',
    text: name,
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end',
})
// Swal.fire(name);

// ********************************TIPOS DE DATOS 
// NUMERICOS 
var number_one = 10;
var number_two = 2.3;
// SSTRING 
var text = "Soy un texto";
// BOOLEANOS
var boolen = true ; //false 
// ARRAY
let array_num = [1,2,3,4,5];
let array_tex =  ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];
let array_mix = [1, "a", 2.4, "b"];
let array_mul = [
    {name:"Johan", last_name:"Bermudez", age: "18"},
    {name:"cielo", last_name:"Bermudez", age: "21"},
    {name:"jose", last_name:"Bermudez", age: "20"},
    {name:"francy", last_name:"Bermudez", age: "43"},
];
// ******************************** OPERACIONES BASICAS 
// SUMA
var suma = number_one + number_two;
console.log("suma = "+ suma);
// RESTA
var resta = number_one - number_two;
console.log("resta = "+ resta);
// MULTIPLICACION
var multiplicaion = number_one * number_two;
console.log("multiplicacion = "+ multiplicaion);
// DIVISION
var division = number_one / number_two;
console.log("division = "+ division);
// MODULO
var modulo = number_one % number_two;
console.log("modulo = "+ modulo);


console.log(
    "suma = "+ suma  +
    "resta = "+ resta  +
    "multiplicacion = "+ multiplicaion  +
    "division = "+ division +
    "modulo = "+ modulo  
);

var respuesta =     "suma = "+ suma  + "<br>" +
"resta = "+ resta  + "<br>" +
"multiplicacion = "+ multiplicaion  + "<br>" +
"division = "+ division.toFixed(2)  + "<br>" + 
"modulo = "+ modulo.toFixed(2)  ;

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    background: '#000',
    icon: 'success',
    title: 'Respuesta:',
    html: respuesta
});