// Funções

// Criação da função
// function saudacao() {
//   console.log('Olá!');
// }

// saudacao(); // Chamada da função

// Criação de uma função com parâmetros
// function saudacao(nome) {
//   console.log(`Olá, ${nome}!`);
// }

// saudacao('João'); // Chamada da função com argumento

// Retorno de uma função
// function saudacao(nome) {
//   console.log(`Olá, ${nome}!`);
//   return 123456
// }

// const variavel = saudacao('João') // O que será salvo será o valor retornado pela função '123456'
// console.log(variavel); // 123456

// function saudacao(nome) {
//   return `Olá, ${nome}!`

// }

// const variavel = saudacao('João') // O valor salvo será o retorno da função 'Olá, João!'
// console.log(variavel); // Olá, João!

// function soma(a, b) {
//   const resultado = a + b;
//   return resultado;
// }

// const resultado = soma(3, 5);
// console.log(resultado); // 8


// Colocando valores padrão

// function soma(a = 1, b = 1) {
//   const resultado = a + b;
//   return resultado;
// }

// const resultado = soma(3, 5);
// console.log(resultado); // 8

// Criando uma função anônima
// const soma = function(a, b) {
//   return a + b;
// };

// const resultado = soma(3, 5);
// console.log(resultado); // 8

// Criando uma arrow function
const soma = (a, b) => {
  return a + b;
};

const resultado = soma(3, 5);
console.log(resultado); // 8
