function printFile(file){
    const reader = new FileReader();
    reader.onload = (evt) => {
        console.log(evt.target.result);
    };

    reader.readAsText(file);
}

let file = './assets/titles.csv'
printFile(file)