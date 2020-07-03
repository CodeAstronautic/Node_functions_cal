var fs = require('fs');
 
// read file sample.html
fs.readFile('sample.html',
    // callback function that is called when reading file is done
    function(err, data) { 
        if (err) throw err;
        // data is a buffer containing file content
        console.log(data.toString('utf8'))
});
 