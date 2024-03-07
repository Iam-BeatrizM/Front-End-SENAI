algoritmo "Material de Aula_Exemplos"
var
alunos: vetor [1..2] de caractere
notasAval1:vetor [1..2] de real
notasAval2:vetor [1..2] de real
notasAval3:vetor [1..2] de real
contador: inteiro
mediaFinal: real

inicio
para contador <- 1 ate 2 faca
 escreva ("Digite o nome do aluno(a):")
leia(alunos[contador])
  limpaTela ()
 escreval("Digite a primeira nota do(a): ",alunos[contador])
leia(notasAval1[contador])
  limpaTela ()
 escreval("Digite a segunda nota do(a): ",alunos[contador])
leia(notasAval2[contador])
  limpaTela()
 escreval("Digite a terceira nota do(a): ",alunos[contador])
leia(notasAval2[contador])
  limpaTela()


mediaFinal <- (notasAval1 [contador] + notasAval2 [contador] + notasAval3 [contador])/ 10
escreval ("A média final é: ",mediaFinal)
fimPara

   se (mediaFinal >=8) entao
 escreval("Aluno APROVADO")
   senao
 escreval ("Aluno REPROVADO")
   fimSe

fimalgoritmo