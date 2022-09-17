const readline = require("readline");

const askAnimal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askAnimal.question("Qual o seu animal favorito? ", (animal) => {
  console.log(`Eu também gosto de ${animal.toLowerCase()}!`);
  askAnimal.close();
});
