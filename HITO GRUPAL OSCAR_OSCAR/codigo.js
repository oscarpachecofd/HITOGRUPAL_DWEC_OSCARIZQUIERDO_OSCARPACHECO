// Declaración y asignación de variables
var texto = "Soy una persona";
var numeroSinDecimales = 10;
var numeroConDecimales = 3.5;
var bandera = true;
var lista = ["Elemento0", "Elemento1", "Elemento2", "Elemento3"];
// Mostrar las variables por consola
console.log("La variable de texto es " + texto);
console.log("La variable de numeroSinDecimales es " + numeroSinDecimales);
console.log("La variable de numeroConDecimales es " + numeroConDecimales);
console.log("La variable de bandera es " + bandera);
console.log("La lista es " + lista);
// Mostrar el tipo de dato de cada variable
console.log(typeof (texto));
console.log(typeof (numeroSinDecimales));
console.log(typeof (numeroConDecimales));
console.log(typeof (bandera));
console.log(typeof (lista));
// Bloque de código realizado con var
// Explicación variables Var: Mediante la palabra reservada var creamos una variable local y se hereda a scopes diferentes. Si la variable se declara fuera de una función tendrá un ámbito global, aunque si creas una variable con var dentro de una funcion, no existirá fuera de esa función.
var edadPersona = 19;
console.log(edadPersona); // Su valor es 19
if (true) {
    var edadPersona = 30;
    console.log(edadPersona); // Su valor es 30
}
console.log(edadPersona); // Su valor es 30
var textoPrueba = "Salida 1";
console.log(textoPrueba); // Su valor es "Salida 1"
if (true) {
    var textoPrueba = "Salida 2";
    console.log(textoPrueba); // Su valor es "Salida 2"
}
console.log(textoPrueba); // Su valor es "Salida 2"
// Bloque de código realizado con let
// Explicación variables let: Si declaras una variable con la palabra reservada let en un scope global o en una función, la variable siempre pertenecerá al ámbito en el que la variable haya sido creada. Por ejemplo si creamos una variable con let en un ámbito global (fuera de una función), la variable tendrá un ámbito global. Pero si dentro de una función creamos una variable con el mismo nombre y cambiamos su valor, ese valor solo podremos utilizarlo dentro de ese bloque de código. Cuando salgamos de ese bloque de código la variable volverá a tener el valor global.
var edadPersona1 = 19;
console.log(edadPersona1); // Su valor es 19
if (true) {
    var edadPersona1_1 = 30;
    console.log(edadPersona1_1); // Su valor es 30
}
console.log(edadPersona1); // Su valor es 19
var textoPrueba1 = "Salida 1";
console.log(textoPrueba1); // Su valor es "Salida 1"
if (true) {
    var textoPrueba1_1 = "Salida 2";
    console.log(textoPrueba1_1); // Su valor es "Salida 2"
}
console.log(textoPrueba1); // Su valor es "Salida 1"
// Bloque de código realizado con const
var numeroPi = 3.14;
console.log("El número pi es " + numeroPi); // Su valor es 3.14
// Ejemplo For of
var nombres = ["Carlos", "Oscar", "Manolo"];
for (var _i = 0, nombres_1 = nombres; _i < nombres_1.length; _i++) {
    var i = nombres_1[_i];
    console.log(i); // Carlos, Oscar, Manolo
}
// Ejemplo For in
var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
    console.log(i); // a, b, c
}
// Ejemplo For each
var numeros = [1, 2, 3, 4, 5, 6, 7];
numeros.forEach(function (valor) {
    console.log(valor);
});
// Ejemplo for
for (var iterador = 0; iterador < 10; iterador++) {
    console.log("El valor del iterador es: " + iterador);
}
// Ejemplo while
var numeroiterador = 10;
while (numeroiterador != 0) {
    console.log("El numeroiterador es: " + numeroiterador);
    numeroiterador--;
}
// Ejemplo Rangos
var listasignaturas = ["matematicas", "filosofia", "geografia"];
Array(listasignaturas).map(function (valor, indice) {
    console.log("Ha entrado en el map");
});
// Operador ternario
var edadpersona = 18;
edadPersona < 18 ? "Menor de edad" : "Mayor de edad";
// Ejemplo asignacion de adicion
var x = 0;
var y = 0;
// x = x+y
x += y;
// x = x-y
x -= y;
// x = x*y
x *= y;
// x = x/y
x /= y;
// x = x%y
x %= y;
