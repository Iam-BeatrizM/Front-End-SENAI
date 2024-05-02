// EXERCÍCIO 1
function exercicio1(){
    let resposta1 = document.querySelector("#RespostaEx1");

    class Carro {
        constructor(marca,modelo,ano,cor,velMax){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.cor = cor;
            this.velMax = velMax;
            this.velAtual = 0;
            this.acelerar = function(){


            }
        }
    }
    var carro1 = new Carro("Fiat", "Uno", 1990, "vermelho ferrari", 140);
    resposta1.innerHTML = `
    <div id = "carro1resposta">
        <p>Marca: ${carro1.marca}</p>
        <p>Modelo: ${carro1.modelo}</p>
        <p>Ano: ${carro1.ano}</p>
        <p>Cor: ${carro1.cor}</p>
        <p>Velocidade Máxima: ${carro1.velMax}</p>
        <p>Velocidade Atual: ${carro1.velAtual}</p>
        <input type= "number" id="acelerar"> 
        <button type="button" onclick="acelerar()">Acelerar</button>
    </div>
    `
}




// EXERCÍCIO 3
function fecharPopUp(){
    let resposta3 = document.querySelector("#RespostaEx3");

    resposta3.style.display = "none";
}

function exercicio3(){
    let resposta3 = document.querySelector("#RespostaEx3");

    resposta3.style.display = "flex";
    resposta3.innerHTML = `
    <div id= "popUp">
        <button type="button" onclick="fecharPopUp()"> X </button>
        Script Funcionando!
    </div>
    `
};