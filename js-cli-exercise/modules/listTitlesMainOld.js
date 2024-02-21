/*
Exercise 1 - this code returns the number of people in a particular movie
*/

import {parseCSV} from '../modules/ProcessDataMain.js'

const filePathTitles = "./assets/titles.csv"
const filePathCredits = "./assets/credits.csv";

(async () => {
    await getTitlesAndCheckCreditsCount()
})()



async function getTitlesAndCheckCreditsCount() {
    try {
        let dataTitles = await parseCSV(filePathTitles)
        const size = dataTitles.length;
        
        for (let i = 0; i < size; i++){
            console.log(`${dataTitles[i].title} : ${await getCreditsCount(dataTitles[i].id)}`)
        }

    } catch (error) {
        throw error;
    }
}


// Initialize dataCredits map datastructure
let dataCreditsMap = new Map();

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
        throw new Error('Error initializing data');
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