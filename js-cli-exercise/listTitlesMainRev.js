/*
Exercise 1 - this code returns the number of people in a particular movie
*/


import {getCreditsCount, parseCSV as parseData} from './modules/ProcessDataMainRev.js'

let filePathTitles = "./assets/titles.csv"

async function getFilterData() {
    try {
        let dataTitles = await parseData(filePathTitles)
        const size = dataTitles.length;
        
        for (let i = 0; i < size; i++){
            let c = await getCreditsCount(dataTitles[i].id)
            console.log(`${dataTitles[i].title} : ${c}`)
        }

    } catch (error) {
        throw error;
    }
}

getFilterData()
