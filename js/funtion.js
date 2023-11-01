console.log("prueba de conexion");
// ******************************** TIPO DE VARIABLES
// const PARA VARIABLES CONSTANTES 
const pi = 3.1416;
const pul = 2.54;
const name = "Johan Sebastian Bermudez Contreras";
// var PARA VARIABLES GLOBALES
var cal_days= 13;
// ler PARA VARIABLES DE BLOQUE O LOCALES 
let j = 0;
let counter = 0;


// ******************************** FORMAS DE IMPRESION 
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

// ******************************** TIPOS DE DATOS 
// NUMERICOS  
var number_one = 10;
var number_two = 2.3;
// STRING 
var text = "Soy un texto";
// BOOLEANOS
var boolen = true ; //false 
// ARRAY
let array_num = [1,2,3,4,5];
let array_tex =  ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
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
    " resta = "+ resta  +
    " multiplicacion = "+ multiplicaion  +
    " division = "+ division +
    " modulo = "+ modulo  
);

var respuesta =     "suma = "+ suma  + "<br>" +
"resta = "+ resta  + "<br>" +
"multiplicacion = "+ multiplicaion  + "<br>" +
"division = "+ division.toFixed(2)  + "<br>" + 
"modulo = "+ modulo.toFixed(2)  ;

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    background: 'fff',
    icon: 'success',
    title: 'Respuesta:',
    html: respuesta
});

// ############ OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES (inverse, )
// AND && CON IF

var bool = false;
var number = 7;
if(!bool && number == 7){
    console.log("Entra al if");
    
}else{
    console.log("Entra al else");
}

// OR || CON IF

var age = 18;

if (age === 32 || number === 7){
    console.log("Entra al if");
    age++;
}else{
    console.log("Entra al else");
    age--;
}
console.log(age);

// FOR

for (let index = 0; index < array_tex.length; index++) {
    const element = array_tex[index]+" "+(index+1);
    console.log(element);
}

// WHILE
let position = 0; 
while (position < array_tex.length) {
    console.log(array_tex[position]+" "+(position+1));
    position++;
}

// DO WHILE 
let w = 0;
do {
    console.log(array_tex[w]+" "+(w+1));
    w++;
} while (w < array_tex.length);

// EVENTOS Y FUNCIONES 

function load_page() {
    // ejm();
    // ejm2();
}

function ejm(){
    alert("BIENVENIDO");
}
function ejm2(){
    alert("BIENVENIDO2");
}
function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if (box_onblur.value.length <=2) {
        alert("problem text")
    }
}

const btn_changeColor = document.querySelector("#change_color");
