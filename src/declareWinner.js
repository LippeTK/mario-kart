export default function declareWinner(player, enemy) {
  if (player.score > enemy.score) {
    console.log(`${player.name} ganhou a corrida!`);
  } else if (enemy.score > player.score) {
    console.log(`${enemy.name} ganhou a corrida!`);
  } else {
    console.log("A corrida terminou em um empate!");
  }
}