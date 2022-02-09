const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if(angulo1 === 60 && angulo2 === 60 && angulo3 === 60){
    console.log("Esse é um triângulo.")
}   else if(angulo1 < 0){
    console.log("Ângulo negativo não é válido.")
}   else if(angulo2 < 0){
    console.log("Ângulo negativo não é válido.")
}   else if(angulo3 < 0){
    console.log("Ângulo negativo não é válido.")
}   else{
    console.log("Não sei que forma é essa =/")
}