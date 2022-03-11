/* NodeJS Assert
Para começar, conheça um pouco sobre o NodeJS Assert.
O módulo Assert é uma ferramenta que testa expressões. Esse módulo já vem instalado com o NodeJS . Podemos entender o assert como sendo uma expressão booleana que será sempre true , a menos que haja uma falha.
Abaixo temos um exemplo de como podemos fazer um teste simples com assert : */


const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70


/* Para o seu desenvolvimento durante o curso, será necessário o uso de ferramentas mais robustas, como o Jest , que você aprenderá na aula de hoje. */