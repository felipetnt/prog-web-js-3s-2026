//Atividade 2 // Pedra, papel e tesoura
var jogador = prompt("Escolha: pedra, papel ou tesoura");

var opcoes = ["pedra", "papel", "tesoura"];
var computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Jogador: " + jogador);
console.log("Computador: " + computador);

if (jogador == computador) {
    document.writeln("Empate")
    console.log("Empate!");
}
else if (
    (jogador == "pedra" && computador == "tesoura") ||
    (jogador == "papel" && computador == "pedra") ||
    (jogador == "tesoura" && computador == "papel")
) {
    document.writeln("Voce venceu")
    console.log("Você venceu!");
}
else {
    document.writeln("Voce perdeu")
    console.log("Computador venceu!");
}