var fs = require('fs');
 
// delete file named 'sample.txt'
fs.unlink('newfile.html', function (err) {
   
    
    console.log('File deleted!');
}); 
 