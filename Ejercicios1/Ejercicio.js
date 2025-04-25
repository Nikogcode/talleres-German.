/*1.Cree un programa que lea la edad de un usuario y muestre cuantos años tendrá el usuario dentro de tantos años como éste indique. 
Por ejemplo, si el usuario tiene 20 años y quiere saber cuantos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/

let edad = parseFloat(prompt("Ingrese su edad"))
let futuraedad = parseFloat(prompt("Ingrese los años que pasarán"))

let edadfutura = edad + futuraedad

alert (`En ${futuraedad} años, usted tendrá ${edadfutura} años de edad.`)