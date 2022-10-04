function sumador (a1,b1,c1){

    console.log(a1 + b1 + c1)

}

sumador(parseInt(prompt("Ingrese un numero")),parseInt(prompt("Ingrese un numero")),parseInt(prompt("Ingrese un numero")));

let cochePuertas = 4;

function modificadorPuertas (){

    let modificadorPuertasOpcion = confirm("¿Desea agregar una puerta?");

    if(modificadorPuertasOpcion = true){

        cochePuertas++
        console.log(cochePuertas);

    }

}

modificadorPuertas();

