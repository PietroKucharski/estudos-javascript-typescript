// Arrays

const alunos = ['Pietro', 'Vittor', 'Maria'];

console.log(alunos); // Retorna ['Pietro', 'Vittor', 'Maria']
console.log(alunos[0]); // Retorna 'Pietro'

alunos[0] = 'Rafael';
console.log(alunos); // Retorna ['Rafael', 'Vittor', 'Maria']

console.log(alunos.length); // Retorna 3

alunos[alunos.length] = 'Natalia';
console.log(alunos); // Retorna ['Rafael', 'Vittor', 'Maria', 'Natalia']

alunos.push('Otavio') // Adiciona 'Otavio' ao final do array
console.log(alunos); // Retorna ['Rafael', 'Vittor', 'Maria', 'Natalia', 'Otavio']

alunos.unshift('Luiza') // Adiciona 'Luiza' ao início do array
console.log(alunos); // Retorna ['Luiza', 'Rafael', 'Vittor', 'Maria', 'Natalia', 'Otavio']

alunos.pop() // Remove o último elemento do array
console.log(alunos); // Retorna ['Luiza', 'Rafael', 'Vittor', 'Maria', 'Natalia']

const alunoRemovido = alunos.pop();
console.log(alunoRemovido); // Retorna 'Natalia'

alunos.shift() // Remove o primeiro elemento do array
console.log(alunos); // Retorna ['Rafael', 'Vittor', 'Maria']

const alunoRemovido2 = alunos.shift();
console.log(alunoRemovido2); // Retorna 'Rafael'

console.log(alunos.slice(0, 2)) // Retorna ['Vittor', 'Maria']
