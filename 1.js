"use strict";
exports.__esModule = true;
var fs = require("fs");
try {
    var data = fs.readFileSync('good.txt', 'utf8');
    console.log(data.toString());
}
catch (e) {
    console.log('Error:', e.stack);
}
console.log("message");
