/*
Short Circuit -> comportamento dos operadores lógicos que para a avaliação da expressão assim que o resultado final já pode ser determinado

Falsy values
- 0
- ""
- null
- undefined
- NaN
*/

function falar() {
  return 'oi'
}

const vaiExecutar = undefined
console.log(vaiExecutar && falar())
