const fs = require("fs");

console.log("Início");

fs.writeFile(
  "./arquivo.txt",
  "Um texto bem interessante!\n\nAcabou!",
  (err) => {
    if (err) throw err;
    setTimeout(() => {
      console.log("Arquivo criado!");
    }, 1000);
  }
);

console.log("Fim");
