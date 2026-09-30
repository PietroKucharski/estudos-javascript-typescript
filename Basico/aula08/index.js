// É possível guardar o valor digitado em uma variável
// prompt('Digite alguma coisa: ')

// É possível exibir uma mensagem no navegador
// alert("Exibição de mensagem no navegador")

// É possível exibir uma mensagem de confirmação no navegador
// confirm('Deseja confirmar?')

// Guarda o valor digitado em uma variável
let seuNome = prompt('Digite seu nome: ')

// Exibe uma mensagem de confirmação com o valor digitado e guarda o resultado em uma variável
let confirmacaoDoNome = confirm(`Seu nome é ${seuNome}?`)

// Exibe o valor digitado e o valor da confirmação no console do navegador
console.log(seuNome, confirmacaoDoNome)

// Exibe o valor digitado em um alerta
alert(`Seu nome é ${seuNome}`)
