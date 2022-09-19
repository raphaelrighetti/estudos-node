const events = require("events");

const myEvent = new events();

myEvent.on("start", () => console.log("Durante"));

console.log("Antes");

myEvent.emit("start");

console.log("Depois");
