const fs = require("fs");

console.log("Início");

fs.writeFileSync("./arquivo.txt", "Um texto bem interessante!\n\nAcabou!");

console.log("Fim");
