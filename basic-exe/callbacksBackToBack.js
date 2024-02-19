function add(x,y, callbackFunction){
    setTimeout(() => {
        console.log("Running....");
        // return x+y;
        callbackFunction(null, x+y);
    
    }, 1500);
}

add(2, 3, (err, res) => {
    if (err){
        console.error("ERROR: ", err);
    } else {
        console.log("Result: ", res);
    }
})



/*
// To solve this, we use the above method
function add(x,y){
    setTimeout(() => {
        console.log("Running....")
        return x+y;

    }, 1500);
}

function mult(x,y){
    setTimeout(() => {
        
        return x*y;

    }, 1500);
}

console.log("Start");
console.log("the fucntion: "+ add(2,3));
console.log("End");
*/





/*
function getData(data, getNextData){
    setTimeout(() => {
        console.log('Data: ', data);
        if(getNextData){
            getNextData();
        }
    }, 1000)
}


getData(1, () => {
    getData(2, () => {
        getData(3);
    })
});
// getData(2);
// getData(3);
*/