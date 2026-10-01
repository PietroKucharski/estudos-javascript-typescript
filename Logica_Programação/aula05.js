// Operador ternário
// (condição) ? 'valor se verdadeiro' : 'valor se falso'

const pontuacao = 999

// Sem utilizar o operador ternário

if (pontuacao >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal");
}

// Utilizando o operador ternário

const resultado = pontuacao >= 1000 ? "Usuário VIP" : "Usuário normal";

console.log(resultado);
