const parseData = require('./parseData')

let filePathTitles = "./assets/titles.csv"
let filePathCredits = "./assets/credits.csv"

parseData(filePathTitles)
    .then((parsedData) => {
    
        limitArray(parsedData, 1)
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// -------------------------------------------------------------

parseData(filePathCredits)
    .then((parsedData) => {

        console.log(parsedData[0]);

    })
    .catch((error) => {
        
        console.error("Error:", error);
    });

// -------------------------------------------------------------

function limitArray(array, limit, key){
    for  (let i = 0; i < limit; i++){
        if(key){
            console.table(array[i][key]);
        } else {
            console.table(array[i]);
        }
        
    }
}


function getTitles(){
    
}