algoritmo "Atividade2"
var
contador,numero, quantasVezes, maiorNumero: inteiro

inicio
escreval ("Quantos números serão comparados?")
leia (quantasVezes)
enquanto (contador < quantasVezes) faca
escreval ("Digite o" , contador + 1, " número:")
leia (numero)
 se (numero > maiorNumero) entao
  maiorNumero <- numero
 fimSe

 contador <- contador + 1
 limpaTela()
 fimEnquanto
 escreval ("O maior número digitado é de:",maiorNumero)

fimalgoritmo
// Quantas vezes irei ler um número
// Ler cada número
// Exibir o maior

