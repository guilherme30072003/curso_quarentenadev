//Exercício 1:
//Ao invés de deixar apenas o fundo branco com a letras pretas, usar o document.write junto com css para estilizar a calculadora da aula passada da maneira que você quiser!!
//Meu código
distanciakm = prompt("Insira a distância até o seu destino")
tempomin= prompt("Insira o tempo para completar a sua viagem")
valorcorrida = 2+distanciakm*1.4+tempomin*0.26
document.write("<h1>Sua corrida deu: R$"+valorcorrida.toFixed(2))