// external
import inquirer from "inquirer";
import chalk from "chalk";

// internal
import captalize from "./myModules/captalize.mjs";

const perguntaNome = {
  name: "nome",
  message: "Qual é o seu nome?",
};
const perguntaIdade = {
  name: "idade",
  message: "Quantos anos você tem?",
};

inquirer
  .prompt([perguntaNome, perguntaIdade])
  .then((answers) => {
    if (!answers.nome || !answers.idade)
      throw new Error("Os dois parâmetros são obrigatórios!");
    if (answers.idade.match(/[^0-9]/g))
      throw new Error("Especifique a idade em números!");

    console.log(
      chalk.bgYellow.black(
        `Nome: ${captalize(answers.nome)}\nIdade: ${Number(answers.idade)}`
      )
    );
  })
  .catch((err) => {
    throw err;
  });
