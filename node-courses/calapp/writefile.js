var fs = require('fs');
 
var data = "Helo !"
 
// write data to file sample.html
fs.writeFile('newfile.txt',data,
    // callback function that is called after writing file is done
    function() { 
       
        console.log("Data is written to file successfully.")
}); 