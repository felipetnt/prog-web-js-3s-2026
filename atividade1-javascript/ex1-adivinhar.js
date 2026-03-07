//Atividade 1 - MatGuess - Adivinhar o numero aleatório

var randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);
var chute = parseInt(prompt("Adivinhe o numero de 1 a 20 !!! "));

while(randomNumber != chute){
        chute = parseInt(prompt("Adivinhe o numero de 1 a 20 !!! "));
        console.log(chute);

    if(randomNumber != chute){
        if(randomNumber > chute){
            chute = parseInt(prompt("Voce errou! O chute é menor! Tente de novo ! "));
            console.log("Chute menor que o numero.");
        } else {
            chute = parseInt(prompt("Voce errou! O chute é maior! Tente de novo ! "));
            console.log("Chute maior que o numero.");
        }

    } else {
            document.writeln("Parabéns!!! Voce ganhou!!! O numero secreto era: " + randomNumber);
            console.log("Sucesso, jogo ganho...");
    }
}


