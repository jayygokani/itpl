/*
Exercise 2 - give detailed information of credits for a particular movie
*/

import {parseCSV} from './modules/ProcessDataMain.js'

const filePathTitles = "./assets/titles.csv"
const filePathCredits = "./assets/credits.csv";


let dataCreditsObject;

getCredits().then((res) => {
    // console.table(res);
}).catch((err) => {
    console.log(err);
})


async function initializeData() {
    try {
        const dataCredits = await parseCSV(filePathCredits);
        dataCreditsObject = [];

        for (const element of dataCredits){

            const titleId = element.id;
            const name = element.name;
            const character = element.character;
            const role = element.role
            
            // dataCreditsObject[titleId] = (dataCreditsObject[titleId] || 0) + 1;
            
        }
        
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

async function getCredits() {
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