import {parseCSV as parseData} from './modules/parseDataAsyncAwait.mjs'
import {getCreditsCount} from './modules/getCreditsREV.js'

let filePathTitles = "./assets/titles.csv"

async function getData() {
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

getData();
