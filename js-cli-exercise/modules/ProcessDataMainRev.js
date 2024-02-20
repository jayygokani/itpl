import csv from 'csv-parser';
import { createReadStream } from 'fs';

// Parse CSV - a function to parse csv and store into a const called result
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

// Initialize dataCredits
let dataCreditsMap = new Map();
const filePathCredits = "./assets/credits.csv";

async function initializeData() {
    try {
        const dataCredits = await parseCSV(filePathCredits);
        dataCredits.forEach(element => {
            const titleId = element.id;
            if (dataCreditsMap.has(titleId)) {
                dataCreditsMap.set(titleId, dataCreditsMap.get(titleId) + 1);
            } else {
                dataCreditsMap.set(titleId, 1);
            }
        });
    } catch (error) {
        console.error("Error initializing data:", error);
        throw error;
    }
}

// getCreditsCount function
async function getCreditsCount(titleId) {
    if (dataCreditsMap.size === 0) {
        await initializeData();
    }
    
    try {
        return dataCreditsMap.get(titleId) || 0;
    } catch (error) {
        console.error("Error counting credits:", error);
        throw error;
    }
}

export { parseCSV, getCreditsCount };
