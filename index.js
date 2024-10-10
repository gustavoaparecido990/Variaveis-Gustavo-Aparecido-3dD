const {time} = require('console');

const prompt = require('prompt-sync');
const entrada = prompt();


let anoAtual = 2024;
let idade = (17);
const nomeCompleto = "Gustavo Aparecido";
const faculdade = "Medicina";
let cidadeAtual = "SJP";
let lazer = "Futebol";

console.log(`salve, eu sou o ${nomeCompleto}, tenho 17 anos, moro em SJP e no ano que vem quero estar cursando medicina`);

anoAtual = 2025;
idade = (18);
cidadeAtual = "SJP";
depoisMarço = "Médico";
lazer = "Futebol";

console.log(`para o ano de 2025 espero estar em um bom emprego`);

//agencia de viagens
console.log("_________________")
console.log("       LOGIN      ")
console.log("_________________")

const loginCerto = "Gustavo";
const senhaCerta = "12345";

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while(login != loginCerto) {
  console.log("Login Não encontrado");
  login = entrada("Digite seu login: ");
}

var nomeComprador = entrada("qual é o seu nome?");
var cpfComprador = entrada("qual é o seu cpf?");
var idadeComprador = entrada("qual é a sua idade?");
const listaDeDestinos= new array(
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba",
  "Salvador",
  "Fortaleza"
);

console.log(`Olá senhor pedro, seu CPF é 34531123 e sua idade é 20 anos, e você deseja viajar para salvasor`);

console.log(listaDeDestinos[2]);
console.log("");
console.log(`Olá senhor pedro, adicionamos mais uma viagem para sua lista de interesses.`);

listaDeDestinos.push("Brasília");

console.log(listaDeDestinos);
if (idadeComprador<18){
  console.log("Você não pode viajar pois é menor de idade");
}
if (idadeComprador>18){
  console.log(`Parabéns, conseguimos uma passagem`);
}
if (idadeComprador>18){
  console.log(`Parabéns nós pudemos lhe vender uma passagem, estes são os destinos disponíveis: São Paulo","Rio de Janeiro","Curitiba","Salvador", "Fortaleza"`)
}