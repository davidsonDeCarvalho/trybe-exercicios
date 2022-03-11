/* Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um if ou um for . Acompanhe o exemplo abaixo e não deixe de testá-lo no seu editor de código:
Copiar
if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20
Nesse exemplo, temos acesso à variável userAge dentro e fora do bloco de código. Experimente trocar o var por let e const . Qual será o resultado? Temos acesso à variável declarada com o var dentro e fora do escopo do bloco. No entanto, não temos acesso à userAge fora do bloco de código quando usamos let e const para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o var pode confundir até mesmo programadores mais experientes. */



 /*  Outro grande problema ao utilizar o var para atribuir valor à variáveis é que você consegue sobrescrevê-las sem gerar erros.
 */


 /* const userName = 'Isabella';
const userName = 'Lucas';
console.log(userName); // Resultado: Lucas */




  /* Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o var . Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o var não é uma boa prática.
  O ES6 corrige esse problema ao introduzir o let e o const , fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o let e const e veja o que acontece!
  E quanto ao const , como ele se diferencia do let ? O const permite que você declare constantes . Em outras palavras, o valor atribuído a uma variável declarada com o const não pode ser alterado. Já quando usamos o let , podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o const e let e veja o que acontece! */




  /* const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition */

/* No exemplo acima, vimos que o const é imutável - ao declarar const favoriteLanguage = 'Javascript' o valor de favoriteLanguage não pode ser alterado. Mas quando usamos o const para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona: */


/* const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' } */


  /* Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:
 */

  /* const technologies = ['Javascript', 'CSS', 'HTML'];
  technologies.push('React');
  console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]
  
  technologies = ['Javascript', 'CSS', 'HTML', 'React']
  console.log(technologies); // Erro */


  /* Hoisting
  Hoisting é um comportamento padrão do JavaScript que acontece com variáveis declaradas com var . Esse comportamento move todas as declarações destas variáveis para o topo do escopo global, independentemente de onde a declaração foi feita.
  Veja o exemplo abaixo: */

/*  age = 20;

  var age;
  
  console.log(age); // 20 */

/* 
  Mesmo atribuindo um valor à variável age antes mesmo de declará-la, o console.log conseguiu imprimir o seu valor, isso por causa do hoisting . É como se tivéssemos primeiro declarado a variável age e depois atribuído o valor 20, como no exemplo abaixo: */


/*   var age;

  age = 20;
  
  console.log(age); // 20 */

/*   Porém, apenas a declaração da variável é movida para o topo do escopo e não seu valor. No código abaixo podemos ver um exemplo disso. Ao atribuirmos um valor à variável age apenas após o console.log , recebemos undefined como resultado. */

/* var age;

console.log(age); // undefined

age = 20; */