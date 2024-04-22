function somar() {
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
 
somar()

// TYPEOF (no Inspecionar) = verifica o tipo da variavel        
