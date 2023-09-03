//CALLBACKS:


//generamos una funcion que se encarga de sumar dos numeros.
function sum(num1, num2){
    return num1 + num2;
}

//Generamos una  funcion que utiliza que utiliza el CALLBACK con los numeros que pasamos còmo argumentos.
function calc(num1, num2, callback){ //El parametro CALLBACK puede tener 
//cualquier nombre, en este ejemplo utilizamos CALLBACK para referenciar el 
//nombre, pero esto no es necesario .
    return callback(num1, num2); 
};

//Utilizamos la función CALC para llamar a la función SUM, esta toma los valores pasados como argumentos y los suma.
console.log(calc(2, 2, sum));// Al utilizar una función no es necesario poner los parenesis en los argumentos.


//En este bloque de codigo llamamos a la funcion CALC, la cual posee 3 argumentos NUM1,NUM2 Y el CALLBACK. Pasamos còmo argumento los dos numeros y llamamos a la función SUM como argumento de callback. 

//El retorno del callback nos da la suma de num1 y num2.

//---------------------------------------------------------------------------

//SetTimeOut: Elemento que usa el consepto de callback para ejecutar un 
//bloque de codigo.
//Es una función que recibe 2 parametros,  una funcion, puede ser anonima y,
//el tiempo de ejecución.


setTimeout(function(){
    console.log('Hola JavaScript');
}, 2000)

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000,'Juan'); //Al agregar una función que recibe 
//parametros, dentro de los parametros de SerTimeOut, pasamos los argumentos despues del tiempo de ejecución.