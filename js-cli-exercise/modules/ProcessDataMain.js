import csv from 'csv-parser';
import { createReadStream } from 'fs';

/**
 * Parse CSV - a function to parse csv and returns the result
 * Reads data from a CSV file.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Array<Array<string>>>} A promise that resolves with an array of arrays representing the CSV data.
 */

function parseCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];

        createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                results.push(data);
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}


export { parseCSV};
