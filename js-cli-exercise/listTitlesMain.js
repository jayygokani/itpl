/*
Exercise 1 - this code returns the number of people in a particular movie
*/

import {parseCSV} from './modules/ProcessDataMain.js'

let filePathTitles = "./assets/titles.csv"


getFilterData(filePathTitles)


async function getFilterData(filePath) {
    try {
        let dataTitles = await parseCSV(filePath)
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