function atividade1() {
    window.alert("Seja bem-vindo ao calculo da sua conta!");
    let valorC = Number( window.prompt("Digite o valor da conta:"));
    let quantP = parseInt ( window.prompt("Digite a quantidade de pessoas na mesa:"));
    // parseInt = Números inteiros
    // parseFloat = Números reais 
    // Number = Números inteiros e reais 


    // window.alert(typeof numero1)

    var resultado = valorC/quantP ;

    // concatenação
    window.alert(`Resultado é de: ${resultado}`);
}
 
function atividade2() {

    window.alert("Seja bem-vindo ao algoritmo que mostra o Antecessor e Sucessor de um número!" );
    let numero = Number ( window.prompt("Digite um número:"));
    
    window.alert(`O número escolhido é ${numero}, o sucessor é ${numero+1} e seu antecessor é ${numero-1}`);
}



// TYPEOF (no Inspecionar) = verifica o tipo da variavel        
