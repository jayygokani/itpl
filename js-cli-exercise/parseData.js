const csv = require('csv-parser');
const fs = require('fs');

function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

module.exports = parseCSV;


/*
let filePath = "./assets/titles.csv"

parseCSV(filePath)
    .then((parsedData) => {
        // Here, parsedData contains the parsed CSV data
        // console.log(parsedData);

        // Assign parsedData to another variable if needed
        const jsonData = parsedData;
        console.log(jsonData)
    })
    .catch((error) => {
        // Handle any errors that occurred during parsing
        console.error("Error:", error);
    });
*/