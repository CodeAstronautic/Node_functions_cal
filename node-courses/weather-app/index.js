const express = require('express')
const axios = require("axios");
var http = require("https");

const app = express()
const port = 3000

app.get('/', (reqs, ress) => {
    var options = {
        "method": "GET",
        "hostname": "community-open-weather-map.p.rapidapi.com",
        "port": null,
        "path": "/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=surat",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "bb64a1a96amsh71dff3e048a4e12p1e1464jsn6ef2d389ace5",
            "useQueryString": true
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    req.end();
})

app.listen(port, () => console.log(` app listening at http://localhost:${port}`))