function meuEscopo() {
  const form = document.querySelector('form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm(event) {
    event.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const altura = form.querySelector('.altura')
    const peso = form.querySelector('.peso')

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value,
    });

    resultado.innerHTML = pessoas.map(pessoa => `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} ${pessoa.peso}</p>`).join('');

  }

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
