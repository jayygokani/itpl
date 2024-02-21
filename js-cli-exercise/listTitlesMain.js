/*
Exercise 1 - this code returns the number of people in a particular movie
*/

import {parseCSV} from './modules/ProcessDataMain.js'

const filePathTitles = "./assets/titles.csv"
const filePathCredits = "./assets/credits.csv";

getTitlesAndCheckCreditsCount().then((res) => {
    console.table(res);
}).catch((err) => {
    console.log(err);
})

async function getTitlesAndCheckCreditsCount() {
    try {
        let dataTitles = await parseCSV(filePathTitles)
        
        const size = dataTitles.length;
        if(size == 0){
            throw new Error('data not found.')
        }
        const result = [];

        for (const title of dataTitles) {
            const creditsCount = await getCreditsCount(title.id);
            result.push({ title: title.title, creditsCount });
        }

        return result;

    } catch (error) {
        throw error.message;
    }
}

let dataCreditsObject;

async function initializeData() {
    try {
        const dataCredits = await parseCSV(filePathCredits);
        dataCreditsObject = {};

        dataCredits.forEach((element) => {
            const titleId = element.id;
            dataCreditsObject[titleId] = (dataCreditsObject[titleId] || 0) + 1;
        });
    } catch (error) {
        throw new error('Error');
    }
}

async function getCreditsCount(titleId) {
    if (!dataCreditsObject) {
        await initializeData();
    }

    return dataCreditsObject[titleId] || 0;
}
