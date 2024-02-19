function getData(){
    return new Promise((resolve, reject) => {
        console.log('getData() function');
        resolve(200);
    })
}



async function getDataAsync() {
    console.log('getDataAsync() function');
}


(async () => {
    await getData();
})();