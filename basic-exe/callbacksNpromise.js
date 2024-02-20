function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data: ', data);
            setTimeout(() => {
                resolve('Success *******');
            })
            // reject("FAIL ***");
        }, 1500);
    })
}


// getData(1).catch((err) => {
//     console.log("******************** Did not resolve ********************");
//     console.error(err);
// })

getData(1).then((res) => {
    
    return getData(2);

}).then((res) => {

    return getData(3);

}).then((res) => {
    
    console.log(res);

});










// getData(1).catch((err) => {
//     getData(2).then((res) => {
//         console.log(res);
//     })

//     getData(2).catch((err) => {
//         console.log("ERROR ************** : ", err)
//     })
// })













/* Promise chain - One way - can be improved
getData(1).then((res) => {
    console.log(res);

    getData(2).then((res) => {
        console.log(res);

        getData(3).then((res) => {
            console.log(res);
        });
    });
});
*/










/*
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
*/












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