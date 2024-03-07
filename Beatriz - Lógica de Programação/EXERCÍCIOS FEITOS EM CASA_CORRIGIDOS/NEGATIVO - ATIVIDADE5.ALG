algoritmo "Atividade Neg - Correção"
var
contador, numero, quantNegativo: inteiro


inicio
escreval ("Digite 10 números")
 repita
  leia (numero)
  
   se (numero < 0) entao
   quantNegativo <- quantNegativo + 1
   fimSe
   
   contador <- contador + 1
 ate (contador >= 10)

fimalgoritmo