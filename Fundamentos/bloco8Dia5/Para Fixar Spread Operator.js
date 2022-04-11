/* Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread . */


const specialFruit = ['Manga', 'Uva', 'Banana', 'Maçã'];
const additionalItens = ['Granola', 'Granulado', 'Calda'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
console.log(specialFruit);
console.log(additionalItens);
