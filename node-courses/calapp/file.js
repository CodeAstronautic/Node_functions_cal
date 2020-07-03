var fs = require('fs');
var data ='Learn Node FS module';
 
// writeFile function with filename, content and callback function
fs.writeFile('newfile.html', data, function (err) {
  
  console.log('File is created successfully.');
});  