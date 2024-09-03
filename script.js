/* //Función regular - definición//

 unaFuncion();

function unaFuncion() {
    for (let index = 0; index < 5; index++) {
        console.log(25 * 25);
        console.log(25 - 25);
        console.log(25 + 25);
        console.log(25 / 25);
        console.log("Vuelta" + index);
    }
    //Función regular - llamado//
   
 */

/* 
let funcionDeExpresion = function () {
    for (let index = 0; index < 5; index++) {
        console.log(25 * 25);
        console.log(25 - 25);
        console.log(25 + 25);
        console.log(25 / 25);
        console.log("Vuelta" + index);
    }

}
funcionDeExpresion(); */


//ejemplo//
/* 
let repetir = true
while (repetir) {

    let opcion = prompt("Seleccione: \n1 - Sumar \n2 -Restar \n3 - Multiplicar \n4 -Dividir \n5 - Todas \n6 - Salir ");

    switch (opcion) {
        case "1":
            sumar();
            break;
        case "2":
            restar();
            break;

        case "3":
            multiplicar();
            break;

        case "4":
            dividir();
            break;
        case "5":
            sumar ();
            restar();
            multiplicar();
            dividir();
            console.log("Todas las operaciones han sido realizadas");
            break;
        case "6":
            repetir = false;
            break;
        default:
            break;
    }
}


function sumar() {
    let numeroUno = parseInt(prompt("Ingrese un número"));
    let numeroDos = parseInt(prompt("Ingrese un número"));
    console.log("La suma es: " + (numeroUno + numeroDos));
}


function restar() {

    let numeroUno = parseInt(prompt("Ingrese un número"));
    let numeroDos = parseInt(prompt("Ingrese un número"));
    console.log("La resta es: " + (numeroUno - numeroDos));
}

function multiplicar() {
    let numeroUno = parseInt(prompt("Ingrese un número"));
    let numeroDos = parseInt(prompt("Ingrese un número"));
    console.log("La multiplicación es: " + (numeroUno * numeroDos));

}


function dividir() {
    let numeroUno = parseInt(prompt("Ingrese un número"));
    let numeroDos = parseInt(prompt("Ingrese un número"));
    if (numeroDos === 0) {
        console.log("No se puede dividir por cero");
    }
    else {
        console.log("La división es: " + (numeroUno / numeroDos));
    }

}

function todas() {

}
 */


//No puedo llamar una funsion flecha sin antes haberla definido//
let funcionFlecha = () => {
    console.log("Esto es una función flecha");
};
funcionFlecha();