function replaceEcma() {

    // colocando frase base
    var frase = "Olá mundo, o mundo está maravilhoso, pois todo mundo está sorrindo";
    var resposta = document.querySelector('#resposta');

    resposta.innerHTML = frase;

    // replace = substitui um termo de string
    var fraseModificada =  frase.replace("mundo", "ryan");
    resposta.innerHTML += `<br>${fraseModificada}`;

    // replaceAll = substitui todos termos de string
    var fraseModificada2 =  frase.replaceAll("mundo", "miqueias");
    resposta.innerHTML += `<br>${fraseModificada2}`;

   
}

function pesquisar() {
    var filmes = ["Piratas do Caribe: A Maldição do Pérola Negra","Piratas do Caribe: O Baú da Morte","Piratas do Caribe: No Fim do Mundo","Piratas do Caribe: Navegando em Águas Misteriosas","Piratas do Caribe: A Vingança de Salazar"];
    var pesquisa = filmes.includes("Piratas do Caribe: A Maldição do Pérola Negra");
    var resposta2 = document.querySelector("#resposta2");

    if (pesquisa == true){
        resposta2.innerHTML = `Opa o termo foi encontrado!`;
    }
     else{
         resposta2.innerHTML = `O termo não foi encontrado!`;
     }
    
    //  indexOf verifica se existe, também retorna indice
    var termoPesquisado = "Batman";
    var pesquisa2 = filmes.indexOf (termoPesquisado);

    if(pesquisa2 == -1 ){
        resposta2.innerHTML += `<br>O elemento ${termoPesquisado} não foi encontrado!`;
    }
     else{
         resposta2.innerHTML += `<br>O elemento ${filmes[pesquisa2]} foi encontrado!`;
     }
}


function pad() {
    var nome = "Victor";
    var sobreNome = ".Santos";
    var cartaoFinal = "9999";
    var totalCaracteres = (nome + sobreNome).length ;
    var resposta3 = document.querySelector ("#resposta3");

    resposta3.innerHTML = nome.padStart(totalCaracteres,sobreNome);
    resposta3.innerHTML += "<br>" +nome.padEnd(8,sobreNome);
    resposta3.innerHTML += "<br>" +cartaoFinal.padStart(16,"*");
}

// Aula 7
function objectEntries() {

}

function Promises() {

}



// executar functions
replaceEcma();
pesquisar();
pad();