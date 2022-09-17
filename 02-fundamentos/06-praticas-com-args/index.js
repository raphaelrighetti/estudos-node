// external
const minimist = require("minimist");
// internal
const soma = require("./soma").soma;

// code
const args = minimist(process.argv.slice(2));
const a = args["a"];
const b = args["b"];

console.log(soma(a, b));
