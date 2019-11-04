function retornaSexo(sexo) {
  switch (sexo) {
    case "M":
      return "Masculino";
    case "F":
      return "Feminino";
    default:
      return "Outro";
  }
}

var resultado = retornaSexo("PK");
console.log(resultado);

console.log("Challenge1: Crie uma função que mostre os dados de endereço");
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 45,
  bairro: "Barra",
  cidade: "Teresopolis",
  uf: "RJ"
};
function mostrarEndereco() {
  var resultado =
    "usuário mora em " +
    endereco.cidade +
    " / " +
    endereco.uf +
    " no bairro " +
    endereco.bairro +
    " na rua " +
    endereco.rua +
    " nº " +
    endereco.numero;
  return resultado;
}
var resultado = mostrarEndereco();
console.log(resultado);
console.log("****--------Desafio 1 acabou****----------");

console.log(
  "Challenge2: Crie uma função que dado um intervalo (entre x e y) exiba todos número pares"
);
function pares(x, y) {
  var x = 32;
  var y = 321;
  for (x = 32; x < y; x += 2) {
    console.log(x);
  }
}
pares();

console.log("****--------Desafio 2 acabou****----------");
console.log(
  'Challenge3: Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"\n',
  "e retorna um booleano true/false caso exista ou não"
);
function temHabilidade(skill) {
  var skill = ["Java", "Javascript", "ReactsJS", "React Native"];
  for (var i = 0; i < skill.length; i += 1) {
    {
      if (skill[i] === "Javascript") {
        temHabilidade = true + " ou verdadeiro";
      } else {
        temHabilidade = false + " ou falso";
      }
      console.log(skill[i] + " " + temHabilidade);
    }
  }
}
temHabilidade();
console.log("****--------Desafio 3 acabou****----------");
console.log(
  "Challenge4: Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é"
);
function tituloHabilidade(experiencia) {
  var anosEstudo = 7;

  if (anosEstudo <= 1) {
    return "Iniciante";
  }
  if (anosEstudo <= 3) {
    return "Intermediario";
  }
  if (anosEstudo <= 6) {
    return "Avançado";
  } else {
    return "Grand Master";
  }
}
var experiencia = tituloHabilidade(experiencia);
console.log(experiencia);
console.log("****--------Desafio 4 acabou****----------");

console.log(
  "Challenge5: Dado o seguinte vetor de objetos imprima cada nome com sua habilidade"
);
function usuarioHabilidade(usuarios) {
  var usuarios = [
    { nome: "Gabriel", habilidade: ["Javascript", "ReactJs", "Redux"] },
    { nome: "Fernando", habilidade: ["VueJs", "Ruby on Rails", "Elixir"] }
  ];
  for (let grupo of usuarios) {
    console.log(
      "O " + grupo.nome + " possui as habilidades : " + grupo.habilidade
    );
  }
}
usuarioHabilidade();

console.log("****--------Desafio 5 acabou****----------");
