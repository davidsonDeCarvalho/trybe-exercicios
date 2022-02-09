const a = 31;
const b = 30;
const c = 10;

if(a > b && a > c){
    console.log(a + " é maior que " + b + " e " + c)
} else if(b > a && b > c){
    console.log(b + " é maior que " + a + " e " + c)
} else if(c > a && c > b){
    console.log(c + " é maior que " + a + " e " + b)
} else{
    console.log("Não estou programado para dar mais respostas.")
}