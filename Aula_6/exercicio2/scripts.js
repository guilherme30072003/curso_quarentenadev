//Exercicio2
//Na aula2 tem uma tabela dizendo qual o significado do resultado do imc. Depois de calcular, você consegue exibir o significado do IMC da pessoa?
//ex: imc for 17 exibir abaixo do peso
//Tabela dispoinibilizada pelo curso:
//Abaixo de 17        Muito abaixo do peso
//Entre 17 e 18,49    Abaixo do peso
//Entre 18,5 e 24,99  Peso normal
//Entre 25 e 29,99    Acima do peso
//Entre 30 e 34,99    Obesidade I
//Entre 35 e 39,99    Obesidade II

peso = prompt("Insira seu peso")
altura = prompt("Insira sua altura")
formula = peso/(altura*altura)
if(formula < 17){document.write("Seu IMC é " + formula.toFixed(2) + " = Muito abaixo do peso")}
//Com && posso passar + de 1 condiçao no if
if(formula >= 17 && formula <= 18.49){document.write("Seu IMC é " + formula.toFixed(2) + " = Abaixo do peso")}
if(formula >= 18.5 && formula <= 24.99 ){document.write("Seu IMC é " + formula.toFixed(2) + " = Peso normal")}
if(formula >= 25 && formula <= 29.99){document.write("Seu IMC é " + formula.toFixed(2) + " = Acima do peso")}
if(formula >= 30 && formula <= 34.99){document.write("Seu IMC é " + formula.toFixed(2) + " = Obesidade I")}
if(formula >= 35 && formula <= 39.99){document.write("Seu IMC é " + formula.toFixed(2) + " = Obesidade II")}