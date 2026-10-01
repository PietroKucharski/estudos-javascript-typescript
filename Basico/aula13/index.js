// Objetos

// const array = [1, 2, 3]; // Posso mudar os valores dentro do array porém não posso fazer a reatribuição dele

// // Operações válidas
// array.push(3)
// array[0] = 'Pietro'
// console.log(array)

// // Operações inválidas
// array = 'Outra coisa'
// console.log(array) // Erro, se fosse um let seria possível

// Criando um objeto

// const pessoa = {
//   // Atributos
//   nome: 'Pietro',
//   sobrenome: 'Kucharski',
//   idade: 24,
// }

// // Acessando os atributos
// console.log(pessoa.nome)

// Criando uma função que cria objetos
// function criarPessoa(nome, sobrenome, idade) {
//   return {
//     nome,
//     sobrenome,
//     idade,
//   }
// }

// const pessoa = criarPessoa('Pietro', 'Kucharski', 24)
// console.log(pessoa)

// Criando métodos de objetos
const pessoa = {
  nome: 'Pietro',
  sobrenome: 'Kucharski',
  idade: 24,
  falar() {
    console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}`)
  },
}

pessoa.falar()
