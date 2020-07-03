const msg = '{"name":"John", "age":"22"}';
 
var jsonObj = JSON.parse(msg);
 
// convert JSON object to String
var jsonStr = JSON.stringify(jsonObj);
 
// read json string to Buffer
const buf = Buffer.from(jsonStr);
 
console.log(buf.toString.length); 
 