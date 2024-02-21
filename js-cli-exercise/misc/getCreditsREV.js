import { parseCSV as parseData } from './parseDataAsyncAwait.mjs';

let dataCredits = null;
const filePathCredits = "./assets/credits.csv";

async function initializeData() {
    try {
        dataCredits = await parseData(filePathCredits);
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

        // console.log(count)
        return count;
    } catch (error) {
        console.error("Error counting credits:", error);
        throw error;
    }
}

// getCreditsCount('tm1260999')
export { getCreditsCount };
