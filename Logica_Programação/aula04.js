// if e else
// If só pode ser usado com valores booleanos
// If pode ser usado sozinho
// Sempre que utilizado a palavra else, precisa haver um if correspondente
// Pode existir vários ifs
// Só pode existir um else

const hora = 10

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia')
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde')
} else {
  console.log('Boa noite')
}
