import characters from "./characters.js";
import chooseCharacters from "./chooseCharacters.js";
import inquirer from "inquirer";
import game from "./game.js";
import course from "./course.js";

console.log("Bem-vindo ao Mario Kart!");

async function showMenu() {
  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Escolha uma opção:',
      choices: [
        { name: 'Jogar', value: 'play' },
        { name: 'Sair', value: 'exit' }
      ]
    }
  ]);

  switch (option) {
    case 'play':
      console.log("Escolha o seu personagem!");
      const chosenCharacters = await chooseCharacters(characters);
      game(chosenCharacters, course())
      break;
    case 'exit':
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
}

showMenu();