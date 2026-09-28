const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmCm = 1.8;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2026 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, " ", "kg");
console.log(
  "e tem",
  alturaEmCm,
  "m de altura e seu IMC é",
  indiceMassaCorporal,
);
console.log(nome, "nasceu em", anoNascimento, ".");

// Utilizando template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmCm} m de altura e seu IMC é ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
