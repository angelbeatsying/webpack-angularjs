//Greeter.js
var config = require("./config.json");
module.exports = function() {
    var greet = document.createElement("div");
    // greet.textContent = "i love angel";
    // greet.style.fontSize = 36 + "px";
    greet.textContent = config.greetText;
    return greet;
};