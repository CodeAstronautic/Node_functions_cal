var fs = require('fs');
 
// read file sample.txt
var data = fs.readFileSync('newfile.txt');
console.log("Reading file completed : " + new Date().toISOString());
 
console.log("After readFileSync statement : " + new Date().toISOString()); 