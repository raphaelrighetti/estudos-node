import inquirer from "inquirer";

const askFood = { name: "food", message: "Qual a sua comida preferida?" };
const askHungry = { name: "hungry", message: "Você está com fome? (S/n)" };

inquirer
  .prompt([askFood, askHungry])
  .then((answers) => {
    answers.hungry = answers.hungry.toLowerCase();

    if (answers.hungry === "") answers.hungry = "s";

    console.log(
      `Minha comida favorita é ${answers.food}. ${
        answers.hungry === "s" ? "Eu estou com fome." : "Eu não estou com fome."
      }`
    );
  })
  .catch((err) => console.log(err));
