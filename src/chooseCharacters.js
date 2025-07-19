import inquirer from "inquirer";

export default async function chooseCharacters(characters){
    const { choice1 } = await inquirer.prompt([{
        type: 'list',
        name: 'choice1',
        message: 'Escolha um personagem!',
        choices: characters.map(character => ({
            name: character.name,
            value: character
        }))

    }])
    console.log(`Você escolheu ${choice1.name}!`)

    //novo array sem o personagem já escolhido
    const enemys = characters.filter((character) => character !== choice1)
    const { choice2 } = await inquirer.prompt([{
        type: 'list',
        name: 'choice2',
        message: 'Agora escolha um vilão!',
        choices: enemys.map(enemy => ({
            name: enemy.name,
            value: enemy
        }))
    }])
    console.log(`Você escolheu ${choice2.name}!`)
    
    return [choice1, choice2]
}
