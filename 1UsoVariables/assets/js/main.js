//FIRST:
//Pide las dos variables al usuario y las guarda en n1 y n2
let n1 = +prompt("ingrese primer numero mayor a cero: ");
let n2 = +prompt("Ingrese un segundo número mayor a cero: ");
//Realiza las operaciones matemáticas respectivas
sumar=n1+n2;
resta=n1-n2;
division=n1/n2;
mult=n1*n2;
modulo=n1%n2;
//Muestra los resultados por consola
console.log("Suma "+sumar);
console.log("Resta " +resta);
console.log("División " +division);
console.log("Multiplicación " +mult);
console.log("Restante " +modulo);

//SECOND "CELSIUS TO KELVIN-FAhRENHEIT"
//Pedir la t° en celsius
let celsius = +prompt("Ingrese la temperatura en celsius");
//Fórmula para transformar a Kelvin y Fahrenheit
kelvin = celsius + 273.15
fahrenheit = (celsius * 9/5) + 32
console.log("Kelvin " +kelvin)
console.log("Fahrenheit " +fahrenheit)

//THIRD  "DAYS TO Y/W/D"
//Almacena los días ingresados por el usuario
let dias = +prompt("Ingrese cantidad de días")
//Cálculo de dias en años
years = dias/365
//Cálculo de semanas con los días restantes
semanas = (dias%365)/7
//Cálculo de días sobrantes
days = (dias%365)%7
//Muestra los resultados por consola
console.log(Math.floor(years))
console.log(Math.floor(semanas))
console.log(Math.floor(days))
//Muestra una caja de alerta emergente con el resultado
alert(`los ${dias} días son equivalentes a ${Math.floor(years)} años, ${Math.floor(semanas)} semanas y ${Math.floor(days)}`)

//FOURTH "MATH OP. WT. 5 NUMBERS"
//Pide al usuario cinco números y los almacena en sus respectivas variables
let num1 = +prompt("Ingrese primer número")
let num2 = +prompt("Ingrese segundo número")
let num3 = +prompt("Ingrese tercer número")
let num4 = +prompt("Ingrese cuarto número")
let num5 = +prompt("Ingrese quinto número")
addition = num1+num2+num3+num4+num5
promedio = addition/5
console.log("Suma "+addition)
console.log("Promedio "+promedio)