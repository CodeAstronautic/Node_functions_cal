var fs = require('fs');
 
fs.rename('newfile.txt', 'sample_old.txt',
    // 1st call back function
    function (err) {
        if (err) throw err;
        console.log('File Renamed.');
        fs.unlink('sample_old.txt',
            // 2nd call back function
            function (err) {
                if (err) throw err;
                console.log('File Deleted.');
            }
        ); 
    }
); 