// while
let contador = 0;
while (contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while")

//do while
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin del ciclo do while");

//for
for(let contando = 0; contando < 3 ; contando++){
    console.log(contando); 0, 1, 2
}
console.log("Fin del ciclo for");

//Palabra reservada break
for(let contando = 0; contando < 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Mostrando todos los pares
    }
}
console.log("Termina el ciclo encontrar los pares")

for(let contando = 0; contando < 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Mostrando todos los pares
        break; // Muestra solo el primer numero
    }
}
console.log("Termina el ciclo al encontrar el primer numero par");

//La palabra continue y Etiquetas Labels
for(let contando = 0; contando < 10; contando++){
    if(contando % 2 !== 0){
        continue; // Va a continuar a la siguiente iteracion
    }
    console.log(contando); 0, 2, 4, 6, 8, 10
}
console.log("Termina el ciclo")
