const fs = require('fs');
const rp = require('request-promise');
const AIRPORT_URL = 'http://ourairports.com/data/airports.csv';

console.log('Requesting latest airports data file from ' + AIRPORT_URL + '...');

rp(AIRPORT_URL)
    .then((data) => {
        parseData(data);
    })
    .catch((err) => {
        console.log(err.message);
    });

function parseData(csv) {
    let airports = csv.split('\n');
    let headers = airports[0].split(',').map(item => item.replace(/"/g, ''));
    let json = {};

    airports.forEach((line, index) => {
        if (!index) return;

        const airport = line.split(',').map(item => item.replace(/"/g, ''));
        const code = airport[13];
        if (!code) return;

        console.log('Parsing ' + code);

        let data = {};
        for (let i = 0; i < headers.length; i++) {
            data[headers[i]] = airport[i];
        }

        json[code] = data;
    });

    writeJson(JSON.stringify(json, null, '\t'), './data/airports.json');
}

function writeJson(json, path) {
    fs.writeFile(path, json, (err) => {
        if (err) return console.log(err);
        console.log('Data written to ' + path);
    });
}
