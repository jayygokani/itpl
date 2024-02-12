// async functions ALWAYS returns a promise. 
// await pauses the execution of its surrounding async function until the promise is settled
// await can be used inside an async funcion only


async function getData(data) {
    console.log("Data: ", data);
}

getData(1).then((res) => {
    console.log(res);
});