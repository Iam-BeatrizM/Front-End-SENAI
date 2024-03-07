Algoritmo "atvidade1 - Mercadoria"



Var
nomeProduto: vetor [1..3] de caractere
valorProduto: vetor [1..3] de real
contador: inteiro
mediaValor: real
valorTotalEstoque: real

Inicio
//entrada de dados
//nomes dos produtos
//valor dos produtos

contador <- 1
enquanto (contador <= 3) faca
escreval ("Digite o nome do produto: ")
leia(nomeProduto[contador])
escreval ("Digite o valor do produto: ", nomeProduto[contador])
leia (valorProduto[contador])
contador <- contador + 1
fimEnquanto

valorTotalEstoque <- valorProduto[1] + valorProduto[2] + valorProduto[3]
mediaValor <- valorTotalEstoque / 3

escreval ("O valor total em estoque é de:", valorTotalEstoque)
escreval("Logo a media das vendas é de:", mediaValor)

//saida de dados (OUTPUT)
//valor de estoque
//media de preços dos produtos

Fimalgoritmo