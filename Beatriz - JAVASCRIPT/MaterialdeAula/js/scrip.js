// console.log("Olá mundo")

// //caixas de texto (input)
// //prompt = receber um texto 
// window.prompt("Qual é o seu nome?");

// //alert = manda uma mensagem 
// window.alert("FRONT É TOP!");

// //confirm = pergunta podendo sair verdadeiro o falso 
// window.confirm("Deseja baixar arquivo novamente?");

var name = "Uma variavel teste!";
var ligado = true; 
var numero = 91; 
var objeto = [];
// objeto = tipo de coletanea de dados, onde podemos inserir, remover e pesquisar
// const = constante, uma variavel que não pode ser sobrescrita 
const fixo = "Não posso mudar!";
var temporarioVar = "Fico salvo!";
let temporaria = "Sou temporário";

// var escopo global e sobrescrevivel
// let escopo local e sobrescevivel 
// const escopo global e não sobrescrevivel

function teste() {
    let temporaria = "Sou temporário";
    var temporarioVar = "Rodando no function";

    nome = "Victor";

    console.log (temporaria);
    console.log (temporarioVar);
}


// output = resultado
// input = numero1, numero2
// Coleta dois números e soma eles, após isso, imprime na tela o resultado

function somar() {
    window.alert("Seja bem-vindo ao algoritmo de soma!");
    let numero1 = Number( window.prompt("Digite o seu primeiro número:"));
    let numero2 = Number( window.prompt("Digite o seu segundo número:"));
    // parseInt = Números inteiros
    // parseFloat = Números reais 
    // Number = Números inteiros e reais 


    // window.alert(typeof numero1)

    var resultado = numero1+numero2;

    // concatenação
    window.alert("Resultado é de:"+resultado);
    window.alert(`Resultado é de: ${resultado}`);
}
 
somar()

// TYPEOF (no Inspecionar) = verifica o tipo da variavel        

