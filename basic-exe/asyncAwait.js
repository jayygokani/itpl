// async functions ALWAYS returns a promise. 
// await pauses the execution of its surrounding async function until the promise is settled
// await can be used inside an async funcion only


async function getData(data) {
    console.log("Data: ", data);
}

getData(1).then((res) => {
    console.log(res);
});
// async functions ALWAYS returns a promise. 
// await pauses the execution of its surrounding async function until the promise is settled
// await can be used inside an async funcion only



function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data: ", data);
            resolve('******* Success *******');
            
        }, 1500);
    })
}

(async () => {
    await getData(1).then(() => {
        return getData(1.1);
    }).then((res) => {
        console.log(res);
    });

    await getData(2).then(() => {
        return getData(2.1);
    }).then((res) => {
        console.log(res);
    });

}) ();


// (async () => {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }) ();


/*
async function fetchData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
fetchData();
*/








/*
function api(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("*** DATA *** " + data);
            resolve(200);
        }, 1000);
    })
}

async function getData(){
    
    // await setTimeout(() => {
    //     api(2);
    // }, 1000);
    await api(1);
    api(2);
    await api(5);
    
    // await api().then((res) => {
    //     console.log(res);
    // });

}
getData();
*/
// await api(); // error cause no async function out of this api() call