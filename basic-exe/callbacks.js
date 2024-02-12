function getData(data, getNextData){
    setTimeout(() => {
        console.log("data: " + data);
        if(getNextData){
            getNextData();
        }
    }, 750);
}


// Callback hell:
getData(1, ()=>{
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});













/*
getData(2);
getData(3);
getData(4);
*/


/*
console.log("One");
setTimeout(()=>{
    console.log("Two");
}, 1000);
console.log("Three")
*/