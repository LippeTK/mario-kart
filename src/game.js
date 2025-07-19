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
        let attribute;
        let description;
        if(course[i] === 1){
            description = "⬆️  É uma reta! Os jogadores vão disputar velocidade!"
            attribute = "speed"
        }else if(course[i] === 2){
            description = "↪️  É uma curva! Os jogadores vão disputar manobrabilidade!"
            attribute = "maneuver"
        }else{
            description = "🥊 É um confronto! Os jogadores vão disputar poder!"
            attribute = "power"
        }

        console.log(description)
        const [playerRoll, enemyRoll] = await rollDice(player[attribute], enemy[attribute])

        console.log(`${player.name} tirou ${playerRoll} - ${enemy.name} tirou ${enemyRoll}`)

        if(attribute === "power"){
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
        }else{
            if (playerRoll > enemyRoll) {
            player.score++
            console.log(`${player.name} venceu a rodada!`)
        } else if (enemyRoll > playerRoll) {
            enemy.score++
            console.log(`${enemy.name} venceu a rodada!`)
        } else {
            console.log("Empate!")
        }
        }
        console.log(`Pontuação total: ${player.name} ${player.score} x ${enemy.score} ${enemy.name}`)
        console.log("-------------------------------------------------------")
        await new Promise(resolve => setTimeout(resolve, 4000)); // pausa de 4 segundos
    }
    if(player.score > enemy.score){
        console.log(`${player.name} ganhou a corrida!`)
    }else if(enemy.score > player.score){
        console.log(`${enemy.name} ganhou a corrida!`)
    }else{
        console.log("A corrida terminou em um empate!")
    }
}
export default game