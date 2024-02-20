import {parseCSV as parseData} from './parseDataAsyncAwait.mjs'

// let filePathTitles = "./assets/titles.csv"
let filePathCredits = "./assets/credits.csv"

async function getCreditsCount(titleId){
    let count = 0;
    try {

        let dataCredits = await parseData(filePathCredits)
        
        dataCredits.forEach(element => {
            if(element.id == titleId){
                count++
            }
            // console.log(element.name)
        });
        return count;
        // console.log(count)
    } catch (error) {
        console.log(error)
    }
}
// getCreditsCount('tm1260999')



export { getCreditsCount };