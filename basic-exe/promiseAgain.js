// (4+2)*3

async function sum(x,y){
    return x+y;
}

async function product(x,y){
    return x*y;
}


async function operation(x,y,z){
    let a = await sum(x,y);
    let final = product(a, z);
    return final
}

operation(4,2,3).then((resolve) => {
    console.log(resolve)
})












// function getData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data: ', data);
//             setTimeout(() => {
//                 if(data >= 0){
//                     resolve('Success *******');
//                 } else {
//                     reject("FAIL ***");
//                 }
//             })
//             // reject("FAIL ***");
//         }, 1500);
//     })
// }

// getData(0).then((resolve) => {
//     console.log(resolve);
// }).catch((reject) => {
//     console.log(reject);
// });


// getData(-1);

// getData(-1).catch((reject) => {
//     console.log(reject);
// }).then((resolve) => {
//     console.log('----------------------')
//     console.log(resolve);
// })