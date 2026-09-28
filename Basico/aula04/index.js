let nome = "João" // Criação e inicialização de uma variável

// Pra criação de variáveis sempre se utiliza let ou const nunca var

// Sem utilização de variável
console.log("João nasceu em 1984")
console.log("Em 2000 João conheceu Maria")
console.log("João casou-se com Maria em 2012")
console.log("Maria teve 1 filho com João em 2015")
console.log("O filho de João e Maria se chama Eduardo")

// Com utilização de variável

// Utilizando template literals para interpolação de variáveis
console.log(`${nome} nasceu em 1984`)
console.log(`Em 2000 ${nome} conheceu Maria`)
console.log(`${nome} casou-se com Maria em 2012`)
console.log(`Maria teve 1 filho com ${nome} em 2015`)
console.log(`O filho de ${nome} e Maria se chama Eduardo`)

// Utilizando concatenação de strings
console.log(nome + " nasceu em 1984")
console.log("Em 2000 " + nome + " conheceu Maria")
console.log(nome + " casou-se com Maria em 2012")
console.log("Maria teve 1 filho com " + nome + " em 2015")
console.log("O filho de " + nome + " e Maria se chama Eduardo")

// Utilizando apenas virgula
console.log(nome, "nasceu em 1984")
console.log("Em 2000", nome, "conheceu Maria")
console.log(nome, "casou-se com Maria em 2012")
console.log("Maria teve 1 filho com", nome, "em 2015")
console.log("O filho de", nome, "e Maria se chama Eduardo")

// É possível fazer a criação de uma variável sem inicialização
let nome2 // Valor será undefined
console.log(nome2) // undefined

nome2 = 'Pietro' // Fazendo a inicialização da variável
console.log(nome2) // Pietro

// Utilizando let é possível fazer a reatribuição de valor
// O valor de nome2 é sobrescrito
nome2 = 'João'
console.log(nome2) // João

// let nome2 // Não é possível redeclarar uma variável com let com mesmo nome
