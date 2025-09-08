// Programa que calcula a média de 4 idades

// Idades já definidas
const idades = {
  primeira: 18,
  segunda: 22,
  terceira: 30,
  quarta: 26
};

function calcularMediaIdades(idades) {
  const soma = idades.primeira + idades.segunda + idades.terceira + idades.quarta;
  const media = soma / 4;
  return media;
}

function exibirResultado(idades) {
  const media = calcularMediaIdades(idades);

  console.log("--- Cálculo da Média de Idades ---");
  console.log(`1ª Idade: ${idades.primeira}`);
  console.log(`2ª Idade: ${idades.segunda}`);
  console.log(`3ª Idade: ${idades.terceira}`);
  console.log(`4ª Idade: ${idades.quarta}`);
  console.log("---------------------------------");
  console.log(`Soma das idades: ${idades.primeira + idades.segunda + idades.terceira + idades.quarta}`);
  console.log(`Média das idades: ${media.toFixed(2)}`);
}

// Executa o programa
exibirResultado(idades);
