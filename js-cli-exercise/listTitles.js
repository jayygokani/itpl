import {parseCSV as parseData} from './modules/parseDataAsyncAwait.mjs'
import {getCreditsCount} from './modules/getCreditsREV.js'

let filePathTitles = "./assets/titles.csv"
// let filePathCredits = "./assets/credits.csv"


async function getData() {
    try {
        let dataTitles = await parseData(filePathTitles)
        const size = dataTitles.length;
        
        // not working - goes in an infinite loop idk why
        // dataTitles.forEach(element => {
        //     getCreditsCount(element.id)
        //     console.log(1)
        // });

        for (let i = 0; i < size; i++){
            let c = await getCreditsCount(dataTitles[i].id)
            console.log(`${dataTitles[i].title} : ${c}`)
        }

    } catch (error) {
        // console.log('error')
        throw error;
    }
}

getData();
