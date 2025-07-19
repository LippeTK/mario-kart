import declareWinner from "./declareWinner.js"
import rollDice from "./rollDice.js"
async function game(characters, course){

    let player = {
        ...characters[0],
        score:0
    }
    let enemy = {
        ...characters[1],
        score:0
    }

    console.log(`🏎️  Iniciando uma corrida entre ${player.name} e ${enemy.name}!`)
    console.log("-------------------------------------------------------")

    for(let i = 0; i < course.length; i++){
        let attribute, description;

        switch (course[i]) {
            case 1:
                attribute = "speed"
                description = "⬆️  É uma reta! Os jogadores vão disputar velocidade!"
                break
            case 2:
                attribute = "maneuver"
                description = "↪️  É uma curva! Os jogadores vão disputar manobrabilidade!"
                break
            default:
                attribute = "power"
                description = "🥊 É um confronto! Os jogadores vão disputar poder!"
        }

        console.log(description)
        const [playerRoll, enemyRoll] = await rollDice(player[attribute], enemy[attribute])

        console.log(`${player.name} tirou ${playerRoll} - ${enemy.name} tirou ${enemyRoll}`)

        switch (attribute) {
            case "power":
                if (playerRoll > enemyRoll) {
                    if(enemy.score > 0){
                        enemy.score--
                    }
                    console.log(`${player.name} venceu a rodada!`)
                } else if (enemyRoll > playerRoll) {
                    if(player.score > 0){
                        player.score--
                    }
                    console.log(`${enemy.name} venceu a rodada!`)
                }else{
                    console.log("Empate!")
                }
                break
            
            case "speed":
            case "maneuver":    
                if (playerRoll > enemyRoll) {
                    player.score++
                    console.log(`${player.name} venceu a rodada!`)
                } else if (enemyRoll > playerRoll) {
                    enemy.score++
                    console.log(`${enemy.name} venceu a rodada!`)
                } else {
                    console.log("Empate!")
            }
            break
        }
        console.log(`Pontuação total: ${player.name} ${player.score} x ${enemy.score} ${enemy.name}`)
        console.log("-------------------------------------------------------")
        await new Promise(resolve => setTimeout(resolve, 4000)); // pausa de 4 segundos
    }
    declareWinner()
}
export default game