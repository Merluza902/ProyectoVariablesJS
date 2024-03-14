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
console.log(sumar);
console.log(resta);
console.log(division);
console.log(mult);
console.log(modulo);

//SECOND "CELSIUS TO KELVIN-FAhRENHEIT"
//Pedir la t° en celsius
let celsius = +prompt("Ingrese la temperatura en celsius");
//Fórmula para transformar a Kelvin y Fahrenheit
kelvin = celsius + 273.15
fahrenheit = (celsius * 9/5) + 32
console.log(kelvin)
console.log(fahrenheit)



let resultado = `${name} tiene ${age} años y trabaja en ${ciudad}`;
document.write(resultado)