const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const name = args["name"].charAt(0).toUpperCase() + args["name"].slice(1);
const age = args["age"];

console.log(`Meu nome é ${name} e eu tenho ${age} anos.`);
