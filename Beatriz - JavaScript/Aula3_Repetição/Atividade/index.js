const usuarioCadastrado = "ADM";
const senhaCadastrada = "ADM";

function login() {
    let usuarioCorreto = false;
    let tentativas = 0;
   
    while(usuarioCorreto === false){
        let usuario = prompt("Digite o seu usuario");
        let senha = prompt("Digite a sua senha");    

        if(usuario != usuarioCadastrado || senha != senhaCadastrada){
            alert("Usuário ou senha incorretos! Tente novamente!");

            tentativas++;
            alert("Numero de tentativas (Max de 3) : "+tentativas);

            if(tentativas === 3){
                alert("Número de tentativas excedido! Tente novamente mais tarde");
                break;
            }

        }else{
            alert("Seja bem vindo!")
            usuarioCorreto = true;
        }
    }
}

// function ativi2(){
//     let opcao;
//     window.alert("Bem vindo a loja Brasileiras!");
//     window.alert("Selecione os itens que deseja comprar!");
//     // input opção escolhida
//     opcao = Number(window.prompt("1-Hd externo\n2-PEN DRIVE\n3-Cabo de Carregamento Rápido\n4-Cabo adaptador Sata para Usb\n5-Sair"));

//     while(opcao!=5){
//         switch(opcao){
//             case 1:
//                 window.alert("Hd externo foi adicionado com sucesso ao carrinho!");
//                 break;
//             case 2: 
//                 window.alert("PEN DRIVE foi adicionado com sucesso ao carrinho!");
//                 break;
//             case 3: 
//                 window.alert("Cabo de Carregamento Rápido foi adicionado com sucesso ao carrinho!");
//                 break;
//             case 4:
//                 window.alert("Cabo adaptador Sata para Usb foi adicionado com sucesso ao carrinho!");
//                 break;
//             case 5:
//                  break;     

//         }
//     }
// }

// Acho que a dois não é bem isso 