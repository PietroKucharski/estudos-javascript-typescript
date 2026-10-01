/*
Operadores Lógicos
&& -> AND -> E -> Todas as condições precisam ser verdadeiras para retornar true. Caso contrário, retorna false.
|| -> OR -> OU -> Pelo menos uma condição precisa ser verdadeira utilizando || para retornar true. Caso contrário, retorna false.
! -> NOT -> NÃO -> Inverte o valor da condição. Se a condição for verdadeira, retorna false. Se a condição for falsa, retorna true.
*/

let expressao = true && true
console.log(expressao)

expressao = true || false
console.log(expressao)

expressao = !true
console.log(expressao)
