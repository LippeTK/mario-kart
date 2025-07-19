export default function rollDice(playerAttribute, enemyAttribute){
    const playerDice = Math.floor(Math.random() * 6) + 1 + playerAttribute; //1 a 6 + atributo
    const enemyDice = Math.floor(Math.random() * 6) + 1 + enemyAttribute;
    
    return [playerDice, enemyDice]
}