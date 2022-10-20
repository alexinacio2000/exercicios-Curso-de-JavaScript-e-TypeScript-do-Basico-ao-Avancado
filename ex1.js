const nome = "Alex";
const sobre = "Inácio";
const idade = '22';
const peso = '83';
const altura = '1.88';
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log('Olá,', nome, sobre,  `seu peso é ${peso}`, 'é sua idade', idade, 'calculando seu peso com sua altura', altura,'vocé terá um imc de:', imc,
'e sua data de aniversário é', anoNascimento);
