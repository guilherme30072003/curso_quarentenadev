//Exercício 1:
//Na aula a Amanda deixou os valores de distância e tempo fixos no programa. Mas as pessoas querem ir para lugares diferentes certo? Então como deixar as opções de distância e tempo para quem for usar o nosso programa preencher e descobrir o valor da sua corrida? E como mostrar isso na tela sem usar o alert?

//código base do exercício:
//distanciakm = 20
//tempomin=60
//valorcorrida=2+distanciakm*1.4+tempomin*0.26
//alert('Sua corrida deu: R$' +valorcorrida.toFixed(2))

//Meu código
distanciakm = prompt("Insira a distância até o seu destino")
tempomin= prompt("Insira o tempo para completar a sua viagem")
valorcorrida = 2+distanciakm*1.4+tempomin*0.26
document.write("Sua corrida deu: R$" + valorcorrida.toFixed(2))