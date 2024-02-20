import csv from 'csv-parser';
import { createReadStream } from 'fs';


// Parse CSV - a function to parse csv and store into a const called result --------------------------------------
async function parseCSV(filePath) {
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



/*
getCreditsCount()
This function returns the number of people when passed title id as param.
 */

let dataCredits = null;
const filePathCredits = "./assets/credits.csv";

async function initializeData() {
    try {
        dataCredits = await parseCSV(filePathCredits);
    } catch (error) {
        console.error("Error initializing data:", error);
        throw error;
    }
}

async function getCreditsCount(titleId) {
    if (!dataCredits) {
        await initializeData();
    }

    let count = 0;
    try {
        dataCredits.forEach(element => {
            if (element.id == titleId) {
                count++;
            }
        });

        return count;
    } catch (error) {
        console.error("Error counting credits:", error);
        throw error;
    }
}

export {parseCSV, getCreditsCount}